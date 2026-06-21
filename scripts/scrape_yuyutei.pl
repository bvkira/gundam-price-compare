#!/usr/bin/perl
use strict;
use warnings;
use utf8;
use JSON::PP;
use File::Path qw(make_path);
use Encode qw(decode);

binmode(STDERR, ':utf8');

my @sets = (
  { code => 'gd04', name => 'Phantom Aria [GD04]' },
  { code => 'gd03', name => 'Steel Requiem [GD03]' },
  { code => 'gd02', name => 'Dual Impact [GD02]' },
  { code => 'gd01', name => 'Newtype Rising [GD01]' },
  { code => 'st09', name => 'Destiny Ignition [ST09]' },
  { code => 'st08', name => 'Flash of Radiance [ST08]' },
  { code => 'st07', name => 'Celestial Drive [ST07]' },
  { code => 'st06', name => 'Clan Unity [ST06]' },
  { code => 'st05', name => 'Iron Bloom [ST05]' },
  { code => 'st04', name => 'SEED Strike [ST04]' },
  { code => 'st03', name => "Zeon's Rush [ST03]" },
  { code => 'st02', name => 'Wings of Advance [ST02]' },
  { code => 'st01', name => 'Heroic Beginnings [ST01]' },
  { code => 'promo-gd10', name => 'Promo GD' },
  { code => 'promo-st20', name => 'Promo ST' },
  { code => 'promo-t100', name => 'Promo T' },
  { code => 'rp-100', name => 'RP' },
  { code => 'exbp-100', name => 'EXBP' },
  { code => 'exrp-100', name => 'EXRP' },
  { code => 'limited1.0', name => 'Limited' },
  { code => 'reto', name => 'Reto' },
);

my $db_dir = 'db';
make_path($db_dir);
my $db_file = "$db_dir/prices.json";

my @existing;
if (-f $db_file) {
  open my $fh, '<', $db_file or die "Cannot read $db_file: $!";
  local $/;
  my $json = <$fh>;
  close $fh;
  my $decoded = eval { decode_json($json) };
  @existing = @{ $decoded // [] };
}

my @records;
my $observed_at = iso_now();

for my $set (@sets) {
  warn "Fetching $set->{code} ($set->{name}) ...\n";

  my $url = "https://yuyu-tei.jp/sell/gcg/s/search?vers%5B%5D=$set->{code}";
  my $raw = `curl -s -L "$url"`;
  my $html = decode('UTF-8', $raw);
  sleep 1;

  unless ($html) {
    warn "  No response, skipping\n";
    next;
  }

  my @chunks = split(/class="card-product/, $html);
  shift @chunks; # discard content before first card

  my $count = 0;
  for my $chunk (@chunks) {
    $chunk = '<div class="card-product' . $chunk;
    my $sold_out = $chunk =~ /sold-out/ ? 1 : 0;

    my ($alt) = $chunk =~ /class="position-relative product-img".*?alt="([^"]+)"/s;
    next unless $alt;

    my ($number) = $chunk =~ /<span[\s\S]*?>\s*([A-Z]{2}\d{2,3}-\d+)\s*<\/span>/i;
    next unless $number;

    my ($name) = $chunk =~ /<h4[^>]*>([^<]+)<\/h4>/;
    $name = '' unless defined $name;
    $name =~ s/^\s+|\s+$//g;

    my ($price_str) = $chunk =~ /<strong[\s\S]*?>\s*([\d,]+)\s*円\s*<\/strong>/;
    next unless defined $price_str;
    $price_str =~ s/,//g;

    my ($stock) = $chunk =~ /在庫\s*:\s*([^<]+)</;
    $stock = '' unless defined $stock;
    $stock =~ s/^\s+|\s+$//g;

    my ($href) = $chunk =~ /<a[\s\S]*?href="(https:\/\/yuyu-tei\.jp\/sell\/gcg\/card\/[^"]+)"/;
    my ($img) = $chunk =~ /src="(https:\/\/card\.yuyu-tei\.jp\/gcg\/[^"]+)"/;

    push @records, {
      observed_at => $observed_at,
      vendor      => 'yuyu-tei',
      set_code    => $set->{code},
      set_name    => $set->{name},
      card_number => $number,
      card_name   => $name,
      rarity      => extract_rarity($alt),
      price_jpy   => int($price_str),
      currency    => 'JPY',
      stock       => $stock,
      sold_out    => $sold_out,
      condition   => '傷無し',
      url         => $href,
      image_url   => $img,
    };
    $count++;
  }

  warn "  Found $count cards\n";
}

push @existing, @records;

open my $out, '>', $db_file or die "Cannot write $db_file: $!";
print $out encode_json(\@existing);
close $out;

warn "Total records in database: " . scalar(@existing) . "\n";

sub iso_now {
  my ($sec, $min, $hour, $mday, $mon, $year) = localtime();
  return sprintf('%04d-%02d-%02dT%02d:%02d:%02d', $year + 1900, $mon + 1, $mday, $hour, $min, $sec);
}

sub extract_rarity {
  my ($alt) = @_;
  # alt example: "GD01-001 LR++ ガンダム(パラレル)"
  my ($rarity) = $alt =~ /\s([A-Z\+\-]+)\s/;
  return $rarity || '';
}
