$(function () {
  
  function getQuery(key) {
    var result = location.search.match(new RegExp("[?&]" + key + "=([^&]+)", "i"));
    if(result == null || result.length < 1) {
      return '';
    }
    return result[1];
  }

  var exam = getQuery('exam');
  if (exam) {
    exam = parseInt(exam);
  } else {
    exam = 0;

    // 如果不是用户自己选择的题目则显示模态对话框
    $('#myModal').modal();
  }

  $('#save-btn').on('click', function () {
    var heartRate = parseFloat($('#hr-input').val().trim());
    var sclevel = parseFloat($('#sc-input').val().trim());
    var bvp = parseFloat($('#bvp-input').val().trim());

    if (heartRate && typeof heartRate === 'number' && heartRate >= 60 && heartRate <= 100) {
      LoginUser.heartRate = heartRate;
    } else {
      return alert('the heartRate value should between 60-100!');
    }
    if (sclevel && typeof sclevel === 'number' && sclevel >= 0 && sclevel <= 10) {
      LoginUser.sclevel = sclevel*10;
    } else {
      return alert('the sclevel value should between 0-10!');
    }
    if (bvp && typeof bvp === 'number' && bvp >= 0 && bvp <= 100) {
      LoginUser.bvp = bvp;
    } else {
      return alert('the bvp value should between 0-100!');
    }
    Cookies.set('loginUser', LoginUser);
    $('#myModal').modal('hide');

    //var emotion = 1;
    if (LoginUser.bvp > LoginUser.heartRate && LoginUser.bvp > LoginUser.sclevel)  emotion = 3;
    if (LoginUser.sclevel > LoginUser.heartRate && LoginUser.sclevel > LoginUser.bvp) emotion = 2;
    if (LoginUser.heartRate > LoginUser.sclevel && LoginUser.heartRate > LoginUser.bvp)  emotion = 1;
    if (LoginUser.heartRate == LoginUser.sclevel && LoginUser.heartRate == LoginUser.bvp) emotion = 4;

    var html = [];
    var tmepExam = 0;
    var tempBgm = 0;
    var temPoint = 60;
    if (emotion == 3) {
      html.push('<a id="bvp" class="btn btn-lg  btn-info">Sad Mode</a>');
      tmepExam = 0;
      $('#bgm3')[0].play();
      tempBgm=3;
      temPoint=60;
    }
    if (emotion == 1) {
      html.push('<a id="heartRate" class="btn btn-lg  btn-warning">Happy Mode</a>');
      tmepExam = 2;
      $('#bgm2')[0].play();
      tempBgm=2;
      temPoint=120;
    }
    if (emotion == 2) {
      html.push('<a id="sclevel" class="btn btn-lg  btn-danger">Exciting Mode</a>');
      tmepExam = 2;
      $('#bgm2')[0].play();
      tempBgm=2;
      temPoint=150;
    }
    if (emotion == 4) {
      html.push('<a id="general" class="btn btn-lg  btn-success">General Mode</a>');
      tmepExam = 1;
      $('#bgm1')[0].play();
      tempBgm=1;
      temPoint=100;
    }
    
    bgmIndex = tempBgm;
    exam = tmepExam;
    point_goal=temPoint;
    renderQuestion();
    
    $('.mood').html(html.join(''));
  });

  var bgmIndex = 0;
  $('#music-switch').on('change', function() {
    var mSwitch = $(this)[0].checked;
    var bgm = $('#bgm'+ bgmIndex)[0];
    if (mSwitch) {
      bgm.play();
    } else {
      bgm.pause();
    }
  });
  $('#music1').on('click', function() {
    var bgm = $('#bgm1')[0];
    $('#bgm2')[0].pause();
    $('#bgm3')[0].pause();
    bgm.play();
    bgmIndex = 1;
  });
  $('#music2').on('click', function() {
    var bgm = $('#bgm2')[0];
    $('#bgm1')[0].pause();
    $('#bgm3')[0].pause();
    bgm.play();
    bgmIndex = 2;
  });
  $('#music3').on('click', function() {
    var bgm = $('#bgm3')[0];
    $('#bgm2')[0].pause();
    $('#bgm1')[0].pause();
    bgm.play();
    bgmIndex = 3;
  });

  // exercise cube part
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

  var emotion=1;
  var point = 0;
  var questionNumber = 1;
  var correctNumber = 0;
  var global_value = 0;
  var combo = 0;
  var wrong_combo = 0;
  var point_goal=0;
  var accuracy = 0;
  var rank=' ';
  var qreg = /(\d)?(\d)([+-×÷])(\d)?(\d)/;

  $('#select_exam').on('click', function() {
    var options = $("#select option:selected");
    exam = options.val() - 1;
    location.href = 'exercise.html?exam=' + exam;
  });

  function renderQuestion() {
    // initial part
    $('#select').val(exam + 1);
    $('.point').html('<h4><label class="font-point">' + point + '</label></h4>');
    $('.title').html('<h4><labe1 class="font-title">' + Paper[exam]["title"] + '</label></h4>');
    $('.level').html('<h4><labe1 class="font-title">' + Paper[exam]["level"] + '</label></h4>');
    $('.question_number').html('<h4><labe1 class="font-title">' + questionNumber + '</labe1></h4>');
    $('.combo').html('<h4><labe1 class="font-point">' + combo + '</label></h4>');
    $('.correct').html('<h4><labe1 class="font-point">' + accuracy + '%</label></h4>');
    //$('.alert_show').html('<img src="assets/img/kids/girl-6.png" height="60" width="60"/><label class="alert_info"><strong>Great! </strong>Now let\'s start do the exercise! Try to earn <b>' + point_goal + '</b> point in the exam!</label>');

    var qResult = Paper[exam]['q' + questionNumber].match(qreg);
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
  }

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

  renderQuestion();

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

    if (global_value == Paper[exam]['a' + questionNumber]) {
      $('#bgm_correct')[0].play();
      $('.judge').html('<h2 class="mb right">&#10004</h2>');
      point = point + 10;
      html = [];
      correctNumber = correctNumber + 1;
      accuracy = correctNumber * 10;
      combo = combo+1;
      wrong_combo=0;
      $('.combo').html('<h4><labe1 class="font-point">' + combo + '</label></h4>');
      $('.correct').html('<h4><labe1 class="font-point">' + accuracy + '%</label></h4>');

      if(emotion==3){
        $('.alert_show').html('<img src="assets/img/kids/girl-6.png" height="60" width="60"/><label class="alert_info"><strong>Very good! </strong>You can do better.</label>');
      }
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
    }
    else {
      $('#bgm_wrong')[0].play();
      $('.judge').html('<h2 class="mb wrong">&#10007</h2>');
      combo=0;
      wrong_combo=wrong_combo + 1;
      if(wrong_combo==2){
        $('.alert_show').html('<img src="assets/img/kids/girl-6.png" height="60" width="60"/><label class="alert_info"><strong>Never Mind! </strong>Keep on going! </label>');
      }
      if(wrong_combo==3 && emotion==3){
        $('.alert_show').html('<img src="assets/img/kids/girl-6.png" height="60" width="60"/><label class="alert_info"><strong>Be careful! </strong>You can do better! </label>');
      }
      if(wrong_combo==5 && emotion==3){
        $('.alert_show').html('<img src="assets/img/kids/girl-6.png" height="60" width="60"/><label class="alert_info"><strong>Oops... </strong>Let\'s try it again! </label>');
      }
      $('.combo').html('<h4><labe1 class="font-point">' + combo + '</label></h4>');
    }
    if(questionNumber==10){
      $('#bgm_complete')[0].play();
      $('.alert_show').html('<img src="assets/img/kids/girl-6.png" height="60" width="60"/><label class="alert_info"><strong>Congratulations! </strong>You have done all the questions!<a id="see_report" data-toggle="modal" data-target="#report">See the report here.</a></label>');
    }
  });

  $('#next').on('click', function () {
    $('#bgm_click')[0].play();
    questionNumber = questionNumber + 1;
    $('.judge').html('');
    $("#answer_text").val("");
    qResult = Paper[exam]['q' + questionNumber].match(qreg);
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

  $('.alert_show').on('click', '#see_report', function() {
    var reportCanvas = document.getElementById("report_canvas");
    reportCanvas.width = 120;
    reportCanvas.height = 120;
    reportCanvas.style.height = 120;
    reportCanvas.style.width = 120;
    //accuracy = correctNumber * 10;
    if(accuracy >= point_goal) rank='A';
    else rank='B';

    var doughnutData = [
      {
        value: accuracy,
        color: "#31aa33"
      },
      {
        value: 100 - accuracy,
        color: "#fdfdfd"
      }
    ];
    var myDoughnut = new Chart(reportCanvas.getContext("2d")).Doughnut(doughnutData);
    $('#rank').html('<h4>' + rank + '</h4>');
    $('#acc').html('<h4>' + accuracy + '%</h4>');

  });
});