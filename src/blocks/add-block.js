import './rx-block.js';

var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {
  var codeString = `
    Rx.Observable.create((observer)=>{
      observer.next(15);
      observer.next(30);
      observer.next(45);
      observer.next(65);
      observer.complete();
    });
  `

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
