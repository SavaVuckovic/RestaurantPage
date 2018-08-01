import './main.css';
import './index.html';
import generateHomepage from './homepage';
import generateAbout from './about';
import generateMenu from './menu';
import generateContact from './contact';

const content = document.querySelector('#content');
const dynamicContent = document.createElement('div');

function generateTabs() {
  // nav
  const nav = document.createElement('nav');
  // create tabs
  const home = createTab('home', generateHomepage);
  // home should be active when page first loads
  home.classList.add('active');
  generateHomepage(dynamicContent);
  const about = createTab('about', generateAbout);
  const menu = createTab('menu', generateMenu);
  const contact = createTab('contact', generateContact);
  // append tabs to nav
  nav.appendChild(home);
  nav.appendChild(about);
  nav.appendChild(menu);
  nav.appendChild(contact);
  // render nav
  content.appendChild(nav);
}

// creates single tab
function createTab(name, callback) {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.innerText = name;
  tab.addEventListener('click', () => {
    clearActiveTabs();
    tab.classList.add('active');
    dynamicContent.innerHTML = '';
    callback(dynamicContent);
  });

  return tab;
}

// removes active class from tabs
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