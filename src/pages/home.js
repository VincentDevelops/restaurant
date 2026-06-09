import { createReservationPrompt } from "../components/createReservationPrompt.js";
import { createReviewCard } from "../components/createReviewCard.js";
import { createFoodCard } from "../components/createFoodCard.js";
import burgerImage from "../assets/md-osman-gani-burger-8307053.png";
import userImage from "../assets/selfie.jpg";

export const createHomePage = () => {
    const homePage = document.createElement("section");
    homePage.classList.add("home-page-container", "flex");

    // Welcome Page ============================================
    const pageWelcome = document.createElement("div")
    pageWelcome.classList.add("page-welcome");
    const welcome = document.createElement("div");
    welcome.classList.add("welcome", "flex");
    const welcomeTitle = document.createElement("h1");
    welcomeTitle.textContent = "Vince's Place"
    const welcomeSubTitle = document.createElement("p");
    welcomeSubTitle.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum non veniam susvoluptatibus!";

    welcome.append(welcomeTitle, welcomeSubTitle)

    pageWelcome.append(welcome, createReservationPrompt());

    // Food options ============================================
    const foodOptionsContainer = document.createElement("div");
    foodOptionsContainer.classList.add("food-options-container", "flex");
    const foodOptionsTitle = document.createElement("h1");
    foodOptionsTitle.textContent = "Look at this food";
    foodOptionsContainer.append(foodOptionsTitle);

    const foodOptionsGrid = document.createElement("div");
    foodOptionsGrid.classList.add("food-options", "grid");

    const foodCard1 = createFoodCard(burgerImage, "burger", "Burger 1", "check out this really fat burger it's so fat and juicy");
    const foodCard2 = createFoodCard(burgerImage, "burger", "Burger 1", "check out this really fat burger it's so fat and juicy");
    const foodCard3 = createFoodCard(burgerImage, "burger", "Burger 1", "check out this really fat burger it's so fat and juicy");

    foodOptionsGrid.append(foodCard1, foodCard2, foodCard3);
    foodOptionsContainer.append(foodOptionsGrid);

    // reviews ============================================

    const reviewsContainer = document.createElement("div");
    reviewsContainer.classList.add("reviews", "grid");
    const reviewsTitle = document.createElement("h1");
    reviewsTitle.textContent = "Look at these Reviews";

    const reviewCard1 = createReviewCard("What a delicious burger", userImage, "user photo", "Vince", "An enthusiastic customer");

    reviewsContainer.append(reviewsTitle, reviewCard1);

    homePage.append(pageWelcome, foodOptionsContainer, reviewsContainer)

    return homePage;
}