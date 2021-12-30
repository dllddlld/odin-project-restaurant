/* eslint-disable no-param-reassign */
import './style.css';
import { createPage } from './page';
import createHomePage from './home';
import createMenuPage from './menu';
import createContactPage from './contact';

function toggleButtons(button) {
    let navButtons = document.querySelectorAll('.nav-page');
    navButtons.forEach((navButton) => {
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

function addButtonListeners() {
    let homeButton = document.querySelector('#button-home');
    homeButton.addEventListener('click', () => {
        navButtonEvent.bind(this)(createHomePage);
    });
    let menuButton = document.querySelector('#button-menu');
    menuButton.addEventListener('click', () => {
        navButtonEvent.bind(this)(createMenuPage);
    });
    let contactButton = document.querySelector('#button-contact');
    contactButton.addEventListener('click', () => {
        navButtonEvent.bind(this)(createContactPage);
    });
}

createPage();
addButtonListeners();

let homeButton = document.querySelector('#button-home');
homeButton.click();
