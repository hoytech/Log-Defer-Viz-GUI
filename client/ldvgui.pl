use common::sense;

use Thrust;
use AnyEvent;
use File::Basename;
use Cwd 'abs_path';


if (!@ARGV) {
  ## hack for dev testing
  warn "defaulting to tp.log.gz since no file specified";
  push @ARGV, 'tp.log.gz';
}


my $thrust = Thrust->new;

my $window = $thrust->window(
              root_url => 'file://' . dirname(abs_path($0)) . '/index.html',
              title => 'Log Defer Viz: ' . join(' ', @ARGV),
              icon_path => dirname(abs_path($0)) . '/assets/img/icon.png',
            )->on(closed => sub { exit })
             ->open_devtools
             ->show;

$window->on(remote => sub {
  $window->clear('remote');

  ## Send init message
  $window->remote({ message => { init => { cmd_line => join ' ', @ARGV, } }, });

  open(my $fh, '-|', 'log-defer-viz', '--pass-through', @ARGV) || die "unable to run log-defer-viz: $!";

  my $ldv_handle; $ldv_handle = AnyEvent::Handle->new(fh => $fh, on_error => sub { undef $ldv_handle });

  my $message_handler; $message_handler = sub {
    my ($handle, $msg) = @_;

    $window->remote({ message => { entry => $msg, } });

    $handle->push_read(json => $message_handler);
  };

  $ldv_handle->push_read(json => $message_handler);
});

$thrust->run;
