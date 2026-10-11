import homePage from "./pages/home.js";
import menuPage from "./pages/menu.js";
import aboutPage from "./pages/about.js";
import tsuperBettleCafeLogo from "./assets/tsuper-beetle-cafe-logo.png";

const content = document.querySelector("#content");
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

const logoDiv = document.querySelector(".logo");
const logoImg = document.createElement("img");
logoImg.src = tsuperBettleCafeLogo;
logoDiv.appendChild(logoImg);
logoDiv.addEventListener('click', () => {
    menu.classList.remove('button--menu');
    about.classList.remove('button--about');
    content.innerHTML = "";
    homePage();
});

homePage();

home.addEventListener('click', () => {
    menu.classList.remove('button--menu');
    about.classList.remove('button--about');
    home.classList.add('button--home');
    content.innerHTML = "";
    homePage();
});

menu.addEventListener('click', () => {
    home.classList.remove('button--home');
    about.classList.remove('button--about');
    menu.classList.add('button--menu');
    content.innerHTML = "";
    menuPage();
});

about.addEventListener('click', () => {
    home.classList.remove('button--home');
    menu.classList.remove('button--menu');
    about.classList.add('button--about');
    content.innerHTML = "";
    aboutPage();
});
