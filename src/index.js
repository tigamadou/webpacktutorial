import _ from 'lodash';
import './style.css';
import Boss from './boss.jpg'
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

    // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = Boss;

   element.appendChild(myIcon);


    return element;
  }
  
  document.body.appendChild(component());