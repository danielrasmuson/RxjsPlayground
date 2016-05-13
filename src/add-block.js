var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {
  var root = this.createShadowRoot();
  root.innerHTML = `
    <button onclick="this.parentNode.addBlock()">Add Block</button>
  `;
  root.addBlock = ()=>{
    alert('add block');
  }
};

var AddBlockButton = document.registerElement('add-block-button', {prototype: proto});
