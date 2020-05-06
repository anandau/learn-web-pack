import _ from 'lodash';
import './style.css';
import Icon from './logo.png';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const icon = new Image();
    icon.src = Icon; 
    icon.width = '200';
    
    element.appendChild(icon);
  
    return element;
  }
  
  document.body.appendChild(component());