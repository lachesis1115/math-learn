$(function() {
    // fancybox
    jQuery(".fancybox").fancybox();
    var j=0;
    if(LoginUser.name ="Marcel") j=0;
    else j=4;

    var html= [];

    for (var i = j; i < j+4; i=i+2) {
        html.push('<div class="row">');
        for (var m = i; m < i+2; m++){
            html.push('<div class="col-lg-6 col-md-6 col-sm-12 mb">');
            html.push('<div class="grey-panel pn_chart donut1-chart">');
            html.push('<div class="grey-header"><h4>' + Report[m]["title"] + '</h4></div>');
            html.push('<canvas id="' + (m+1) + '" height="150" width="150"></canvas>');       
            html.push('<div class="row">');
            html.push('    <div class="col-sm-6 col-xs-6 goleft"><p> Accuracy:</p></div>');
            html.push('    <div class="col-sm-6 col-xs-6"><h4>' + Report[m]["accuracy"] + '</h4></div>');
            html.push('</div>');
            html.push('<div class="row">');
            html.push('    <div class="col-sm-6 col-xs-6 goleft"><p> Time:</p></div>');
            html.push('    <div class="col-sm-6 col-xs-6"><h4>' + Report[m]["time"] + '</h4></div>');
            html.push('</div>');
            html.push('<div class="row">');
            html.push('    <div class="col-sm-6 col-xs-6 goleft"><p> Point:</p></div>');
            html.push('    <div class="col-sm-6 col-xs-6"><h4>' + Report[m]["point"] + '</h4></div>');
            html.push('</div>');
            html.push('</div>');
            html.push('</div>');
        }
        html.push('</div>');
    } 
    $('.report').html(html.join(''));

    i=j;
    
    var doughnutDataOne = [
        {
            value: Report[i]["point"],
            color: "#31aa33"
        },
        {
            value: 100-Report[i]["point"],
            color: "#fdfdfd"
        }
    ];
    var myDoughnut1 = new Chart(document.getElementById("1").getContext("2d")).Doughnut(doughnutDataOne);

    var doughnutDataTwo = [
        {
            value: Report[i+1]["point"],
            color: "#31aa33"
        },
        {
            value: 100 -Report[i+1]["point"],
            color: "#fdfdfd"
        }
    ];
    var myDoughnut2 = new Chart(document.getElementById("2").getContext("2d")).Doughnut(doughnutDataTwo);
    var doughnutDataThree = [
        {
            value: Report[i+2]["point"],
            color: "#31aa33"
        },
        {
            value: 100-Report[i+2]["point"],
            color: "#fdfdfd"
        }
    ];
    var myDoughnut3 = new Chart(document.getElementById("3").getContext("2d")).Doughnut(doughnutDataThree);

    var doughnutDataFour = [
        {
            value: Report[i+3]["point"],
            color: "#31aa33"
        },
        {
            value: 100 -Report[i+3]["point"],
            color: "#fdfdfd"
        }
    ];
    var myDoughnut4 = new Chart(document.getElementById("4").getContext("2d")).Doughnut(doughnutDataFour);
});


