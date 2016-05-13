import './blocks/add-block.js'; 
import './chart/line-chart.js';

var proto = Object.create(HTMLElement.prototype);
proto.createdCallback = function() {
  const root = this.createShadowRoot();

  function assignLineChartNewObservable(){
    lineChart.setAttribute('data-observable', codeString);
  }

  root.innerHTML = `
    <add-block-button></add-block-button>
    <line-chart></line-chart>
  `;
  const lineChart = root.querySelector('line-chart');


};
document.registerElement('rx-demo', {prototype: proto});


