import "./menu.css";

const menuPage = () => {
    const content = document.querySelector("#content");
    content.classList.remove('content--home', 'content--about');
    content.classList.add('content--menu');
    
    console.log("MENU")
};

export default menuPage;