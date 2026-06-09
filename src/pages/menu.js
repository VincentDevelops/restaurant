import { createWelcomeMessage } from "../components/createWelcomeMessage";
import { createProductCard } from "../components/createProductCard";

import burgerImage from "../assets/md-osman-gani-burger-8307053.png"

export const createMenuPage = () => {
    const menuPage = document.createElement("div");
    menuPage.classList.add("menu-page-container", "flex");

    const title = "Menu";
    const subtitle = "I'm vince and this is my responsive menu page. Reach me at the links below";
    const welcomeMessage = createWelcomeMessage(title, subtitle);
    menuPage.append(welcomeMessage);

    const specialCard = createProductCard(burgerImage, "burger photo", "Burger", "It's Vince's burger!", "$16.00", true);
    menuPage.append(specialCard);

    const productContainer = document.createElement("div");
    productContainer.classList.add("food-options-container",);

    const products = document.createElement("div");
    products.classList.add("food-options", "grid");

    // putting in an arbituary amount of cards in products
    // later on it'd be better to bring in an array of items from a data object
    for (let i = 0; i < 7; i++) {
        let product = createProductCard(burgerImage, "burger photo", "Burger", "It's a burger!", "12.99", false)
        products.append(product);
    }

    productContainer.append(products);

    menuPage.append(productContainer);

    return menuPage;

}