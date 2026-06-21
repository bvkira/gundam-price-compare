#!/usr/bin/perl
use strict;
use warnings;
use utf8;
use JSON::PP;
use Encode qw(decode);

binmode(STDERR, ':utf8');

my $data_file = 'js/data.js';
my $prices_file = 'db/prices.json';

# 讀取網頁用卡牌資料
open my $dfh, '<', $data_file or die "Cannot read $data_file: $!";
local $/;
my $data_js = <$dfh>;
close $dfh;

my ($data_json) = $data_js =~ /const\s+CARD_DATA\s*=\s*(.*);/s;
die "Cannot parse CARD_DATA from $data_file\n" unless $data_json;

my $data = decode_json($data_json);

# 讀取 yuyu-tei 價格資料
open my $pfh, '<', $prices_file or die "Cannot read $prices_file: $!";
local $/;
my $prices_json = <$pfh>;
close $pfh;

my $prices = decode_json($prices_json);

# 建立 lookup：card_number（去掉平行後綴） +> rarity -> 最新一筆觀測
my %latest_by_rarity;
my %latest_by_number;

for my $rec (@$prices) {
  my $number = normalize_number($rec->{card_number});
  next unless $number;
  my $rarity = normalize_rarity($rec->{rarity});

  my $key_rarity = "$number|$rarity";
  my $existing_r = $latest_by_rarity{$key_rarity};
  if (!$existing_r ||
      $rec->{observed_at} gt $existing_r->{observed_at} ||
      ($rec->{observed_at} eq $existing_r->{observed_at} && $rec->{price_jpy} < $existing_r->{price_jpy})) {
    $latest_by_rarity{$key_rarity} = $rec;
  }

  my $existing_n = $latest_by_number{$number};
  if (!$existing_n ||
      $rec->{observed_at} gt $existing_n->{observed_at} ||
      ($rec->{observed_at} eq $existing_n->{observed_at} && $rec->{price_jpy} < $existing_n->{price_jpy})) {
    $latest_by_number{$number} = $rec;
  }
}

my $matched = 0;
my $fallback = 0;
my $last_updated = '';

for my $card (@{ $data->{cards} }) {
  my $number = normalize_number($card->{number});
  my $rarity = normalize_rarity($card->{rarity});
  my $key = "$number|$rarity";

  my $rec = $latest_by_rarity{$key} || $latest_by_number{$number};
  next unless $rec;

  $card->{prices}{a} = $rec->{price_jpy};
  $last_updated = $rec->{observed_at} if $rec->{observed_at} gt $last_updated;

  if ($latest_by_rarity{$key}) {
    $matched++;
  } else {
    $fallback++;
  }
}

$data->{lastUpdated} = $last_updated || '1970-01-01T00:00:00';

# 寫回 js/data.js
open my $out, '>', $data_file or die "Cannot write $data_file: $!";
print $out "const CARD_DATA = ";
print $out encode_json($data);
print $out ";\n";
close $out;

warn "Updated " . ($matched + $fallback) . " cards with yuyu-tei prices.\n";
warn "  Exact rarity match: $matched\n";
warn "  Fallback by number only: $fallback\n";
warn "  Last updated: $data->{lastUpdated}\n";
warn "Total cards: " . scalar(@{ $data->{cards} }) . "\n";

sub normalize_number {
  my ($n) = @_;
  return '' unless defined $n;
  $n =~ s/_p\d+$//i;
  return uc($n);
}

sub normalize_rarity {
  my ($r) = @_;
  return '' unless defined $r;
  $r =~ s/\s+//g;
  return uc($r);
}
