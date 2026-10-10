import "../components/about.css";

const aboutPage = () => {
    const content = document.querySelector("#content");
    content.classList.remove('content--menu', 'content--home');
    content.classList.toggle('content--about');

    const aboutHeaderWrapper = document.createElement("div");
    aboutHeaderWrapper.classList.add('about-header-wrapper');
    const aboutHeader = document.createElement("h1");
    aboutHeader.classList.add('about-header');
    aboutHeader.textContent = "About Us";
    aboutHeaderWrapper.appendChild(aboutHeader);

    // Hero section
    const heroWrapper = document.createElement("div");
    heroWrapper.classList.add('hero-wrapper');

    const heroContainer = document.createElement("div");
    heroContainer.classList.add('hero-container');
    heroWrapper.appendChild(heroContainer);

    const heroText = document.createElement("h1");
    heroText.classList.add('hero-text');
    heroText.innerHTML = `
        Sleepy to drive? Or looking for a unique coffee place?<br> 
        You are in the right place, coffee with us now!
    `;

    const intro = document.createElement("div");
    intro.classList.add('intro');
    intro.innerHTML = `
        We would like to introduce, <strong>Tsuper Beetle Cafe</strong> &mdash;
        The coffee place unlike any other in Calamba.
    `;
    heroContainer.append(heroText, intro);

    // Info section
    const infoWrapper = document.createElement("div");
    infoWrapper.classList.add('info-wrapper');

    const infoContainer = document.createElement("div");
    infoContainer.classList.add('info-container--about');
    infoWrapper.appendChild(infoContainer);

    const placeCard = document.createElement("div");
    placeCard.classList.add('place-card');

    const placeImg = document.createElement("div");
    placeImg.classList.add('place-img');

    const placeCaptionCard = document.createElement("div");
    placeCaptionCard.classList.add('place-caption-card');

    placeCard.append(placeImg ,placeCaptionCard);

    const placeTitle = document.createElement("div");
    placeTitle.classList.add('place-title');
    placeTitle.textContent = "The perfect place to enjoy your coffee";

    const placeTextCard = document.createElement("div");
    placeTextCard.classList.add('place-text-card');
    const placeTextOne = document.createElement("p");
    placeTextOne.textContent = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut bibendum dignissim nunc, quis pulvinar est imperdiet eu. 
        In viverra, velit et maximus mattis, sem mauris iaculis tellus, eget ultricies leo risus at dui.
    `;
    const placeTextTwo = document.createElement("p");
    placeTextTwo.textContent = `
        Integer aliquam purus et eleifend pulvinar. Duis iaculis lacinia porta.
        Vestibulum tempor erat dui, non mattis velit aliquet et.
        Donec ultricies sapien dictum volutpat ultrices.
    `;
    placeTextCard.append(placeTextOne, placeTextTwo);

    placeCaptionCard.append(placeTitle, placeTextCard);

    const menuCard = document.createElement("div");
    menuCard.classList.add('menu-card');

    const menuCaptionCard = document.createElement("div");
    menuCaptionCard.classList.add('menu-caption-card');
    menuCard.appendChild(menuCaptionCard);

    const menuTitle = document.createElement("div");
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = "Our menu includes wide variety of coffee, drinks, and foods";

    const menuText = document.createElement("div");
    menuText.classList.add('menu-text');
    menuText.innerHTML = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut bibendum dignissim nunc, quis pulvinar est imperdiet eu. 
        In viverra, velit et maximus mattis, sem mauris iaculis tellus, eget ultricies leo risus at dui.
    `;
    menuCaptionCard.append(menuTitle, menuText);

    const menuImgContainer = document.createElement("div");
    menuImgContainer.classList.add('menu-img-container');
    menuCard.appendChild(menuImgContainer);

    const menuImgOne = document.createElement("div");
    menuImgOne.classList.add('menu-img', 'menu-img-1');
    const menuImgTwo = document.createElement("div");
    menuImgTwo.classList.add('menu-img', 'menu-img-2');
    const menuImgThree = document.createElement("div");
    menuImgThree.classList.add('menu-img', 'menu-img-3');
    const menuImgFour = document.createElement("div");
    menuImgFour.classList.add('menu-img', 'menu-img-4');
    const menuImgFive = document.createElement("div");
    menuImgFive.classList.add('menu-img', 'menu-img-5');
    const menuImgSix = document.createElement("div");
    menuImgSix.classList.add('menu-img', 'menu-img-6');
    const menuImgSeven = document.createElement("div");
    menuImgSeven.classList.add('menu-img', 'menu-img-7');
    const menuImgEight = document.createElement("div");
    menuImgEight.classList.add('menu-img', 'menu-img-8');

    menuImgContainer.append(
        menuImgOne,
        menuImgTwo,
        menuImgThree,
        menuImgFour,
        menuImgFive,
        menuImgSix,
        menuImgSeven,
        menuImgEight
    );

    infoContainer.append(placeCard, menuCard);

    // Origin story section
    const storyWrapper = document.createElement("div");
    storyWrapper.classList.add('story-wrapper');

    const storyContainer = document.createElement("div");
    storyContainer.classList.add('story-container');
    storyWrapper.appendChild(storyContainer);

    const storyCard = document.createElement("div");
    storyCard.classList.add('story-card');
    storyContainer.appendChild(storyCard);

    const storyHeader = document.createElement("h1");
    storyHeader.classList.add('story-header');
    storyHeader.textContent = "Our Story";

    const storyTextCard = document.createElement("div");
    storyTextCard.classList.add('story-text-card');
    const storyTextOne = document.createElement("p");
    storyTextOne.classList.add('story-text');
    storyTextOne.textContent = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut bibendum dignissim nunc, quis pulvinar est imperdiet eu. 
        In viverra, velit et maximus mattis, sem mauris iaculis tellus, eget ultricies leo risus at dui.
        Integer aliquam purus et eleifend pulvinar. Duis iaculis lacinia porta. 
        Vestibulum tempor erat dui, non mattis velit aliquet et. Donec ultricies sapien dictum volutpat ultrices.
    `;
    const storyTextTwo = document.createElement("p");
    storyTextTwo.classList.add('story-text');
    storyTextTwo.textContent = `
        Fusce rutrum placerat ipsum, a facilisis eros laoreet sit amet. 
        Quisque tortor nunc, rhoncus vitae mi at, pulvinar accumsan ipsum. 
        Vivamus dapibus ex at augue lobortis, nec facilisis magna sollicitudin. 
        Duis feugiat sapien eget mauris laoreet tristique.
    `;
    const storyTextThree = document.createElement("p");
    storyTextThree.classList.add('story-text');
    storyTextThree.textContent = `
        Etiam nec ipsum faucibus, mollis magna posuere, tristique diam. 
        Donec suscipit ex eu porttitor lobortis. Proin et sodales metus. 
        Donec non turpis fringilla, feugiat orci ac, feugiat sapien. 
        Donec id malesuada felis. Sed lobortis aliquam placerat. Duis at lacus velit. 
        Maecenas molestie mi enim, nec tincidunt ex commodo porta.
    `;
    storyTextCard.append(storyTextOne, storyTextTwo, storyTextThree);

    const storyImg = document.createElement("div");
    storyImg.classList.add('story-img');

    storyCard.append(
        storyHeader,
        storyTextCard,
        storyImg
    );

    // Values section
    const valuesWrapper = document.createElement("div");
    valuesWrapper.classList.add('values-wrapper');

    const valuesContainer = document.createElement("div");
    valuesContainer.classList.add('values-container');
    valuesWrapper.appendChild(valuesContainer);

    const valuesHeader = document.createElement("h1");
    valuesHeader.classList.add('values-header');
    valuesHeader.textContent = "Our Core Values";
    valuesContainer.appendChild(valuesHeader);

    const valuesCards = document.createElement("div");
    valuesCards.classList.add('values-cards');
    valuesContainer.appendChild(valuesCards);

    const valueOneCard = document.createElement("div");
    valueOneCard.classList.add('value-card');
    const valueOneTitle = document.createElement("p");
    valueOneTitle.classList.add('value-title');
    valueOneTitle.innerHTML = `Quality &<br>Craft`;
    const valueOneText = document.createElement("div");
    valueOneText.classList.add('value-text');
    valueOneText.innerHTML = `
        <p><em>Excellence in the Ordinary</em></p>
        <p>We treat every step from selecting beans and dialing in the grinder
        to steaming milk with precision and care.</p>
    `;
    valueOneCard.append(valueOneTitle, valueOneText);
    
    const valueTwoCard = document.createElement("div");
    valueTwoCard.classList.add('value-card');
    const valueTwoTitle = document.createElement("p");
    valueTwoTitle.classList.add('value-title');
    valueTwoTitle.innerHTML = `Ethical Sourcing &<br>Sustainability`;
    const valueTwoText = document.createElement("div");
    valueTwoText.classList.add('value-text');
    valueTwoText.innerHTML = `
        <p><em>Respect for the bean and the farmer</em></p>
        <p>We buy from transparent supply chains, support fair wages for growers,
        and use eco-friendly packaging.</p>
    `;
    valueTwoCard.append(valueTwoTitle, valueTwoText);

    const valueThreeCard = document.createElement("div");
    valueThreeCard.classList.add('value-card');
    const valueThreeTitle = document.createElement("p");
    valueThreeTitle.classList.add('value-title');
    valueThreeTitle.innerHTML = `Community &<br>Belonging`;
    const valueThreeText = document.createElement("div");
    valueThreeText.classList.add('value-text');
    valueThreeText.innerHTML = `
        <p><em>Your third place</em></p>
        <p>Our shop is a neighborhood living room where everyone is
        welcomed, seen, and heard without judgment.</p>
    `;
    valueThreeCard.append(valueThreeTitle, valueThreeText);

    const valueFourCard = document.createElement("div");
    valueFourCard.classList.add('value-card');
    const valueFourTitle = document.createElement("p");
    valueFourTitle.classList.add('value-title');
    valueFourTitle.innerHTML = `Warm &<br>Genuine Service`;
    const valueFourText = document.createElement("div");
    valueFourText.classList.add('value-text');
    valueFourText.innerHTML = `
        <p><em>Kindness over pretense</em></p>
        <p>Coffee culture can feel intimidating. We drop the snobbery,
        greet you with a smile, and serve with genuine warmth.</p>
    `;
    valueFourCard.append(valueFourTitle, valueFourText);

    const valueFiveCard = document.createElement("div");
    valueFiveCard.classList.add('value-card');
    const valueFiveTitle = document.createElement("p");
    valueFiveTitle.classList.add('value-title');
    valueFiveTitle.innerHTML = `Integrity &<br>Consistency`;
    const valueFiveText = document.createElement("div");
    valueFiveText.classList.add('value-text');
    valueFiveText.innerHTML = `
        <p><em>Doing what we promise</em></p>
        <p>Showing up on time, keeping our standards high rain or shine, 
        and treating our staff and customers with fairness.</p>
    `;
    valueFiveCard.append(valueFiveTitle, valueFiveText);

    valuesCards.append(
        valueOneCard,
        valueTwoCard,
        valueThreeCard,
        valueFourCard,
        valueFiveCard
    );

    content.append(
        aboutHeaderWrapper,
        heroWrapper,
        infoWrapper,
        storyWrapper,
        valuesWrapper
    );

    const footer = document.querySelector("footer");
    footer.classList.remove('footer--home', 'footer--menu');
    footer.classList.add('footer--about');
};

export default aboutPage;