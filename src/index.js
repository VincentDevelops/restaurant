import "./styles/styles.css";
import "./pages/about";
import "./pages/home.js";
import "./pages/menu";
import { createHomePage } from "./pages/home.js";
import { createHeader } from "./components/createHeader.js"
import { createFooter } from "./components/createFooter.js"
import menuIcon from "./assets/menu_20dp_000000_FILL0_wght400_GRAD0_opsz20.svg";
import { createMenuPage } from "./pages/menu";
import { createAboutPage } from "./pages/about";

(() => {
    const body = document.querySelector("body");
    const navLinks = ["555-555-5555", "Menu", "About", "Order Now"];
    const pages = ["number", "menuPage", "aboutPage", "orderPage"];
    const header = createHeader(navLinks, pages, menuIcon);
    const footer = createFooter();
    const home = createHomePage();
    const menu = createMenuPage();
    const about = createAboutPage();
    menu.classList.add("hide");
    about.classList.add("hide");

    body.append(header, home, menu, about, footer);


    const menubButton = document.querySelector(".button-menu");
    const navbar = document.querySelector(".navbar");

    const menuPageButton = document.querySelector('[data-page="menuPage"]');
    const homePageButton = document.querySelector('[data-page="homePage"]');
    const aboutPageButton = document.querySelector('[data-page="aboutPage"]');


    aboutPageButton.onclick = () => {
        if (!about.classList.contains("hide"))
            return;

        about.classList.remove("hide");
        menu.classList.add("hide");
        home.classList.add("hide");

    }

    homePageButton.onclick = () => {
        if (!home.classList.contains("hide"))
            return;

        about.classList.add("hide");
        menu.classList.add("hide");
        home.classList.remove("hide");
    }

    menuPageButton.onclick = () => {
        if (!menu.classList.contains("hide"))
            return;

        about.classList.add("hide");
        menu.classList.remove("hide");
        home.classList.add("hide");
    }

    menubButton.onclick = () => {
        console.log("clicked");
        navbar.classList.toggle("open")
    }


})();