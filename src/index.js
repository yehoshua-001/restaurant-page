import "./style.css";

const content = document.querySelector("#content");

const headline = document.createElement("div");
headline.classList.add('headline');
const heroText = document.createElement("p");
heroText.classList.add('heroText');
heroText.textContent = "Coffee and Chill";
const heroSubText = document.createElement("p");
heroSubText.classList.add('heroSubText');
heroSubText.textContent = 
    `In Tsuper Beetle Cafe, you'll find the perfect spot to relax and enjoy a great cup of coffee either by yourself, 
    or with friends or family. What are you waiting for? Sign up now and reserve your seat!`;
const signUpBtn = document.createElement("button");
signUpBtn.classList.add('signUpBtn');
signUpBtn.textContent = "Sign Up";
headline.appendChild(heroText);
headline.appendChild(heroSubText);
headline.appendChild(signUpBtn);

import beetleImg from "./assets/beetle.jpg";
const imageDiv = document.createElement("div");
imageDiv.classList.add('imageDiv');
const homepageImg = document.createElement("img");
homepageImg.classList.add('homepageImg');
homepageImg.src = beetleImg;
imageDiv.appendChild(homepageImg);

content.appendChild(headline);
content.appendChild(imageDiv);