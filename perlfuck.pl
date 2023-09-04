#!/usr/bin/perl
use strict;
use warnings;

my $one = "(()=({}.{})=~/()/)";
my $zero = "(()=({})=~/^\$/)";

sub number {
	my ($n) = @_;

	if ($n == 0) {
		return $zero;
	}

	my @expression = ($one) x $n;
	return join("+", @expression);
}

my %map;

sub from_string {
	my ($s) = @_;
	my @chars = split("", $s);
	my @encoded_chars;

	my $last_index = $#chars;
	my $loop_counter = eval number(0);

	foreach my $char (@chars) {
		my $char_code = ord($char);
		push @encoded_chars, "chr(" . number($char_code) . ")";
		if ($loop_counter < $last_index) {
			push @encoded_chars, ".";
		}
		$loop_counter += eval number(1);
	}
	return join("", @encoded_chars);
}

print "eval(" . from_string('print "test";') . ");";
