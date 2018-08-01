import './main.css';
import './index.html';
import generateHomepage from './homepage';

const testDiv = generateHomepage();
document.querySelector('#content').appendChild(testDiv);