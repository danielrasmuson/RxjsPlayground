import * as _ from 'lodash';
import Chart from 'chartjs';

var proto = Object.create(HTMLElement.prototype);
proto.createdCallback = function() {
  const root = this.createShadowRoot();
  root.innerHTML = `
    <div>
      <canvas></canvas>
    </div>
  `;

  var data = {
    labels: ["0", "1", "2", "3", "4"],
    datasets: [
      {
        label: 'data',
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 0, 0, 0, 0],
      }
    ]
  };

  var options = {
    scales: {
      yAxes: [{
        display: true,
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100,
        }
      }]
    }
  };

  var ctx = root.querySelector('canvas').getContext('2d')
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  setInterval(()=>{
    const newNumbers = [_.random(0, 100)]
    myLineChart.data.datasets[0].data = myLineChart.data.datasets[0].data.slice(1, 5).concat(newNumbers);
    myLineChart.update();
  }, 1000)

};
document.registerElement('line-chart', {prototype: proto});
