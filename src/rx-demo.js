import './blocks/observable-creator.js'; 
import './chart/line-chart.js';

var proto = Object.create(HTMLElement.prototype);
proto.createdCallback = function() {
  const root = this.createShadowRoot();

  root.innerHTML = `
    <observable-creator></observable-creator>
    <line-chart></line-chart>
  `;
  const lineChart = root.querySelector('line-chart');
  const observableCreator = root.querySelector('observable-creator');
  observableCreator.onObservableCreated((observableCodeString)=>{
    lineChart.setAttribute('data-observable', observableCodeString);
  });


};
document.registerElement('rx-demo', {prototype: proto});


