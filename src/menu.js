import { TEXT, makeElement } from "./page.js";

function createMenuPage() {
    let main = document.querySelector('main');
    main.textContent = '';
    let menu = makeElement('div', ['menu'], null, main);
    let menuTableDiv = makeElement('div', null, null, menu);
    makeElement('div', ['menu-table'], null, menuTableDiv);
    makeMenuItem(TEXT.MENU.SURPRISE_ME.TITLE, TEXT.MENU.SURPRISE_ME.PRICE, TEXT.MENU.SURPRISE_ME.DESCRIPTION);
    makeMenuItem(TEXT.MENU.FEED_ME.TITLE, TEXT.MENU.FEED_ME.PRICE, TEXT.MENU.FEED_ME.DESCRIPTION);
    makeMenuItem(TEXT.MENU.DINE_ME.TITLE, TEXT.MENU.DINE_ME.PRICE, TEXT.MENU.DINE_ME.DESCRIPTION);
    makeMenuItem(TEXT.MENU.INDULGE_ME.TITLE, TEXT.MENU.INDULGE_ME.PRICE, TEXT.MENU.INDULGE_ME.DESCRIPTION);
}

function makeMenuItem(title, price, description) {
    let menuTable = document.querySelector('.menu-table');
    let menuItem = makeElement('div', ['menu-item'], null, menuTable);
    makeElement('div', ['menu-title'], title, menuItem);
    makeElement('div', ['menu-price'], price, menuItem);
    let menuDescription = makeElement('div', ['menu-description'], null, menuItem);
    makeElement('p', null, description, menuDescription);
}

export { createMenuPage };