$(function () {
  // 显示模态对话框
  $('#myModal').modal();

  $('#save-btn').on('click', function () {
    var happy = parseFloat($('#happy-input').val().trim());
    var exciting = parseFloat($('#exciting-input').val().trim());
    var sad = parseFloat($('#sad-input').val().trim());

    if (happy && typeof happy === 'number' && happy >= 0 && happy <= 100) {
      LoginUser.happy = happy;
    } else {
      return alert('the happy value should between 0-100!');
    }
    if (exciting && typeof exciting === 'number' && exciting >= 0 && exciting <= 100) {
      LoginUser.exciting = exciting;
    } else {
      return alert('the exciting value should between 0-100!');
    }
    if (sad && typeof sad === 'number' && sad >= 0 && sad <= 100) {
      LoginUser.sad = sad;
    } else {
      return alert('the sad value should between 0-100!');
    }
    Cookies.set('loginUser', LoginUser);
    $('#myModal').modal('hide');
  });

  var emotion = 1;
  if (LoginUser.sad > LoginUser.happy && LoginUser.sad > LoginUser.exciting)  emotion = 3;
  if (LoginUser.exciting > LoginUser.happy && LoginUser.exciting > LoginUser.sad) emotion = 2;
  if (LoginUser.happy > LoginUser.exciting && LoginUser.happy > LoginUser.sad)  emotion = 1;
  if (LoginUser.happy == LoginUser.exciting && LoginUser.happy == LoginUser.sad) emotion = 4;

  var html = [];
  if (emotion == 3)  html.push('<a id="sad" class="btn btn-info  btn-sm">Sad Mode</a>');
  if (emotion == 1)  html.push('<a id="happy" class="btn btn-warning  btn-sm">Happy Mode</a>');
  if (emotion == 2)  html.push('<a id="exciting" class="btn btn-danger  btn-sm">Exciting Mode</a>');
  if (emotion == 4)  html.push('<a id="general" class="btn btn-success  btn-sm">General Mode</a>');
  $('.mood').html(html.join(''));

  var point =0;
  html.push('<h3><labe1 class="font-point">' + point + '</labe1></h3>');
  $('.point').html(point.join(''));

  var i = 0;
  html = [];
  html.push('<center>' + Paper[i]["title"] + '<span class="label label-info">' + Paper[i]["level"] + '</span></center>');
  $('.exam_title center').html(html.join(''));

  html = [];
  for (var m = 0; m < 3; m++) {
    html.push('<div class="form-group">');
    html.push('    <label class="col-sm-2 col-sm-2 control-label">Question ' + (m + 1) + '</label>');
    html.push('    <div class="col-sm-6"><h4 class="mb">' + Paper[i]["q" + (m + 1)] + '</h4></div>');
    html.push('    <div class="col-sm-3"><input type="text" class="form-control round-form"></div>');
    html.push('</div>');
  }
  $('.question-group-one').html(html.join(''));

  html = [];
  for (var n = 0; n < 3; n++) {
    html.push('<div class="form-group">');
    html.push('    <label class="col-sm-2 col-sm-2 control-label">Question ' + (n + m + 1) + '</label>');
    html.push('    <div class="col-sm-6"><h4 class="mb">' + Paper[i]["q" + (n + m + 1)] + '</h4></div>');
    html.push('    <div class="col-sm-4">');
    html.push('        <div class="radio">');
    html.push('            <label><input type="radio" value="true" checked><h4>true</h4></label>');
    html.push('        </div>');
    html.push('        <div class="radio">');
    html.push('            <label><input type="radio" value="false"><h4>false</h4></label>');
    html.push('        </div>');
    html.push('    </div>');
    html.push('</div>');
  }
  $('.question-group-two').html(html.join(''));

});