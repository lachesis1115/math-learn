$(function() {
  // 初始化用户信息
  var user = Cookies.getJSON('loginUser');
  if (!user || !user.name) {
    location.href = 'login.html';
  }
  $('#user-name').text(user.name);

  $('.logout').on('click', function() {
    Cookies.remove('loginUser');
    location.href = 'login.html';
  });

  window.LoginUser = user;
});