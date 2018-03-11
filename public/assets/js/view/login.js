$(function() {
  $('#login').on('click', function() {
    var name = $('#name').val().trim();
    var password = $('#password').val().trim();
    var isLogin = false;
    if (!name || !password) {
      return alert('Username or Password cannot be empty');
    }
    for (var i = 0, j = User.length; i < j; i++) {
      if (User[i].name === name && User[i].password === password) {
        Cookies.set('loginUser', User[i], { expires: 7 });
        location.href = 'index.html';
        isLogin = true;
      }
    }
    if (!isLogin) {
      alert('Wrong username or password');
    }
  });
});