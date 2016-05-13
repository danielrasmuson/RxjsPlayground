import './blocks/add-block.js'; 
import './chart/line-chart.js';

var proto = Object.create(HTMLElement.prototype);
proto.createdCallback = function() {
  const root = this.createShadowRoot();
  root.innerHTML = `
    <add-block-button></add-block-button>
    <line-chart></line-chart>
  `;
};
document.registerElement('rx-demo', {prototype: proto});


