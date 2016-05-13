import * as _ from 'lodash';
import Chart from 'chartjs';
import {data, options} from './line-chart-json.js';

var proto = Object.create(HTMLElement.prototype);
var lineChart;
proto.createdCallback = function() {
  this.innerHTML = `
    <div>
      <canvas></canvas>
    </div>
  `;

  var ctx = this.querySelector('canvas').getContext('2d')
  lineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });
};

var lastSubscription;
proto.newDataSubscription = (observableString)=>{
  try{

    // console.log('Running Observable', observableString);
    if (lastSubscription){
      lastSubscription.unsubscribe();
    }
    lastSubscription = eval(observableString).subscribe((number)=>{
      lineChart.data.datasets[0].data = lineChart.data.datasets[0].data.slice(1, 5).concat(number);
      lineChart.update();
    });
  } catch(e){
    console.log('Error converting observable', e);
  }
}

document.registerElement('line-chart', {prototype: proto});
