import "../components/home.css";

const homePage = () => {
    const content = document.querySelector("#content");
    content.classList.remove('content--menu', 'content--about');
    content.classList.add('content--home');

    // Headline section
    const headlineWrapper = document.createElement("div");
    headlineWrapper.classList.add('headline-wrapper');

    const headlineContainer = document.createElement("div");
    headlineContainer.classList.add('headline-container');
    headlineWrapper.appendChild(headlineContainer);

    const headlineLeft = document.createElement("div");
    headlineLeft.classList.add('headline-left');
    headlineContainer.appendChild(headlineLeft);

    const heroText = document.createElement("p");
    heroText.classList.remove('hero-text--about');
    heroText.classList.add('hero-text--home');
    heroText.innerHTML = `Kape at <br> Kulturang Vintage`;
    headlineLeft.appendChild(heroText);

    const heroSubtext = document.createElement("p");
    heroSubtext.classList.add('hero-subtext');
    heroSubtext.innerHTML = 
        `In Tsuper Beetle Cafe, you'll find the perfect spot to relax and enjoy while feeling the nostalgic and vintage vibes
        either with yourself, or friends and family. What are you waiting for? Sign up now and reserve your seat!`;
    headlineLeft.appendChild(heroSubtext);

    const signUpBtn = document.createElement("button");
    signUpBtn.classList.add('sign-up-btn');
    signUpBtn.textContent = "Sign Up";
    headlineLeft.appendChild(signUpBtn);

    const headlineRight = document.createElement("div");
    headlineRight.classList.add('headline-right');
    headlineContainer.appendChild(headlineRight);

    // Some info section
    const someInfoWrapper = document.createElement("div");
    someInfoWrapper.classList.add('some-info-wrapper');
    const someInfo = document.createElement("div");
    someInfo.classList.add('some-info');
    someInfoWrapper.appendChild(someInfo);

    const infoText = document.createElement("p");
    infoText.classList.add('info-text');
    infoText.textContent = "What do we have in Tsuper Beetle Cafe?";
    someInfo.appendChild(infoText);

    const infoContainer = document.createElement("div");
    infoContainer.classList.add('info-container');
    someInfo.appendChild(infoContainer);

    const infoCardOne = document.createElement("div");
    infoCardOne.classList.add('info-card');
    const infoCardOneDiv = document.createElement("div");
    infoCardOneDiv.classList.add('info-card-div', 'info-card-one-img');
    const infoCardOneText = document.createElement("p");
    infoCardOneText.classList.add('info-card-text');
    infoCardOneText.textContent = 
        `Various coffee blends and beverages to choose from, whether it's ice cold or hot.`;
    infoCardOne.appendChild(infoCardOneDiv);
    infoCardOne.appendChild(infoCardOneText);

    const infoCardTwo = document.createElement("div");
    infoCardTwo.classList.add('info-card');
    const infoCardTwoDiv = document.createElement("div");
    infoCardTwoDiv.classList.add('info-card-div', 'info-card-two-img');
    const infoCardTwoText = document.createElement("p");
    infoCardTwoText.classList.add('info-card-text');
    infoCardTwoText.textContent = 
        `Meals and snacks to pair with your drinks.`;
    infoCardTwo.appendChild(infoCardTwoDiv);
    infoCardTwo.appendChild(infoCardTwoText);

    const infoCardThree = document.createElement("div");
    infoCardThree.classList.add('info-card');
    const infoCardThreeDiv = document.createElement("div");
    infoCardThreeDiv.classList.add('info-card-div', 'info-card-three-img');
    const infoCardThreeText = document.createElement("p");
    infoCardThreeText.classList.add('info-card-text');
    infoCardThreeText.textContent = 
        `Vintage atmosphere and nostalgic vibes.`;
    infoCardThree.appendChild(infoCardThreeDiv);
    infoCardThree.appendChild(infoCardThreeText);

    const infoCardFour = document.createElement("div");
    infoCardFour.classList.add('info-card');
    const infoCardFourDiv = document.createElement("div");
    infoCardFourDiv.classList.add('info-card-div', 'info-card-four-img');
    const infoCardFourText = document.createElement("p");
    infoCardFourText.classList.add('info-card-text');
    infoCardFourText.textContent = 
        `Coziness of nature to relax in, a perfect spot to chill and hangout with your friends and family.`;
    infoCardFour.appendChild(infoCardFourDiv);
    infoCardFour.appendChild(infoCardFourText);

    infoContainer.append(infoCardOne, infoCardTwo, infoCardThree, infoCardFour);

    // Quote section
    const quoteWrapper = document.createElement("div");
    quoteWrapper.classList.add('quote-wrapper');
    const quoteContainer = document.createElement("div");
    quoteContainer.classList.add('quote-container');
    quoteWrapper.appendChild(quoteContainer);

    const quoteImg = document.createElement("div");
    quoteImg.classList.add('quote-img');
    quoteContainer.appendChild(quoteImg);

    const quote = document.createElement("p");
    quote.classList.add('quote');
    quote.innerHTML = 
        `<em>Coffee and cars are the perfect pair for many &mdash; one fuels the driver, the other fuels the drive.</em>`;
    quoteContainer.appendChild(quote);

    // Call to action section
    const callToActionWrapper = document.createElement("div");
    callToActionWrapper.classList.add('call-to-action-wrapper');
    const callToActionContainer = document.createElement("div");
    callToActionContainer.classList.add('call-to-action-container');
    callToActionWrapper.appendChild(callToActionContainer);

    const callToAction = document.createElement("div");
    callToAction.classList.add('call-to-action');
    callToActionContainer.appendChild(callToAction);

    const callToActionTextContainer = document.createElement("div");
    callToActionTextContainer.classList.add('call-to-action-text-container');
    callToAction.appendChild(callToActionTextContainer);

    const callToActionText = document.createElement("p");
    callToActionText.classList.add('call-to-action-text');
    callToActionText.textContent = "Sign up now and reserve your seat!";
    callToActionTextContainer.appendChild(callToActionText);

    const callToActionSubtext = document.createElement("p");
    callToActionSubtext.classList.add('call-to-action-subtext');
    callToActionSubtext.textContent = "Contact us for your inquiries.";
    callToActionTextContainer.appendChild(callToActionSubtext);

    const callToActionBtnContainer = document.createElement("div");
    callToActionBtnContainer.classList.add('call-to-action-btn-container');
    callToAction.appendChild(callToActionBtnContainer);

    const callToActionBtn = document.createElement("button");
    callToActionBtn.classList.add('call-to-action-btn');
    callToActionBtn.textContent = "Sign Up";
    callToActionBtnContainer.appendChild(callToActionBtn);

    const contactBtn = document.createElement("button");
    contactBtn.classList.add('contact-btn');
    contactBtn.textContent = "Contact";
    callToActionBtnContainer.appendChild(contactBtn);

    content.append(
        headlineWrapper,
        someInfoWrapper,
        quoteWrapper,
        callToActionWrapper
    );

    const footer = document.querySelector("footer");
    footer.classList.remove('footer--menu', 'footer--about');
    footer.classList.add('footer--home');
};

export default homePage;