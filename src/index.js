import homePage from "./pages/home.js";
import menuPage from "./pages/menu.js";
import aboutPage from "./pages/about.js";
import tsuperBettleCafeLogo from "./assets/tsuper-beetle-cafe-logo.png";

const content = document.querySelector("#content");

const logoDiv = document.querySelector(".logo");
const logoImg = document.createElement("img");
logoImg.src = tsuperBettleCafeLogo;
logoDiv.appendChild(logoImg);
logoDiv.addEventListener('click', () => {
    content.innerHTML = "";
    homePage();
});

homePage();

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

home.addEventListener('click', () => {
    content.innerHTML = "";
    homePage();
});

menu.addEventListener('click', () => {
    content.innerHTML = "";
    menuPage();
});

about.addEventListener('click', () => {
    content.innerHTML = "";
    aboutPage();
});
