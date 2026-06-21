#!/usr/bin/perl
use strict;
use warnings;
use utf8;
use Encode qw(decode);

use JSON::PP;

binmode(STDOUT, ':utf8');

my @packages = (
  ['618101', 'Newtype Rising [GD01]'],
  ['618102', 'Dual Impact [GD02]'],
  ['618103', 'Steel Requiem [GD03]'],
  ['618104', 'Phantom Aria [GD04]'],
  ['618001', 'Heroic Beginnings [ST01]'],
  ['618002', 'Wings of Advance [ST02]'],
  ['618003', "Zeon's Rush [ST03]"],
  ['618004', 'SEED Strike [ST04]'],
  ['618005', 'Iron Bloom [ST05]'],
  ['618006', 'Clan Unity [ST06]'],
  ['618007', 'Celestial Drive [ST07]'],
  ['618008', 'Flash of Radiance [ST08]'],
  ['618009', 'Destiny Ignition [ST09]'],
  ['618010', 'Generation Pulse [ST10]'],
  ['618201', 'Eternal Nexus [EB01]'],
  ['618701', '限定商品收錄卡牌'],
  ['618000', 'LIMITED BOX Ver.β'],
  ['618801', '基本卡牌'],
  ['618901', '推廣卡'],
);

my $base_url = 'https://www.gundam-gcg.com/zh-tw/cards/index.php';
my @cards;

for my $pkg (@packages) {
  my ($id, $series) = @$pkg;
  warn "Fetching package $id ($series)...\n";

  my $cmd = "curl -s -L -X POST \"$base_url\" -d \"package=$id\" -d \"freeword=\" -d \"sort=\"";
  my $html = `$cmd`;

  unless (defined $html && length $html) {
    warn "  Failed to fetch package $id\n";
    next;
  }

  my $count = 0;
  while ($html =~ /<li class="cardItem">\s*<a[^>]*?data-src="detail\.php\?detailSearch=([^"]+)"[^>]*>.*?<img[^>]*?data-src="([^"]+)"[^>]*?alt="([^"]*)".*?<\/li>/sg) {
    my ($detail_id, $src, $alt) = ($1, $2, decode('UTF-8', $3));

    my $image = $src;
    $image =~ s/^\.\.\/\.\.\//https:\/\/www.gundam-gcg.com\//;
    $image = "https://wsrv.nl/?url=" . $image . "&w=400";

    my $name = $alt;
    $name =~ s/^\s+|\s+$//g;
    $name = '未命名卡片' if $name eq '';

    my $prices = generate_prices($detail_id);

    push @cards, {
      id     => $detail_id,
      name   => $name,
      number => $detail_id,
      series => $series,
      image  => $image,
      prices => $prices,
    };
    $count++;
  }

  warn "  Found $count cards\n";
}

warn "Total cards: " . scalar(@cards) . "\n";

my $data = {
  vendors => [
    { id => 'a', name => 'A店' },
    { id => 'b', name => 'B店' },
    { id => 'c', name => 'C店' }
  ],
  cards => \@cards,
};

my $json = JSON::PP->new->pretty(1)->utf8(0)->encode($data);
print "const CARD_DATA = ";
print $json;
print ";\n";

sub generate_prices {
  my ($seed) = @_;
  my $h = 0;
  for my $ch (split //, $seed) {
    $h = ($h * 31 + ord($ch)) % 100000;
  }
  my $a = 50 + ($h % 3000);
  my $b = 50 + (($h * 7) % 3000);
  my $c = 50 + (($h * 13) % 3000);
  return { a => $a, b => $b, c => $c };
}
