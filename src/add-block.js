var proto = Object.create(HTMLElement.prototype);


proto.createdCallback = function() {
  this.addBlock = ()=>{
    alert('add block');
  }

  // var shadow = this.createShadowRoot();
  this.innerHTML = `
    <button onclick="this.parentNode.addBlock()">Add Block</button>
  `;
};


var AddBlockButton = document.registerElement('add-block-button', {prototype: proto});
