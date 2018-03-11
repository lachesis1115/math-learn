$(function () {
  $('#current-point').text(LoginUser["points"]);

  var $buyItem = null;
  $('.project-wrapper .btn-success').on('click', function() {
    $buyItem = $(this);
  });

  $('#myModal .btn-success').on('click', function() {
    var point = LoginUser["points"];
    if (point < 200) {
      alert('Your point is not enough.');
    } else {
      LoginUser.points -= 200;
      Cookies.set('loginUser', LoginUser);
      $('#current-point').text(LoginUser["points"]);
      $('#myModal').modal('hide');
    }
  })
});


