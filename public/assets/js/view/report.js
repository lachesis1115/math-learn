$(function() {
    // fancybox
    jQuery(".fancybox").fancybox();

    $.ajax({
        url: '/reports/get',
        dataType: 'json',
        success: function(data) {
            var html= [];
            var reports = data.reports;
            for (var i = 0; i < reports.length; i++) {
                if ((i+1) % 2 == 0) {
                    html.push('<div class="row">');
                }
                html.push('<div class="col-lg-6 col-md-6 col-sm-12 mb">');
                html.push('<div class="grey-panel pn_chart donut1-chart">');
                html.push('<div class="grey-header"><h4>' + reports[i]["title"] + '</h4></div>');
                html.push('<canvas id="doughnut-' + i + '" height="150" width="150"></canvas>');       
                html.push('<div class="row">');
                html.push('    <div class="col-sm-6 col-xs-6 goleft"><p> Accuracy:</p></div>');
                html.push('    <div class="col-sm-6 col-xs-6"><h4>' + reports[i]["accuracy"] + '</h4></div>');
                html.push('</div>');
                html.push('<div class="row">');
                html.push('    <div class="col-sm-6 col-xs-6 goleft"><p> Rank:</p></div>');
                html.push('    <div class="col-sm-6 col-xs-6"><h4>' + reports[i]["rank"] + '</h4></div>');
                html.push('</div>');
                html.push('<div class="row">');
                html.push('    <div class="col-sm-6 col-xs-6 goleft"><p> Point:</p></div>');
                html.push('    <div class="col-sm-6 col-xs-6"><h4>' + reports[i]["point"] + '</h4></div>');
                html.push('</div>');
                html.push('</div>');
                html.push('</div>');
                if ((i+1) % 2 == 0) {
                    html.push('</div>');
                }
            } 
            $('.report').html(html.join(''));

            for (var i = 0; i < reports.length; i++) {
                var doughnutData = [
                    {
                        value: reports[i]["point"],
                        color: "#31aa33"
                    },
                    {
                        value: 100-reports[i]["point"],
                        color: "#fdfdfd"
                    }
                ];
                new Chart(document.getElementById('doughnut-' + i).getContext("2d")).Doughnut(doughnutData);
            }
        },
        error: function() {

        }
    });
});


