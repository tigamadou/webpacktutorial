import _ from 'lodash';
import './style.css';
import Boss from './boss.jpg'
import Data from './data.xml'
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

    // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = Boss;

   element.appendChild(myIcon);

    console.log({
      xml:Data,
      toml: toml,
      yaml: yaml,
      json: json
    })
    return element;
  }
  
  document.body.appendChild(component());