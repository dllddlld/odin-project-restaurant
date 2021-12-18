import './style.css';
import { createPage } from './page.js';
import { createHomePage } from './home.js';
import { createMenuPage } from './menu.js';
import { createContactPage } from './contact';

createPage();
addButtonListeners();

let homeButton = document.querySelector('#button-home');
homeButton.click();

function addButtonListeners() {
    let homeButton = document.querySelector('#button-home');
    homeButton.addEventListener('click', function() {
        navButtonEvent.bind(this)(createHomePage);
    });
    let menuButton = document.querySelector('#button-menu');
    menuButton.addEventListener('click', function() {
        navButtonEvent.bind(this)(createMenuPage);
    });
    let contactButton = document.querySelector('#button-contact');
    contactButton.addEventListener('click', function() {
        navButtonEvent.bind(this)(createContactPage);
    });
}

function toggleButtons(button) {
    let navButtons = document.querySelectorAll('.nav-page');
    navButtons.forEach(navButton => {
        if (navButton !== button) {
            navButton.classList.remove('active');
            navButton.disabled = false;
        }
    });
    button.classList.add('active');
    button.disabled = true;
}

function navButtonEvent(navBtnFunction) {
    navBtnFunction();
    toggleButtons(this);
}