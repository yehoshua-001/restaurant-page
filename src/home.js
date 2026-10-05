const homePage = () => {
    const content = document.querySelector("#content");

    // Headline section
    const headlineWrapper = document.createElement("div");
    headlineWrapper.classList.add('headlineWrapper');

    const headline = document.createElement("div");
    headline.classList.add('headline');
    headlineWrapper.appendChild(headline);

    const headlineLeft = document.createElement("div");
    headlineLeft.classList.add('headlineLeft');
    headline.appendChild(headlineLeft);

    const heroText = document.createElement("p");
    heroText.classList.add('heroText');
    heroText.textContent = "Coffee and Chill";
    headlineLeft.appendChild(heroText);

    const heroSubText = document.createElement("p");
    heroSubText.classList.add('heroSubText');
    heroSubText.innerHTML = 
        `In <em>Tsuper Beetle Cafe</em>, you'll find the perfect spot to relax and enjoy a great cup of coffee either by yourself, 
        or with friends or family. What are you waiting for? Sign up now and reserve your seat!`;
    headlineLeft.appendChild(heroSubText);

    const signUpBtn = document.createElement("button");
    signUpBtn.classList.add('signUpBtn');
    signUpBtn.textContent = "Sign Up";
    headlineLeft.appendChild(signUpBtn);

    const headlineRight = document.createElement("div");
    headlineRight.classList.add('headlineRight');
    headline.appendChild(headlineRight);

    // Some info section
    const someInfoWrapper = document.createElement("div");
    someInfoWrapper.classList.add('someInfoWrapper');
    const someInfo = document.createElement("div");
    someInfo.classList.add('someInfo');
    someInfoWrapper.appendChild(someInfo);

    const infoText = document.createElement("p");
    infoText.classList.add('infoText');
    infoText.textContent = "What do we have in Tsuper Beetle Cafe?";
    someInfo.appendChild(infoText);

    const infoContainer = document.createElement("div");
    infoContainer.classList.add('infoContainer');
    someInfo.appendChild(infoContainer);

    const infoCardOne = document.createElement("div");
    infoCardOne.classList.add('infoCard');
    const infoCardOneDiv = document.createElement("div");
    infoCardOneDiv.classList.add('infoCardDiv', 'infoCardOneImg');
    const infoCardOneText = document.createElement("p");
    infoCardOneText.classList.add('infoCardText');
    infoCardOneText.textContent = 
        `Various coffee blends and beverages to choose from, whether it's ice cold or hot.`;
    infoCardOne.appendChild(infoCardOneDiv);
    infoCardOne.appendChild(infoCardOneText);

    const infoCardTwo = document.createElement("div");
    infoCardTwo.classList.add('infoCard');
    const infoCardTwoDiv = document.createElement("div");
    infoCardTwoDiv.classList.add('infoCardDiv', 'infoCardTwoImg');
    const infoCardTwoText = document.createElement("p");
    infoCardTwoText.classList.add('infoCardText');
    infoCardTwoText.textContent = 
        `Meals and snacks to pair with your drinks.`;
    infoCardTwo.appendChild(infoCardTwoDiv);
    infoCardTwo.appendChild(infoCardTwoText);

    const infoCardThree = document.createElement("div");
    infoCardThree.classList.add('infoCard');
    const infoCardThreeDiv = document.createElement("div");
    infoCardThreeDiv.classList.add('infoCardDiv', 'infoCardThreeImg');
    const infoCardThreeText = document.createElement("p");
    infoCardThreeText.classList.add('infoCardText');
    infoCardThreeText.textContent = 
        `Vintage atmosphere and nostalgic vibes.`;
    infoCardThree.appendChild(infoCardThreeDiv);
    infoCardThree.appendChild(infoCardThreeText);

    const infoCardFour = document.createElement("div");
    infoCardFour.classList.add('infoCard');
    const infoCardFourDiv = document.createElement("div");
    infoCardFourDiv.classList.add('infoCardDiv', 'infoCardFourImg');
    const infoCardFourText = document.createElement("p");
    infoCardFourText.classList.add('infoCardText');
    infoCardFourText.textContent = 
        `Coziness of nature to relax in, a perfect spot to chill and hangout with your friends or family.`;
    infoCardFour.appendChild(infoCardFourDiv);
    infoCardFour.appendChild(infoCardFourText);

    infoContainer.append(infoCardOne, infoCardTwo, infoCardThree, infoCardFour);

    // Quote section
    const quoteWrapper = document.createElement("div");
    quoteWrapper.classList.add('quoteWrapper');
    const quoteContainer = document.createElement("div");
    quoteContainer.classList.add('quoteContainer');
    quoteWrapper.appendChild(quoteContainer);

    const quoteImg = document.createElement("div");
    quoteImg.classList.add('quoteImg');
    quoteContainer.appendChild(quoteImg);

    const quote = document.createElement("p");
    quote.classList.add('quote');
    quote.innerHTML = 
        `<em>Coffee and cars are the perfect pair for many &mdash; one fuels the driver, the other fuels the drive.</em>`;
    quoteContainer.appendChild(quote);

    // Call to action section
    const callToActionWrapper = document.createElement("div");
    callToActionWrapper.classList.add('callToActionWrapper');
    const callToActionContainer = document.createElement("div");
    callToActionContainer.classList.add('callToActionContainer');
    callToActionWrapper.appendChild(callToActionContainer);

    const callToAction = document.createElement("div");
    callToAction.classList.add('callToAction');
    callToActionContainer.appendChild(callToAction);

    const callToActionTextContainer = document.createElement("div");
    callToActionTextContainer.classList.add('callToActionTextContainer');
    callToAction.appendChild(callToActionTextContainer);

    const callToActionMainText = document.createElement("p");
    callToActionMainText.classList.add('callToActionMainText');
    callToActionMainText.textContent = "Sign up now and reserve your seat!";
    callToActionTextContainer.appendChild(callToActionMainText);

    const callToActionSubText = document.createElement("p");
    callToActionSubText.classList.add('callToActionSubText');
    callToActionSubText.textContent = "Contact us for your inquiries.";
    callToActionTextContainer.appendChild(callToActionSubText);

    const callToActionBtnContainer = document.createElement("div");
    callToActionBtnContainer.classList.add('callToActionBtnContainer');
    callToAction.appendChild(callToActionBtnContainer);

    const callToActionBtn = document.createElement("button");
    callToActionBtn.classList.add('callToActionBtn');
    callToActionBtn.textContent = "Sign Up";
    callToActionBtnContainer.appendChild(callToActionBtn);

    const contactBtn = document.createElement("button");
    contactBtn.classList.add('contactBtn');
    contactBtn.textContent = "Contact";
    callToActionBtnContainer.appendChild(contactBtn);

    content.append(
        headlineWrapper,
        someInfoWrapper,
        quoteWrapper,
        callToActionWrapper
    );
};

export default homePage;