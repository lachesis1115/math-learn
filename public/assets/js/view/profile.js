$(function () {
  jQuery(".fancybox").fancybox();
  $('#profile-01 h3').text(LoginUser.name);

  var html = [];

  html.push('<div class="form-group">');
  html.push('<div class="col-lg-6">' + '  name: ' + LoginUser["name"] + '</div>');
  html.push('</div>');
  html.push('<div class="form-group">');
  html.push('<div class="col-lg-6">' + '  age: ' + LoginUser["age"] + '</div>');
  html.push('</div>');
  html.push('<div class="form-group">');
  html.push('<div class="col-lg-6">' + '  sex: ' + LoginUser["sex"] + '</div>');
  html.push('</div>');
  html.push('<div class="form-group">');
  html.push('<div class="col-lg-6">' + '  point: ' + LoginUser["points"] + '</div>');
  html.push('</div>');
  html.push('<div class="form-group">');
  html.push('<div class="col-lg-6">' + '  favorite color: ' + LoginUser["color"] + '</div>');
  html.push('</div>');
  html.push('<div class="form-group">');
  html.push('<div class="col-lg-6">' + '  favorite animal: ' + LoginUser["animal"] + '</div>');
  html.push('</div>');
  html.push('<div class="form-group">');
  html.push('<div class="col-lg-6">' + '  favorite music: ' + LoginUser["music"] + '</div>');
  html.push('</div>');
  $('.profile').html(html.join(''));
});