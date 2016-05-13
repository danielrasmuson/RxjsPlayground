import * as _ from 'lodash';
var proto = Object.create(HTMLElement.prototype);
var textNode;
proto.createdCallback = function() {
  const colors = ['#E53935', '#D81B60', '#8E24AA', '#5E35B1', '#3949AB', '#1E88E5', '#039BE5', '#00ACC1'];
  const color = colors[_.random(colors.length - 1)];
  const defaultText ='<span>.map((result)=>{return result;})</span>';

  // root = this.createShadowRoot();
  this.innerHTML = `
    <div
      style="background-color: ${color}; width: 300px; color: white;"
      contenteditable="true"
      class="text">
      ${defaultText}
    </div>
  `;
  textNode = this.querySelector('.text')
};

proto.attributeChangedCallback = (attrName, oldVal, newVal)=>{
  if (attrName === 'value'){
    textNode.innerHTML = _.trim(
      newVal.replace(/ /g, '&emsp;').split('\n').join('<br>')
      );
  }
}

document.registerElement('rx-block', {prototype: proto});
