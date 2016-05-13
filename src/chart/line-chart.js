import * as _ from 'lodash';
import Chart from 'chartjs';
import {data, options} from './line-chart-json.js';

var proto = Object.create(HTMLElement.prototype);
proto.createdCallback = function() {
  const root = this.createShadowRoot();
  root.innerHTML = `
    <div>
      <canvas></canvas>
    </div>
  `;

  var ctx = root.querySelector('canvas').getContext('2d')
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  setInterval(()=>{
  }, 1000)

  // The code is passed in as an observable which we just subscribe to
  try{
    eval(this.getAttribute('data-observable')).subscribe((number)=>{
      myLineChart.data.datasets[0].data = myLineChart.data.datasets[0].data.slice(1, 5).concat(number);
      myLineChart.update();
    });
  } catch(e){
    console.log('Error converting observable', e);
  }

};

proto.attributeChangedCallback = (attrName, oldVal, newVal)=>{
  console.log('LineChart Attr Change', attrName, oldVal, newVal);
}

document.registerElement('line-chart', {prototype: proto});
