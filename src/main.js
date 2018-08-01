import './main.css';
import './index.html';
import generateHomepage from './homepage';

const content = document.querySelector('#content');
const dynamicContent = document.createElement('div');

function generateTabs() {
  // nav
  const nav = document.createElement('nav');
  // home
  const home = document.createElement('div');
  home.classList.add('tab');
  home.innerText = 'Home';
  home.addEventListener('click', () => {
    console.log('clicked');
    clearDynamicContent();
    clearActiveTabs();
    home.classList.add('active');
    generateHomepage(dynamicContent);
  });
  // append tabs to nav
  nav.appendChild(home);
  // render nav
  console.log(content);
  content.appendChild(nav);
}

function clearDynamicContent() {
  dynamicContent.innerHTML = '';
}

function clearActiveTabs() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
}

// when document loads
document.addEventListener("DOMContentLoaded", function() {
  generateTabs();
  dynamicContent.setAttribute('id', 'dynamic-content');
  content.appendChild(dynamicContent);
});