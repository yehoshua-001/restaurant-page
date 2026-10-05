import "./style.css";
import homePage from "./home.js";
import menuPage from "./menu.js";
import aboutPage from "./about.js";
import tsuperBettleCafeLogo from "./assets/tsuper-beetle-cafe-logo.png";

const logoDiv = document.querySelector(".logo");
const logoImg = document.createElement("img");
logoImg.src = tsuperBettleCafeLogo;
logoDiv.appendChild(logoImg);

homePage();

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

home.addEventListener('click', () => {
    homePage();
});

menu.addEventListener('click', () => {
    menuPage();
});

about.addEventListener('click', () => {
    aboutPage();
});
