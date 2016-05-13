var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {
  this.addEventListener('click', ()=>{
    alert('click')
  })

  var shadow = this.createShadowRoot();
  shadow.innerHTML = `
    <div>
      Hello How are you?
    </div>
  `;
};

var XFoo = document.registerElement('x-foo', {prototype: proto});
