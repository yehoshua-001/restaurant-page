import "../components/menu.css";

const menuPage = () => {
    const content = document.querySelector("#content");
    content.classList.remove('content--home', 'content--about');
    content.classList.add('content--menu');
    
    const menuHeaderWrapper = document.createElement("div");
    menuHeaderWrapper.classList.add('menu-header-wrapper');
    const menuHeader = document.createElement("h1");
    menuHeader.classList.add('menu-header');
    menuHeader.textContent = "Menu";
    menuHeaderWrapper.appendChild(menuHeader);

    // Coffee section
    const coffeeWrapper = document.createElement("div");
    coffeeWrapper.classList.add('coffee-wrapper');

    const coffeeContainer = document.createElement("div");
    coffeeContainer.classList.add('coffee-container');
    coffeeWrapper.appendChild(coffeeContainer);

    const coffeeBasedCard = document.createElement("p");
    coffeeBasedCard.classList.add('coffee-based-card');
    coffeeContainer.appendChild(coffeeBasedCard);

    const coffeeImg = document.createElement("div");
    coffeeImg.classList.add('coffee-img');

    const coffeeHeader = document.createElement("h1");
    coffeeHeader.classList.add('coffee-header');
    coffeeHeader.textContent = "Coffee";

    const coffeeFlavorCard = document.createElement("div");
    coffeeFlavorCard.classList.add('coffee-flavor-card');

    const coffeeFlavors = document.createElement("div");
    coffeeFlavors.classList.add('coffee-flavors');
    coffeeFlavors.innerHTML = `
        <p>Americano</p>
        <p>Cafe Latte</p>
        <p>Spanish Latte</p>
        <p>Caramel Latte</p>
        <p>Salted Caramel</p>
        <p>Vanilla Latte</p>
        <p>Hazelnut Latte</p>
        <p>Mocha Latte</p>
    `;
    coffeeFlavorCard.append(coffeeHeader, coffeeFlavors);

    const coffeeHot = document.createElement("div");
    coffeeHot.classList.add('coffee-hot');
    const coffeeHotText = document.createElement("p");
    coffeeHotText.classList.add('coffee-hot-text');
    coffeeHotText.textContent = "Hot";

    const coffeeHotRegular = document.createElement("div");
    coffeeHotRegular.classList.add('coffee-hot-regular');
    coffeeHotRegular.textContent = "Regular";
    const coffeeHotRegularPrices = document.createElement("div");
    coffeeHotRegularPrices.classList.add('coffee-hot-regular-prices');
    coffeeHotRegularPrices.innerHTML = `
        <p>49</p>
        <p>59</p>
        <p>69</p>
        <p>79</p>
        <p>79</p>
        <p>79</p>
        <p>79</p>
        <p>79</p>
    `;

    const coffeeHotLarge = document.createElement("div");
    coffeeHotLarge.classList.add('coffee-hot-large');
    coffeeHotLarge.textContent = "Large";
    const coffeeHotLargePrices = document.createElement("div");
    coffeeHotLargePrices.classList.add('coffee-hot-large-prices');
    coffeeHotLargePrices.innerHTML = `
        <p>89</p>
        <p>99</p>
        <p>109</p>
        <p>119</p>
        <p>119</p>
        <p>119</p>
        <p>119</p>
        <p>119</p>
    `;

    coffeeHot.append(
        coffeeHotText,
        coffeeHotRegular,
        coffeeHotRegularPrices,
        coffeeHotLarge,
        coffeeHotLargePrices,
    );

    const coffeeCold = document.createElement("div");
    coffeeCold.classList.add('coffee-cold');
    const coffeeColdText = document.createElement("p");
    coffeeColdText.classList.add('coffee-cold-text');
    coffeeColdText.textContent = "Cold";

    const coffeeColdRegular = document.createElement("p");
    coffeeColdRegular.classList.add('coffee-cold-regular');
    coffeeColdRegular.textContent = "Regular";
    const coffeeColdRegularPrices = document.createElement("div");
    coffeeColdRegularPrices.classList.add('coffee-cold-regular-prices');
    coffeeColdRegularPrices.innerHTML = `
        <p>69</p>
        <p>79</p>
        <p>89</p>
        <p>99</p>
        <p>99</p>
        <p>99</p>
        <p>99</p>
        <p>99</p>
    `;

    const coffeeColdLarge = document.createElement("div");
    coffeeColdLarge.classList.add('coffee-cold-large');
    coffeeColdLarge.textContent = "Large";
    const coffeeColdLargePrices = document.createElement("div");
    coffeeColdLargePrices.classList.add('coffee-cold-large-prices');
    coffeeColdLargePrices.innerHTML = `
        <p>89</p>
        <p>99</p>
        <p>109</p>
        <p>119</p>
        <p>119</p>
        <p>119</p>
        <p>119</p>
        <p>119</p>
    `;

    coffeeCold.append(
        coffeeColdText,
        coffeeColdRegular,
        coffeeColdRegularPrices,
        coffeeColdLarge,
        coffeeColdLargePrices
    );

    coffeeBasedCard.append(
        coffeeImg,
        coffeeFlavorCard,
        coffeeHot,
        coffeeCold,
    );

    // Special Coffee section
    const specialContainer = document.createElement("div");
    specialContainer.classList.add('special-container');
    coffeeWrapper.appendChild(specialContainer);

    const specialCard = document.createElement("div");
    specialCard.classList.add('special-card');
    specialContainer.appendChild(specialCard);
    
    const specialFlavorCard = document.createElement("div");
    specialFlavorCard.classList.add('special-flavor-card');

    const specialHeader = document.createElement("h1");
    specialHeader.classList.add('special-header');
    specialHeader.innerHTML = `Special<br>Coffee`;

    const specialFlavors = document.createElement("div");
    specialFlavors.classList.add('special-flavors');
    specialFlavors.innerHTML = `
        <p>Oreo Cafe Latte</p>
        <p>Cinnamon Latte</p>
        <p>Hazelnut Mocha</p>
    `;
    specialFlavorCard.append(specialHeader, specialFlavors);

    const specialCold = document.createElement("div");
    specialCold.classList.add('special-cold');
    const specialColdText = document.createElement("p");
    specialColdText.classList.add('special-cold-text');
    specialColdText.textContent = "Cold";
    const specialColdRegular = document.createElement("div");
    specialColdRegular.classList.add('special-cold-regular');
    specialColdRegular.textContent = "Regular";
    const specialColdRegularPrices = document.createElement("div");
    specialColdRegularPrices.classList.add('special-cold-regular-prices');
    specialColdRegularPrices.innerHTML = `
        <p>119</p>
        <p>119</p>
        <p>119</p>
    `;

    const specialColdLarge = document.createElement("div");
    specialColdLarge.classList.add('special-cold-large');
    specialColdLarge.textContent = "Large";
    const specialColdLargePrices = document.createElement("div");
    specialColdLargePrices.classList.add('special-cold-large-prices');
    specialColdLargePrices.innerHTML = `
        <p>129</p>
        <p>129</p>
        <p>129</p>
    `;

    const specialImg = document.createElement("div");
    specialImg.classList.add('special-img');

    specialCold.append(
        specialColdText,
        specialColdRegular,
        specialColdRegularPrices,
        specialColdLarge,
        specialColdLargePrices
    );

    specialCard.append(
        specialFlavorCard,
        specialCold,
        specialImg
    );

    content.append(
        menuHeaderWrapper,
        coffeeWrapper,
    );
};

export default menuPage;