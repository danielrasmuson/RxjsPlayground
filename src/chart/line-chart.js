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
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
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
        data: [65, 59, 80, 81, 56, 55, 40],
      }
    ]
  };

  console.log(root.querySelector('canvas'))
  debugger;
  var ctx = root.querySelector('canvas').getContext('2d')
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {}
  });
};
document.registerElement('line-chart', {prototype: proto});
