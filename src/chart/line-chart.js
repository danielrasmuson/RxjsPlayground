import * as _ from 'lodash';
import Chart from 'chartjs';
import {data, options} from './line-chart-json.js';

var proto = Object.create(HTMLElement.prototype);
var lineChart;
proto.createdCallback = function() {
  const root = this.createShadowRoot();
  root.innerHTML = `
    <div>
      <canvas></canvas>
    </div>
  `;

  var ctx = root.querySelector('canvas').getContext('2d')
  lineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });
};

proto.attributeChangedCallback = (attrName, oldVal, newVal)=>{
  console.log('LineChart Attr Change', attrName, oldVal, newVal);
  if (attrName = 'data-observable'){
    // The code is passed in as an observable which we just subscribe to
    try{
      eval(newVal).subscribe((number)=>{
        lineChart.data.datasets[0].data = lineChart.data.datasets[0].data.slice(1, 5).concat(number);
        lineChart.update();
      });
    } catch(e){
      console.log('Error converting observable', e);
    }
  }
}

document.registerElement('line-chart', {prototype: proto});
