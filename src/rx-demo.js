import './blocks/observable-creator.js'; 
import './chart/line-chart.js';

var proto = Object.create(HTMLElement.prototype);
proto.createdCallback = function() {
  this.innerHTML = `
    <observable-creator></observable-creator>
    <line-chart></line-chart>
  `;
  const lineChart = this.querySelector('line-chart');
  const observableCreator = this.querySelector('observable-creator');
  observableCreator.onObservableCreated((observableCodeString)=>{
    lineChart.newDataSubscription(observableCodeString)
  });


};
document.registerElement('rx-demo', {prototype: proto});


