const TEXT = {
    COMPANY_NAME: 'Gatsby\'s',
    COMPANY_SLOGAN: 'Let Us Serve You',
    COMPANY_MISSION: 'We strive to provide a space where guests can connect with themselves ' +
    'and explore their full potential.',
    CUSTOMER_BUBBLE: 'This is a text bubble',
    WINNER_BUBBLE: 'This is another text bubble',
    FOOD_SERVICE_POINT: 'Our servers practice social distancing to ensure you and your guests have a comfortable dining experience.',
    VEGAN_POINT: 'We try our best to accommodate our diners\' dietary requirements.',
    LOCAL_POINT: 'We believe is supporting local farmers and producers. We strive to source locally whenever possible.'
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
    let hero = makeElement('div', ['hero'], null, main);
    
    let slogan = makeElement('div', ['slogan'], null, hero);
    makeElement('h1', null, TEXT.COMPANY_SLOGAN, slogan);
    makeElement('p', null, TEXT.COMPANY_MISSION, slogan);
    let sloganButtonDiv = makeElement('div', null, null, slogan);
    let sloganButton = makeElement('button', ['get-started'], 'Get Started', sloganButtonDiv);

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