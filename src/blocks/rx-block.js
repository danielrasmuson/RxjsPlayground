import * as _ from 'lodash';
var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {
  const colors = ['#E53935', '#D81B60', '#8E24AA', '#5E35B1', '#3949AB', '#1E88E5', '#039BE5', '#00ACC1'];
  const color = colors[_.random(colors.length - 1)];
  const root = this.createShadowRoot();

  root.innerHTML = `
    <div style="background-color: ${color}; width: 300px; color: white;" contenteditable="true">
      .map((result)=>{
        return result;
      })
    </div>
  `;
};

var AddBlockButton = document.registerElement('rx-block', {prototype: proto});
