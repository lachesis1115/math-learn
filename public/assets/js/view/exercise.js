$(function () {
  // 显示模态对话框

  $('#myModal').modal();

  $('#save-btn').on('click', function () {
    var heartRate = parseFloat($('#hr-input').val().trim());
    var sclevel = parseFloat($('#sc-input').val().trim());
    var bvp = parseFloat($('#bvp-input').val().trim());

    if (heartRate && typeof heartRate === 'number' && heartRate >= 60 && heartRate <= 90) {
      LoginUser.heartRate = heartRate;
    } else {
      return alert('the heartRate value should between 60-90!');
    }
    if (sclevel && typeof sclevel === 'number' && sclevel >= 0 && sclevel <= 100) {
      LoginUser.sclevel = sclevel;
    } else {
      return alert('the sclevel value should between 0-100!');
    }
    if (bvp && typeof bvp === 'number' && bvp >= 0 && bvp <= 100) {
      LoginUser.bvp = bvp;
    } else {
      return alert('the bvp value should between 0-100!');
    }
    Cookies.set('loginUser', LoginUser);
    $('#myModal').modal('hide');
  });

  var emotion = 1;
  if (LoginUser.bvp > LoginUser.heartRate && LoginUser.bvp > LoginUser.sclevel)  emotion = 3;
  if (LoginUser.sclevel > LoginUser.heartRate && LoginUser.sclevel > LoginUser.bvp) emotion = 2;
  if (LoginUser.heartRate > LoginUser.sclevel && LoginUser.heartRate > LoginUser.bvp)  emotion = 1;
  if (LoginUser.heartRate == LoginUser.sclevel && LoginUser.heartRate == LoginUser.bvp) emotion = 4;

  var html = [];
  if (emotion == 3)  html.push('<a id="bvp" class="btn btn-lg  btn-info  btn-sm">bvp Mode</a>');
  if (emotion == 1)  html.push('<a id="heartRate" class="btn btn-lg  btn-warning  btn-sm">heartRate Mode</a>');
  if (emotion == 2)  html.push('<a id="sclevel" class="btn btn-lg  btn-danger  btn-sm">sclevel Mode</a>');
  if (emotion == 4)  html.push('<a id="general" class="btn btn-lg  btn-success  btn-sm">General Mode</a>');
  $('.mood').html(html.join(''));


  //exercise cube part
  var question = [
    {
      value: '1',
      style: {
        backgroundColor: '#e67e22'
      }
    },
    {
      value: '2',
      style: {
        backgroundColor: '#1ABC9C'
      }
    },
    {
      value: '3',
      style: {
        backgroundColor: '#f1c40f'
      }
    },
    {
      value: '4',
      style: {
        backgroundColor: '#2ECC71'
      }
    },
    {
      value: '5',
      style: {
        backgroundColor: '#3498DB'
      }
    },
    {
      value: '6',
      style: {
        backgroundColor: '#E74C3C'
      }
    },
    {
      value: '7',
      style: {
        backgroundColor: '#9B59B6'
      }
    },
    {
      value: '8',
      style: {
        backgroundColor: '#BDC3C7'
      }
    },
    {
      value: '9',
      style: {
        backgroundColor: '#447788'
      }
    },
    {
      value: '0',
      style: {
        backgroundColor: '#203537'
      }
    }
  ];
  var operation = [
    {
      value: '÷',
      style: {
        backgroundColor: '#3498DB'
      }
    },
    {
      value: '×',
      style: {
        backgroundColor: '#E74C3C'
      }
    },
    {
      value: '-',
      style: {
        backgroundColor: '#9B59B6'
      }
    },
    {
      value: '+',
      style: {
        backgroundColor: '#BDC3C7'
      }
    }
  ];
  var equal = [
    {
      value: '=',
      style: {
        backgroundColor: '#2ECC71'
      }
    }
  ];
  var answer = [
    {
      value: '?',
      style: {
        backgroundColor: '#e67e22'
      }
    },
    {
      value: '1',
      style: {
        backgroundColor: '#e67e22'
      }
    },
    {
      value: '2',
      style: {
        backgroundColor: '#1ABC9C'
      }
    },
    {
      value: '3',
      style: {
        backgroundColor: '#f1c40f'
      }
    },
    {
      value: '4',
      style: {
        backgroundColor: '#2ECC71'
      }
    },
    {
      value: '5',
      style: {
        backgroundColor: '#3498DB'
      }
    },
    {
      value: '6',
      style: {
        backgroundColor: '#E74C3C'
      }
    },
    {
      value: '7',
      style: {
        backgroundColor: '#9B59B6'
      }
    },
    {
      value: '8',
      style: {
        backgroundColor: '#BDC3C7'
      }
    },
    {
      value: '9',
      style: {
        backgroundColor: '#447788'
      }
    },
    {
      value: '0',
      style: {
        backgroundColor: '#203537'
      }
    }
  ];

  var point = 0;
  var questionNumber = 1;
  var QUESTION_COUNT = 10;
  var correctNumber = 0;
  var accuracy = 0;
  var global_value = 0;
  var i = 0;

  //initial part
  $('.point').html('<h3><label class="font-point">' + point + '</label></h3>');
  $('.title').html('<h3><labe1 class="font-title">' + Paper[i]["title"] + '</label></h3>');
  $('.level').html('<h3><labe1 class="font-title">' + Paper[i]["level"] + '</label></h3>');
  $('.question_number').html('<h3><labe1 class="font-point">' + questionNumber + '</labe1></h3>');

  var questionCube = new HexaFlip(document.getElementById('hexaflip-demo5'),
    { set1: question, set2: question, set3: operation, set4: question, set5: question, set6: equal, set7: answer, set8: answer },
    { fontSize: 100, margin: 4, perspective: 1000, size: 150 }
  );

  var qreg = /(\d)?(\d)([+-×÷])(\d)?(\d)/;
  var qResult = Paper[i]['q' + questionNumber].match(qreg);
  questionCube.setValue({ set1: qResult[1] || '0', set2: qResult[2], set3: qResult[3], set4: qResult[4] || '0', set5: qResult[5], set6: '=',  set7: '?', set8: '?' });

  $('#set').on('click', function () {
    var answer = document.getElementById('answer_text');
    var value = answer.value;
    var one = value%10;
    var ten = (value-one)/10;
    global_value=value;
    questionCube.setValue({set7:ten,set8:one});
    
  });

  $('#check').on('click', function () {
    var html=[];

    if(global_value == Paper[i]['a' + questionNumber]){
      $('.judge').html('<h2 class="mb right">&#10004</h2>');
      point=point+10;
      html=[];
      $('.point').html('<h3><labe1 class="font-point">' + point + '</labe1></h3>');
      correctNumber=correctNumber+1;
    }
    else{
      $('.judge').html('<h2 class="mb wrong">&#10007</h2>');
    }
  });

  $('#next').on('click', function () {
    questionNumber=questionNumber+1;
    $('.judge').html('');
    qResult = Paper[i]['q' + questionNumber].match(qreg);
    questionCube.setValue({ set1: qResult[1] || '0', set2: qResult[2], set3: qResult[3], set4: qResult[4] || '0', set5: qResult[5], set6: '=',  set7: '?', set8: '?' });
    $('.question_number').html('<h3><labe1 class="font-title">' + questionNumber + '</labe1></h3>');
    if(questionNumber==10){
      $('.info').html('<strong>Wonderful!</strong> You have done all the questions!<a data-toggle="modal" data-target="#report"> See the report here</a</h3>');
                                        
    }
  });

  accuracy=correctNumber/questionNumber;

  jQuery(".fancybox").fancybox();



  var doughnutData = [
          {
              value: 70,
              color:"#31aa33"
          },
          {
              value : 30,
              color : "#fdfdfd"
          }
      ];
  var myDoughnut = new Chart(document.getElementById("report_canvas").getContext("2d")).Doughnut(doughnutData);

});

function two_char(n) {
  return n >= 10 ? n : "0" + n;
}
function time_fun() {
  var sec=0;
  setInterval(function () {
      sec++;
      var date = new Date(0, 0)
      date.setSeconds(sec);
      var h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();
      document.getElementById("time").innerText = two_char(h) + ":" + two_char(m) + ":" + two_char(s);
  }, 1000);
}