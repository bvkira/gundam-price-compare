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

# 建立 lookup：card_number（去掉平行後綴） -> 最新一筆觀測
my %latest;
for my $rec (@$prices) {
  my $number = normalize_number($rec->{card_number});
  next unless $number;

  my $existing = $latest{$number};
  if (!$existing ||
      $rec->{observed_at} gt $existing->{observed_at} ||
      ($rec->{observed_at} eq $existing->{observed_at} && $rec->{price_jpy} < $existing->{price_jpy})) {
    $latest{$number} = $rec;
  }
}

my $matched = 0;
for my $card (@{ $data->{cards} }) {
  my $number = normalize_number($card->{number});
  my $rec = $latest{$number};
  next unless $rec;

  $card->{prices}{a} = $rec->{price_jpy};
  $matched++;
}

# 寫回 js/data.js
open my $out, '>', $data_file or die "Cannot write $data_file: $!";
print $out "const CARD_DATA = ";
print $out encode_json($data);
print $out ";\n";
close $out;

warn "Updated $matched cards with yuyu-tei prices (A店).\n";
warn "Total cards: " . scalar(@{ $data->{cards} }) . "\n";

sub normalize_number {
  my ($n) = @_;
  return '' unless defined $n;
  $n =~ s/_p\d+$//i;
  return uc($n);
}
