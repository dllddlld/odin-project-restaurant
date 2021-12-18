const TEXT = {
    COMPANY_NAME: 'Gatsby\'s',
    COMPANY_SLOGAN: 'Let Us Serve You',
    COMPANY_MISSION: 'We strive to provide a space where guests can connect with themselves ' +
    'and explore their full potential.',
    CUSTOMER_BUBBLE: 'This is a text bubble',
    WINNER_BUBBLE: 'This is another text bubble',
    FOOD_SERVICE_POINT: 'Our servers practice social distancing to ensure you and your guests have a comfortable dining experience.',
    VEGAN_POINT: 'We try our best to accommodate our diners\' dietary requirements.',
    LOCAL_POINT: 'We believe is supporting local farmers and producers. We strive to source locally whenever possible.',
    MENU: {
        SURPRISE_ME: {
            TITLE: 'Surprise Me',
            PRICE: '$65 per head',
            DESCRIPTION: 'Our Surprise Me menu is a shared banquet-style feast ' + 
            'that features a daily selection of the markets\' best and freshest, ' +
            'selected by our executive chef. At least 3 dishes will be served for ' +
            'each course and will include vegetable-based, seafood and meat options.'
        },
        FEED_ME: {
            TITLE: 'Feed Me',
            PRICE: '$80 per head',
            DESCRIPTION: 'Our Feed Me menu starts with a shared entree, followed ' +
            'by an a la carte main and finishing with a banquet-style dessert table ' +
            'and cheese platters. Main options are a selection of vegetable-based, seafood and meat dishes.'
        },
        DINE_ME: {
            TITLE: 'Dine Me',
            PRICE: '$90 per head',
            DESCRIPTION: 'Our Dine Me menu is an all a la carte menu, with your choice of entree, main and dessert. ' +
            'Entree and main options are a selection of vegetable-based, seafood and meat dishes.'
        },
        INDULGE_ME: {
            TITLE: 'Indulge Me',
            PRICE: 'Min. $105 per head, final price may vary',
            DESCRIPTION: 'Our Indulge Me menu is a degustation-style menu designed in ' +
            'consultation with our executive chef and our sommeliers. We will contact you ' +
            'to design the best menu for the night. This is a dinner-only menu and ' +
            'will be served throughout the course of 2-3 hours.'
        }
    },
    GOODBYE: 'We hope to see you soon!'
};

function createPage() {
    createHeader();
    createMain();
    createFooter();
}

function createHeader() {
    let container = document.querySelector('.container');
    let header = makeElement('header', null, null, container);
    let logoDiv = makeElement('div', ['logo'], null, header);
    makeElement('h2', null, TEXT.COMPANY_NAME, logoDiv);

    let navigation = makeElement('div', ['navigation'], null, header);
    let navOptions = makeElement('div', ['nav-options'], null, navigation);
    
    let homeButton = makeElement('button', ['nav-page', 'active'], 'Home', navOptions);
    homeButton.id = 'button-home';
    let menuButton = makeElement('button', ['nav-page'], 'Menu', navOptions);
    menuButton.id = 'button-menu';    
    let contactButton = makeElement('button', ['nav-page'], 'Contact us', navOptions);
    contactButton.id = 'button-contact';
}

function createMain() {
    let container = document.querySelector('.container');
    makeElement('main', null, null, container);
}

function createFooter() {
    let body = document.querySelector('body');
    let footer = makeElement('footer', null, null, body);
    makeElement('div', null, 'Github repository', footer);
    makeElement('div', null, 'Icons by icons8', footer);
    makeElement('div', null, 'Photography by Brooke Lark', footer);
}

function makeElement(type, classes, text, parent) {
    let el = document.createElement(type);
    if (classes) {
        classes.forEach(className => {
            el.classList.add(className);
        });
    }
    if (text) {
        el.textContent = text;
    }
    if (parent) {
        parent.appendChild(el);
    }
    return el;
}

export { TEXT, createPage, makeElement };