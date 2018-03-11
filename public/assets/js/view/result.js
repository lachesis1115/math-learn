$(function () {
  var doughnutDataOne = [
    {
      value: 70,
      color: "#31aa33"
    },
    {
      value: 30,
      color: "#fdfdfd"
    }
  ];
  var myDoughnut1 = new Chart(document.getElementById("1").getContext("2d")).Doughnut(doughnutDataOne);
});


