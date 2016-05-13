import './rx-block.js';

var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {
  const root = this.createShadowRoot();
  root.innerHTML = `
    <button onclick="this.parentNode.addBlock()">Add Block</button>
    <ul id="blocks"></ul>
  `;
  const blocks = root.querySelector('#blocks');
  root.addBlock = ()=>{
    blocks.appendChild(document.createElement('rx-block'));
  }
};

var AddBlockButton = document.registerElement('add-block-button', {prototype: proto});
