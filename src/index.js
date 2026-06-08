import "./styles/styles.css";
import "./pages/about";
import "./pages/home";
import "./pages/menu";
import "./pages/reservations"

const menubButton = document.querySelector(".button-menu");
const navbar = document.querySelector(".navbar");

menubButton.onclick = () => {
    console.log("clicked");
    navbar.classList.toggle("open")
}