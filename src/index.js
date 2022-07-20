// import _ from 'lodash';
import './style.css';
import display from './data';

function component() {
  const element = document.createElement('div');

  display();
  return element;
}

document.body.appendChild(component());