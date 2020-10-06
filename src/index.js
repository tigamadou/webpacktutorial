import _ from 'lodash';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Clck me and check console!';
    btn.onclick = printMe
    // Add the image to our existing div.
    element.appendChild(btn)
    return element;
  }
  
  document.body.appendChild(component());