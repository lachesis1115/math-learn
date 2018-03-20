$(function() {
  // 初始化用户信息
  var user = Cookies.getJSON('loginUser');
  if (!user || !user.name) {
    location.href = 'login.html';
  }
  $('#user-name').text(user.name);
 
  if(user.name=="Richel")  $('.img-circle').attr("src","assets/img/kids/girl-6.png");
  if(user.name=="Marcel")  $('.img-circle').attr("src","assets/img/kids/boy-6.png");
  if(user.name=="Bill")  $('.img-circle').attr("src","assets/img/kids/boy-1.png");
  if(user.name=="Tony")  $('.img-circle').attr("src","assets/img/kids/boy-2.png");
  if(user.name=="Amy")  $('.img-circle').attr("src","assets/img/kids/girl-3.png");
  

  $('.logout').on('click', function() {
    Cookies.remove('loginUser');
    location.href = 'login.html';
  });

  window.LoginUser = user;
});