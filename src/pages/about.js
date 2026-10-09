import "../components/about.css";

const aboutPage = () => {
    const content = document.querySelector("#content");
    content.classList.remove('content--menu', 'content--home');
    content.classList.toggle('content--about');

    console.log("ABOUT")

    const footer = document.querySelector("footer");
    footer.classList.remove('footer--home', 'footer--menu');
    footer.classList.add('footer--about');
};

export default aboutPage;