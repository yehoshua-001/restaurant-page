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

    const coffeeBasedCard = document.createElement("div");
    coffeeBasedCard.classList.add('coffee-based-card');
    coffeeContainer.appendChild(coffeeBasedCard);

    const coffeeImg = document.createElement("div");
    coffeeImg.classList.add('coffee-img');

    const coffeeFlavorCard = document.createElement("div");
    coffeeFlavorCard.classList.add('coffee-flavor-card');

    const coffeeHeader = document.createElement("h1");
    coffeeHeader.classList.add('coffee-header');
    coffeeHeader.textContent = "Coffee";

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

    const coffeeColdRegular = document.createElement("div");
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

    specialCold.append(
        specialColdText,
        specialColdRegular,
        specialColdRegularPrices,
        specialColdLarge,
        specialColdLargePrices
    );

    const specialImg = document.createElement("div");
    specialImg.classList.add('special-img');

    specialCard.append(
        specialFlavorCard,
        specialCold,
        specialImg
    );

    // Non-coffee section
    const nonCoffeeWrapper = document.createElement("div");
    nonCoffeeWrapper.classList.add('non-coffee-wrapper');

    const nonCoffeeContainer = document.createElement("div");
    nonCoffeeContainer.classList.add('non-coffee-container');
    nonCoffeeWrapper.appendChild(nonCoffeeContainer);

    const nonCoffeeCard = document.createElement("div");
    nonCoffeeCard.classList.add('non-coffee-card');
    nonCoffeeContainer.appendChild(nonCoffeeCard);

    const nonCoffeeImg = document.createElement("div");
    nonCoffeeImg.classList.add('non-coffee-img');

    const nonCoffeeFlavorCard = document.createElement("div");
    nonCoffeeFlavorCard.classList.add('non-coffee-flavor-card');
    
    const nonCoffeeHeader = document.createElement("h1");
    nonCoffeeHeader.classList.add('non-coffee-header');
    nonCoffeeHeader.innerHTML = `Non-<br>Coffee`;

    const nonCoffeeFlavors = document.createElement("div");
    nonCoffeeFlavors.classList.add('non-coffee-flavors');
    nonCoffeeFlavors.innerHTML = `
        <p>Chocolate</p>
        <p>Oreo Latte</p>
        <p>Oreo Berry</p>
        <p>Milo Bomb</p>
        <p>Oreo Bomb</p>
        <p>Ube Latte</p>
    `;
    nonCoffeeFlavorCard.append(nonCoffeeHeader, nonCoffeeFlavors);

    const nonCoffeeSize = document.createElement("div")
    nonCoffeeSize.classList.add('non-coffee-size');

    const nonCoffeeRegular = document.createElement("div");
    nonCoffeeRegular.classList.add('non-coffee-regular');
    nonCoffeeRegular.textContent = "Regular";
    const nonCoffeeRegularPrices = document.createElement("div");
    nonCoffeeRegularPrices.classList.add('non-coffee-regular-prices');
    nonCoffeeRegularPrices.innerHTML = `
        <p>99</p>
        <p>99</p>
        <p>119</p>
        <p>119</p>
        <p>119</p>
        <p>119</p>
    `;

    const nonCoffeeLarge = document.createElement("div");
    nonCoffeeLarge.classList.add('non-coffee-large');
    nonCoffeeLarge.textContent = "Large";
    const nonCoffeeLargePrices = document.createElement("div");
    nonCoffeeLargePrices.classList.add('non-coffee-large-prices');
    nonCoffeeLargePrices.innerHTML = `
        <p>119</p>
        <p>119</p>
        <p>129</p>
        <p>129</p>
        <p>129</p>
        <p>129</p>
    `;

    nonCoffeeSize.append(
        nonCoffeeRegular,
        nonCoffeeRegularPrices,
        nonCoffeeLarge,
        nonCoffeeLargePrices
    );

    nonCoffeeCard.append(
        nonCoffeeImg,
        nonCoffeeFlavorCard,
        nonCoffeeSize
    );

    // Matcha section
    const matchaContainer = document.createElement("div");
    matchaContainer.classList.add('matcha-container');
    nonCoffeeWrapper.appendChild(matchaContainer);

    const matchaCard = document.createElement("div");
    matchaCard.classList.add('matcha-card');
    matchaContainer.appendChild(matchaCard);

    const matchaFlavorCard = document.createElement("div");
    matchaFlavorCard.classList.add('matcha-flavor-card');

    const matchaHeader = document.createElement("h1");
    matchaHeader.classList.add('matcha-header');
    matchaHeader.textContent = "Matcha";

    const matchaFlavors = document.createElement("div");
    matchaFlavors.classList.add('matcha-flavors');
    matchaFlavors.innerHTML = `
        <p>Matcha Latte</p>
        <p>Berry Matcha</p>
        <p>Oreo Matcha</p>
        <p>Dirty Matcha</p>
    `;
    matchaFlavorCard.append(matchaHeader, matchaFlavors);

    const matchaSize = document.createElement("div");
    matchaSize.classList.add('matcha-size');

    const matchaRegular = document.createElement("div");
    matchaRegular.classList.add('matcha-regular');
    matchaRegular.textContent = "Regular";
    const matchaRegularPrices = document.createElement("div");
    matchaRegularPrices.classList.add('matcha-regular-prices');
    matchaRegularPrices.innerHTML = `
        <p>99</p>
        <p>99</p>
        <p>99</p>
        <p>99</p>
    `;

    const matchaLarge = document.createElement("div");
    matchaLarge.classList.add('matcha-large');
    matchaLarge.textContent = "Large";
    const matchaLargePrices = document.createElement("div");
    matchaLargePrices.classList.add('matcha-large-prices');
    matchaLargePrices.innerHTML = `
        <p>119</p>
        <p>119</p>
        <p>119</p>
        <p>119</p>
    `;

    matchaSize.append(
        matchaRegular,
        matchaRegularPrices,
        matchaLarge,
        matchaLargePrices
    );

    const matchaImg = document.createElement("div");
    matchaImg.classList.add('matcha-img');

    matchaCard.append(
        matchaFlavorCard,
        matchaSize,
        matchaImg
    );

    // Fruit-based section
    const fruitBasedContainer = document.createElement("div");
    fruitBasedContainer.classList.add('fruit-based-container');
    nonCoffeeWrapper.appendChild(fruitBasedContainer);

    const fruitBasedCard = document.createElement("div");
    fruitBasedCard.classList.add('fruit-based-card');
    fruitBasedContainer.appendChild(fruitBasedCard);

    const fruitBasedImg = document.createElement("div");
    fruitBasedImg.classList.add('fruit-based-img');

    const fruitBasedFlavorCard = document.createElement("div");
    fruitBasedFlavorCard.classList.add('fruit-based-flavor-card');
    
    const fruitBasedHeader = document.createElement("h1");
    fruitBasedHeader.classList.add('fruit-based-header');
    fruitBasedHeader.innerHTML = `Fruit-<br>Based`;

    const fruitBasedFlavors = document.createElement("div");
    fruitBasedFlavors.classList.add('fruit-based-flavors');
    fruitBasedFlavors.innerHTML = `
        <p>Strawberry Latte/Soda</p>
        <p>Blueberry Latte/Soda</p>
        <p>Green Apple</p>
        <p>Lychee Soda</p>
    `;
    fruitBasedFlavorCard.append(fruitBasedHeader,fruitBasedFlavors);

    const fruitBasedSize = document.createElement("div");
    fruitBasedSize.classList.add('fruit-based-size');

    const fruitBasedRegular = document.createElement("div");
    fruitBasedRegular.classList.add('fruit-based-regular');
    fruitBasedRegular.textContent = "Regular";
    const fruitBasedRegularPrices = document.createElement("div");
    fruitBasedRegularPrices.classList.add('fruit-based-regular-prices');
    fruitBasedRegularPrices.innerHTML = `
        <p>99</p>
        <p>99</p>
        <p>99</p>
        <p>99</p>
    `;

    const fruitBasedLarge = document.createElement("div");
    fruitBasedLarge.classList.add('fruit-based-large');
    fruitBasedLarge.textContent = "Large";
    const fruitBasedLargePrices = document.createElement("div");
    fruitBasedLargePrices.classList.add('fruit-based-large-prices');
    fruitBasedLargePrices.innerHTML = `
        <p>119</p>
        <p>119</p>
        <p>119</p>
        <p>119</p>
    `;

    fruitBasedSize.append(
        fruitBasedRegular,
        fruitBasedRegularPrices,
        fruitBasedLarge,
        fruitBasedLargePrices
    );

    fruitBasedCard.append(
        fruitBasedImg,
        fruitBasedFlavorCard,
        fruitBasedSize
    );

    // Food section
    // Snacks section
    const foodWrapper = document.createElement("div");
    foodWrapper.classList.add('food-wrapper');

    const snacksContainer = document.createElement("div");
    snacksContainer.classList.add('snacks-container');
    foodWrapper.appendChild(snacksContainer);

    const snacksCard = document.createElement("div");
    snacksCard.classList.add('snacks-card');
    snacksContainer.appendChild(snacksCard);

    const snacksItemCard = document.createElement("div");
    snacksItemCard.classList.add('snacks-item-card');

    const snacksHeader = document.createElement("h1");
    snacksHeader.classList.add('snacks-header');
    snacksHeader.textContent = "Snacks";

    const snacks = document.createElement("div");
    snacks.classList.add('snacks');
    snacks.innerHTML = `
        <p>French Fries <br><span>(BBQ, Cheese, Sour & Cream)</span></p>
        <p>Chicken Nuggets <br><span>w/ Garlic Sauce (6pcs)</span></p>
        <p>Cheesesticks <br><span>(10pcs)</span></p>
    `;
    snacksItemCard.append(snacksHeader, snacks);

    const snacksPriceCard = document.createElement("div");
    snacksPriceCard.classList.add('snacks-price-card');
    snacksPriceCard.textContent = "Price";
    const snacksPrices = document.createElement("div");
    snacksPrices.classList.add('snacks-prices');
    snacksPrices.innerHTML = `
        <p>50</p>
        <p>60</p>
        <p>20</p>
    `;
    snacksPriceCard.appendChild(snacksPrices);

    const snacksImg = document.createElement("div");
    snacksImg.classList.add('snacks-img');

    snacksCard.append(
        snacksItemCard,
        snacksPriceCard,
        snacksImg
    );

    // Burgers section
    const burgerContainer = document.createElement("div");
    burgerContainer.classList.add('burger-container');
    foodWrapper.appendChild(burgerContainer);

    const burgerCard = document.createElement("div");
    burgerCard.classList.add('burger-card');
    burgerContainer.appendChild(burgerCard);

    const burgerImg = document.createElement("div");
    burgerImg.classList.add('burger-img');

    const burgerItemCard = document.createElement("div");
    burgerItemCard.classList.add('burger-item-card');

    const burgerHeader = document.createElement("h1");
    burgerHeader.classList.add('burger-header');
    burgerHeader.textContent = "Burgers";

    const burgers = document.createElement("div");
    burgers.classList.add('burgers');
    burgers.innerHTML = `
        <p>Tsuper Burger</p>
        <p>Chicken Burger</p>
        <p>Hungarian Sandwich</p>
    `;
    burgerItemCard.append(burgerHeader, burgers);

    const burgerPriceCard = document.createElement("div");
    burgerPriceCard.classList.add('burger-price-card');
    burgerPriceCard.textContent = "Price";
    const burgerPrices = document.createElement("div");
    burgerPrices.classList.add('burger-prices');
    burgerPrices.innerHTML = `
        <p>50</p>
        <p>75</p>
        <p>80</p>
    `;
    burgerPriceCard.appendChild(burgerPrices);

    burgerCard.append(
        burgerImg,
        burgerItemCard,
        burgerPriceCard
    );

    // Meals section
    const mealsContainer = document.createElement("div");
    mealsContainer.classList.add('meals-container');
    foodWrapper.appendChild(mealsContainer);

    const mealsCard = document.createElement("div");
    mealsCard.classList.add('meals-card');
    mealsContainer.appendChild(mealsCard);

    const mealsItemCard = document.createElement("div");
    mealsItemCard.classList.add('meals-item-card');

    const mealsHeader = document.createElement("h1");
    mealsHeader.classList.add('meals-header');
    mealsHeader.textContent = "Meals";

    const meals = document.createElement("div");
    meals.classList.add('meals');
    meals.innerHTML = `
        <p>Tocina Rice</p>
        <p>Hungarian Rice</p>
        <p>Nuggie Garlic Rice</p>
    `;
    mealsItemCard.append(mealsHeader, meals);

    const mealsPriceCard = document.createElement("div");
    mealsPriceCard.classList.add('meals-price-card');
    mealsPriceCard.textContent = "Price";
    const mealsPrices = document.createElement("div");
    mealsPrices.classList.add('meals-prices');
    mealsPrices.innerHTML = `
        <p>90</p>
        <p>85</p>
        <p>50</p>
    `;
    mealsPriceCard.appendChild(mealsPrices);

    const mealAddOnsCard = document.createElement("div");
    mealAddOnsCard.classList.add('meal-add-ons-card');
    mealAddOnsCard.textContent = "Add Ons";
    const mealAddOns = document.createElement("div");
    mealAddOns.classList.add('meal-add-ons');
    mealAddOns.innerHTML = `
        <p>Extra Rice <span>15</span></p>
        <p>Extra Sauce <span>10</span></p>
    `;
    mealAddOnsCard.appendChild(mealAddOns);

    const mealsImg = document.createElement("div");
    mealsImg.classList.add('meals-img');

    mealsCard.append(
        mealsItemCard,
        mealsPriceCard,
        mealAddOnsCard,
        mealsImg
    );

    content.append(
        menuHeaderWrapper,
        coffeeWrapper,
        nonCoffeeWrapper,
        foodWrapper
    );

    const footer = document.querySelector("footer");
    footer.classList.remove('footer--home', 'footer--about');
    footer.classList.add('footer--menu');
};

export default menuPage;