import { TEXT, makeElement } from './page';

function makeContactItem(title, description) {
    let contactTable = document.querySelector('.contact-table');
    let contactItem = makeElement('div', ['contact-item'], null, contactTable);
    makeElement('div', ['contact-title'], title, contactItem);
    let contactDescription = makeElement('div', ['contact-description'], null, contactItem);
    let contactParagraph = makeElement('p', null, description, contactDescription);
    contactParagraph.innerHTML = contactParagraph.innerHTML.replace(/\n/g, '<br />');
}

function createContactPage() {
    let main = document.querySelector('main');
    main.textContent = '';
    let contact = makeElement('div', ['contact'], null, main);

    makeElement('div', ['contact-table'], null, contact);
    makeContactItem(TEXT.CONTACT.LOCATION.TITLE, TEXT.CONTACT.LOCATION.DESCRIPTION);
    makeContactItem(TEXT.CONTACT.OPENING_HOURS.TITLE, TEXT.CONTACT.OPENING_HOURS.DESCRIPTION);
    makeContactItem(TEXT.CONTACT.BOOKING.TITLE, TEXT.CONTACT.BOOKING.DESCRIPTION);

    let contactImageContainer = makeElement('div', ['contact-image-container'], null, contact);
    let contactImage = makeElement('div', ['contact-image'], null, contactImageContainer);
    let contactGoodbye = makeElement('div', ['contact-goodbye'], null, contactImage);
    makeElement('h1', null, TEXT.GOODBYE, contactGoodbye);
}

export default createContactPage;
