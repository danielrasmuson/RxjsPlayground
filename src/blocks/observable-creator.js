import './rx-block.js';

var proto = Object.create(HTMLElement.prototype);

// When the user changes the code of the observable 
// we call the created callback with the string 
// fo the observable to create
proto.onObservableCreated = (registerCallback)=>{
  proto.created = registerCallback
}

proto.createdCallback = function() {
  var defaultObservable = `
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
  root.addBlock = (defaultCodeString)=>{
    var block = document.createElement('rx-block');
    if (defaultCodeString){
      block.setAttribute('value', defaultCodeString);
    }
    blocks.appendChild(block);

    // Or add that observable watch children in the scroll manager
    // here loop through nodes and put text togeather for createion
    // proto.created(codeString);
    // roto.querySelector()
  }

  root.addBlock(defaultObservable)

};

document.registerElement('observable-creator', {prototype: proto});
