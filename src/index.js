import "./styles/styles.css";
import "./pages/about";
import "./pages/home.js";
import "./pages/menu";
import "./pages/reservations"
import { createHomePage } from "./pages/home.js";
import { createHeader } from "./components/createHeader.js"
import { createFooter } from "./components/createFooter.js"
import menuIcon from "./assets/menu_20dp_000000_FILL0_wght400_GRAD0_opsz20.svg";

(() => {
    const body = document.querySelector("body");
    let navLinks = ["555-555-5555", "Menu", "Pickup-Order", "About", "Order Now"];
    const header = createHeader(navLinks, menuIcon);
    const home = createHomePage();
    const footer = createFooter();

    body.append(header, home, footer);


    const menubButton = document.querySelector(".button-menu");
    const navbar = document.querySelector(".navbar");

    menubButton.onclick = () => {
        console.log("clicked");
        navbar.classList.toggle("open")
    }
})();