$(function () {
  jQuery(".fancybox").fancybox();

  //$("select.styled").customSelect();
  
  var portion=[];
  for (var i = 0, j = 6; i < j; i++) {
    portion[i]= (Achievement[i]["done"]) / (Achievement[i]["total"])*100;
  }

  var html = [];
  var style =["alert-success","alert-info","alert-warning","alert-danger","alert-success","alert-info"];
  html.push('<div class="steps pn">');

  for (var i = 0, j = 6; i < j; i++) {
    html.push('<div class="alert ' + style[i] + '"><h4><b>' + Achievement[i]["number"] + '. ' + Achievement[i]["title"] + ' (' + Achievement[i]["done"] + '/' + Achievement[i]["total"]  + ')</b></h4>');
    html.push('    <div class="progress progress-striped active">');
    html.push('        <div class="progress-bar progress-bar-info"  role="progressbar" aria-valuenow="' + portion[i] + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + portion[i] + '%">');
    html.push('        </div>');
    html.push('    </div>');
    html.push('</div>');
  }
  html.push('<input type="submit" value="See My Achievements!" id="submit"/>');                
  html.push('</div>');
  $('.achievement').html(html.join(''));
});