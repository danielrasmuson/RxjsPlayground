import './rx-block.js';

var proto = Object.create(HTMLElement.prototype);

// When the user changes the code of the observable 
// we call the created callback with the string 
// fo the observable to create
proto.onObservableCreated = (registerCallback)=>{
  proto.created = registerCallback
}

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

  setTimeout(()=>{
    proto.created(codeString);
  }, 10)

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

document.registerElement('observable-creator', {prototype: proto});
