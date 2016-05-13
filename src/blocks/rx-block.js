import * as _ from 'lodash';

function formatCode(text){
  const hackToMakeSureInputChanges = _.times(_.random(1000), ()=>'').join(' ');
  return '<span>'+_.trim(
      text.replace(/ /g, '&nbsp;').split('\n').join('<br>')
    )+hackToMakeSureInputChanges+'</span>'
}

var proto = Object.create(HTMLElement.prototype);
var textNode;
proto.createdCallback = function() {
  const colors = ['#E53935', '#D81B60', '#8E24AA', '#5E35B1', '#3949AB', '#1E88E5', '#039BE5', '#00ACC1'];
  const color = colors[_.random(colors.length - 1)];
  const defaultText =
formatCode(`.map((result)=>{
  return result;
})`);

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
    textNode.innerHTML = formatCode(newVal);
  }
}

document.registerElement('rx-block', {prototype: proto});
