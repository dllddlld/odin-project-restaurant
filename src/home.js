import { TEXT, makeElement } from "./page.js";

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

export { createHomePage };