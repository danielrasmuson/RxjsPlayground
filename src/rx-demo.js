import './blocks/add-block.js'; 
import './chart/line-chart.js';

var proto = Object.create(HTMLElement.prototype);
proto.createdCallback = function() {
  const root = this.createShadowRoot();

  var codeString = `
    Rx.Observable.create((observer)=>{
      observer.next(15);
      observer.next(30);
      observer.next(45);
      observer.next(65);
      observer.complete();
    });
  `

  root.innerHTML = `
    <add-block-button></add-block-button>
    <line-chart></line-chart>
  `;


  const lineChart = root.querySelector('line-chart');
  lineChart.setAttribute('data-observable', codeString);
};
document.registerElement('rx-demo', {prototype: proto});


