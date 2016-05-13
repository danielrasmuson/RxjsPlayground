var proto = Object.create(HTMLElement.prototype);

function addBlock(){
  alert('add block')
}

proto.createdCallback = function() {
  var shadow = this.createShadowRoot();
  shadow.innerHTML = `
    <button click="addBlock()">Add Block</button>
  `;
};


var AddBlockButton = document.registerElement('add-block-button', {prototype: proto});
