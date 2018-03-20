$(function () {
  // 显示模态对话框

  $('#myModal').modal();

  $('#save-btn').on('click', function () {
    var heartRate = parseFloat($('#hr-input').val().trim());
    var sclevel = parseFloat($('#sc-input').val().trim());
    var bvp = parseFloat($('#bvp-input').val().trim());

    if (heartRate && typeof heartRate === 'number' && heartRate >= 60 && heartRate <= 100) {
      LoginUser.heartRate = heartRate;
    } else {
      return alert('the heartRate value should between 60-100!');
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

    var emotion = 1;
    if (LoginUser.bvp > LoginUser.heartRate && LoginUser.bvp > LoginUser.sclevel)  emotion = 3;
    if (LoginUser.sclevel > LoginUser.heartRate && LoginUser.sclevel > LoginUser.bvp) emotion = 2;
    if (LoginUser.heartRate > LoginUser.sclevel && LoginUser.heartRate > LoginUser.bvp)  emotion = 1;
    if (LoginUser.heartRate == LoginUser.sclevel && LoginUser.heartRate == LoginUser.bvp) emotion = 4;
  
    var html = [];
    if (emotion == 3)  html.push('<a id="bvp" class="btn btn-lg  btn-info">Happy Mode</a>');
    if (emotion == 1)  html.push('<a id="heartRate" class="btn btn-lg  btn-warning">Sad Mode</a>');
    if (emotion == 2)  html.push('<a id="sclevel" class="btn btn-lg  btn-danger">Exciting Mode</a>');
    if (emotion == 4)  html.push('<a id="general" class="btn btn-lg  btn-success">General Mode</a>');
    $('.mood').html(html.join(''));
  });

  $('#music-switch').on('change', function() {
    var mSwitch = $(this)[0].checked;
    var bgm = $('#bgm1')[0];
    if (mSwitch) {
      bgm.play();
    } else {
      bgm.pause();
    }
  });

  $('#music1').on('click', function() {
    var bgm = $('#bgm1')[0];
    bgm.play();

  });

  $('#music2').on('click', function() {
    var bgm = $('#bgm2')[0];
    bgm.play();

  });

  $('#music3').on('click', function() {
    var bgm = $('#bgm3')[0];
    bgm.play();

  });

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
  var global_value = 0;
  var i = 0;
  var combo = 0;
  var accuracy=0;

  $('#select_exam').on('click', function() {
    var options=$("#select option:selected");
    i=options.val()-1;
    refresh();
  });

  function refresh(){
    window.location.reload();
  }

  //initial part
  $('.point').html('<h4><label class="font-point">' + point + '</label></h4>');
  $('.title').html('<h4><labe1 class="font-title">' + Paper[i]["title"] + '</label></h4>');
  $('.level').html('<h4><labe1 class="font-title">' + Paper[i]["level"] + '</label></h4>');
  $('.question_number').html('<h4><labe1 class="font-title">' + questionNumber + '</labe1></h4>');
  $('.combo').html('<h4><labe1 class="font-point">' + combo + '</label></h4>');

  var questionCube = new HexaFlip(document.getElementById('hexaflip-demo5'),
    {
      set1: question,
      set2: question,
      set3: operation,
      set4: question,
      set5: question,
      set6: equal,
      set7: answer,
      set8: answer
    },
    {fontSize: 100, margin: 4, perspective: 1000, size: 150}
  );

  var qreg = /(\d)?(\d)([+-×÷])(\d)?(\d)/;
  var qResult = Paper[i]['q' + questionNumber].match(qreg);
  questionCube.setValue({
    set1: qResult[1] || '0',
    set2: qResult[2],
    set3: qResult[3],
    set4: qResult[4] || '0',
    set5: qResult[5],
    set6: '=',
    set7: '?',
    set8: '?'
  });

  $('#set').on('click', function () {
    var answer = document.getElementById('answer_text');
    var value = answer.value;
    var one = value % 10;
    var ten = (value - one) / 10;
    global_value = value;
    questionCube.setValue({set7: ten, set8: one});

  });

  $('#check').on('click', function () {
    var html = [];

    if (global_value == Paper[i]['a' + questionNumber]) {
      $('#bgm_correct')[0].play();
      $('.judge').html('<h2 class="mb right">&#10004</h2>');
      point = point + 10;
      html = [];
      correctNumber = correctNumber + 1;
      combo = combo+1;
      $('.combo').html('<h4><labe1 class="font-point">' + combo + '</label></h4>');
      if(combo==3){
          $('#bgm_un')[0].play();
          $('.alert_show').html('<img src="assets/img/kids/girl-6.png" height="60" width="60"/><label class="alert_info"><strong>Excellent! </strong>point+10</label>');
          point=point+10;
      }
      if(combo==5){
          $('#bgm_un')[0].play();
          $('.alert_show').html('<img src="assets/img/kids/girl-6.png" height="60" width="60"/><label class="alert_info"><strong>Unbelievable! </strong>point+20 </label>');
          point=point+20;
      }
      if(combo==10){
          $('#bgm_un')[0].play();
          $('.alert_show').html('<img src="assets/img/kids/girl-6.png" height="60" width="60"/><label class="alert_info"><strong>Perfect work! </strong>point+50 </label>');
          point=point+50;
      }
      $('.point').html('<h4><labe1 class="font-point">' + point + '</labe1></h4>');
      if(questionNumber==10){
        $('#bgm_complete')[0].play();
        $('.alert_show').html('<label class="alert_info"><strong>Congratulations! </strong>You have done all the questions!<a id="see_report" data-toggle="modal" data-target="#report">See the report here.</a</label>');
      }
      
    }
    else {
      $('#bgm_wrong')[0].play();
      $('.judge').html('<h2 class="mb wrong">&#10007</h2>');
      combo=0;
      $('.combo').html('<h4><labe1 class="font-point">' + combo + '</label></h4>');
    }
  });

  $('#next').on('click', function () {
    $('#bgm_click')[0].play();
    questionNumber = questionNumber + 1;
    $('.judge').html('');
    $("#answer_text").val("");
    qResult = Paper[i]['q' + questionNumber].match(qreg);
    questionCube.setValue({
      set1: qResult[1] || '0',
      set2: qResult[2],
      set3: qResult[3],
      set4: qResult[4] || '0',
      set5: qResult[5],
      set6: '=',
      set7: '?',
      set8: '?'
    });
    $('.question_number').html('<h4><labe1 class="font-title">' + questionNumber + '</labe1></h4>');
    if (questionNumber == 10) {
      $('.info').html('<strong>Wonderful!</strong> You have done all the questions!<a data-toggle="modal" data-target="#report"> See the report here</a></h4>');

    }
  });

  $('#see_report').on('click', function () {
    accuracy=correctNumber*10;
    var doughnutData = [
      {
        value: accuracy,
        color: "#31aa33"
      },
      {
        value: 100-accuracy,
        color: "#fdfdfd"
      }
    ];
    var myDoughnut = new Chart(document.getElementById("report_canvas").getContext("2d")).Doughnut(doughnutData);
    $('.acc').html('<h4>' + accuracy + '</h4>');
    $('#point').html('<h4>' + point + '</h4>');
  });

  
});