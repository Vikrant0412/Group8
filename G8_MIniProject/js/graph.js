var xValues = ["Temp-1", "Temp-2", "Temp-3", "Temp-4"];
// var yValues = [40, 39, 34, 24, 15];
var yValues = [
  localStorage.clickcount1,
  localStorage.clickcount2,
  localStorage.clickcount3,
  localStorage.clickcount4,
];
var barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Template download chart",
    },
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
            steps: 10,
            stepValue: 1,
            max: 25,
          },
        },
      ],
    },
  },
});
