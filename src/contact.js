import { TEXT, makeElement } from "./page.js";

function createContactPage() {
    let main = document.querySelector('main');
    main.textContent = '';
    let contact = makeElement('div', ['contact'], null, main);

    let contactTable = makeElement('div', ['contact-table'], null, contact);

    let contactImageContainer = makeElement('div', ['contact-image-container'], null, contact);
    let contactImage = makeElement('div', ['contact-image'], null, contactImageContainer);
    let contactGoodbye = makeElement('div', ['contact-goodbye'], null, contactImage);
    makeElement('h1', null, TEXT.GOODBYE, contactGoodbye);
}

export { createContactPage };