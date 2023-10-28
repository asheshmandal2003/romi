const ctx1 = document.getElementById("myChart1");
const ctx2 = document.getElementById("myChart2");

const data1 = data(94, 6);
const data2 = data(49.5, 50.49);

const doughnutLabel1 = doughnutLabel("Distribution");
const doughnutLabel2 = doughnutLabel("$ZLP Pool");

const config1 = {
  type: "doughnut",
  data: data1,
  plugins: [doughnutLabel1],
};

const config2 = {
  type: "doughnut",
  data: data2,
  plugins: [doughnutLabel2],
};

new Chart(ctx1, config1);
new Chart(ctx2, config2);

function data(value1, value2) {
  return {
    datasets: [
      {
        cutout: "90%",
        data: [value1, value2],
        backgroundColor: ["rgb(86, 191, 232)", "rgb(0, 0, 255)"],
        borderWidth: 0,
      },
    ],
  };
}

function doughnutLabel(text) {
  return {
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      ctx.fillStyle = "rgba(255, 255, 255)";
      (ctx.textAlign = "center"), ctx.fillText(text, xCoor, yCoor);
    },
  };
}
