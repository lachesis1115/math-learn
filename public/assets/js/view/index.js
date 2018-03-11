$(document).ready(function () {
  $("#date-popover").popover({html: true, trigger: "manual"});
  $("#date-popover").hide();
  $("#date-popover").click(function (e) {
    $(this).hide();
  });

  $("#my-calendar").zabuto_calendar({
    action: function () {
      return myDateFunction(this.id, false);
    },
    action_nav: function () {
      return myNavFunction(this.id);
    },
    ajax: {
      url: "show_data.php?action=1",
      modal: true
    },
    legend: [
      {type: "text", label: "Special event", badge: "00"},
      {type: "block", label: "Regular event",}
    ]
  });
});


function myNavFunction(id) {
  $("#date-popover").hide();
  var nav = $("#" + id).data("navigation");
  var to = $("#" + id).data("to");
  console.log('nav ' + nav + ' to: ' + to.month + '/' + to.year);
}

$(function () {
  var html = [];
  html.push('<thead>');
  html.push('    <tr>');
  html.push('        <th> Rank</th>');
  html.push('        <th> Name</th>');
  html.push('        <th>Points</th>');
  html.push('    </tr>');
  html.push('</thead>');
  html.push('<tbody>');

  var sortedUser = User.sort(function(a, b) {
    return b.points - a.points;
  });

  for (var i = 0, j = sortedUser.length; i < j; i++) {
    html.push('    <tr>');
    html.push('        <td>' + (i+1) + '</td>');
    html.push('        <td>' + sortedUser[i]["name"] + '</td>');
    html.push('        <td>' + sortedUser[i]["points"] + '</td>');
    html.push('    </tr>');
  }
  html.push('</tbody>');
  $('.rank').html(html.join(''));
});