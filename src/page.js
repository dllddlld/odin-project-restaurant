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
    }
};

function createPage() {
    createHeader();
    createMain();
    createFooter();
}

function initializeHomePage() {
    let homeButton = document.querySelector('#button-home');
    homeButton.click();
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
    homeButton.addEventListener('click', function() {
        navButtonEvent.bind(this)(createHomePage);
    });
    let menuButton = makeElement('button', ['nav-page'], 'Menu', navOptions);
    menuButton.id = 'button-menu';
    menuButton.addEventListener('click', function() {
        navButtonEvent.bind(this)(createMenuPage);
    });
    let contactButton = makeElement('button', ['nav-page'], 'Contact us', navOptions);
    contactButton.id = 'button-contact';
    contactButton.addEventListener('click', function() {
        navButtonEvent.bind(this)(createContactPage);
    });
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

function navButtonEvent(navBtnFunction) {
    console.log('this in nav button event', this);
    navBtnFunction();
    toggleButtons(this);
}

function createHomePage() {
    let main = document.querySelector('main');
    main.textContent = '';

    let hero = makeElement('div', ['hero'], null, main);
    
    let slogan = makeElement('div', ['slogan'], null, hero);
    makeElement('h1', null, TEXT.COMPANY_SLOGAN, slogan);
    makeElement('p', null, TEXT.COMPANY_MISSION, slogan);
    let sloganButtonDiv = makeElement('div', null, null, slogan);
    let sloganButton = makeElement('button', ['get-started'], 'Get Started', sloganButtonDiv);
    sloganButton.addEventListener('click', function() {
        let menuButton = document.querySelector('#button-menu');
        menuButton.click();
    });

    let heroImageContainer = makeElement('div', ['hero-image-container'], null, hero);
    let heroImageDiv = makeElement('div', ['hero-image'], null, heroImageContainer);
    let heroImage = makeElement('img', null, null, heroImageDiv);
    heroImage.src = '../src/images/food-table.jpg';

    let heroBubbleContainer = makeElement('div', ['hero-bubble-container'], null, heroImageContainer);
    let heroBubbleCustomer = makeElement('div', ['hero-bubble'], TEXT.CUSTOMER_BUBBLE, heroBubbleContainer);
    heroBubbleCustomer.dataset.reviewType = 'customer';
    let heroBubbleWinner = makeElement('div', ['hero-bubble'], TEXT.WINNER_BUBBLE, heroBubbleContainer);
    heroBubbleWinner.dataset.reviewType = 'winner';

    let certifications = makeElement('div', ['certifications'], null, main);
    let certificationPoints = [
        {imageSource: '../src/images/food-service.png', text: TEXT.FOOD_SERVICE_POINT},
        {imageSource: '../src/images/vegan.png', text: TEXT.VEGAN_POINT},
        {imageSource: '../src/images/vegetables-bag.png', text: TEXT.LOCAL_POINT},
    ];
    certificationPoints.forEach(item => {
        let point = makeElement('div', ['point'], null, certifications);
        let imageDiv = makeElement('div', null, null, point);
        let image = makeElement('img', null, null, imageDiv);
        image.src = item.imageSource;
        let commentDiv = makeElement('div', null, null, point);
        makeElement('p', null, item.text, commentDiv);
    });
}

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

function createContactPage() {
    let main = document.querySelector('main');
    main.textContent = '';
}

function toggleButtons(button) {
    console.log('button pressed', button);
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

function makeMenuItem(title, price, description) {
    let menuTable = document.querySelector('.menu-table');
    let menuItem = makeElement('div', ['menu-item'], null, menuTable);
    makeElement('div', ['menu-title'], title, menuItem);
    makeElement('div', ['menu-price'], price, menuItem);
    makeElement('div', ['menu-description'], description, menuItem);
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

export { createPage, initializeHomePage };