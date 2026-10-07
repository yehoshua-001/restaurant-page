import "../components/about.css";

const aboutPage = () => {
    const content = document.querySelector("#content");
    content.classList.remove('content--menu', 'content--home');
    content.classList.toggle('content--about');

    console.log("ABOUT")
};

export default aboutPage;