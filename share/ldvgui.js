$(document).ready(function() {
  THRUST.remote.listen(function(msg) {
    //console.log(msg);
    $("#template-log-msg").tmpl(msg).appendTo("#pane-log-msgs");
  });

  THRUST.remote.send({ message: 'ready' });
});
