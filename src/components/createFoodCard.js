export const createFoodCard = (image, alt, title, description) => {

    let card = document.createElement("div");
    card.classList.add("card");

    let cardImageContainer = document.createElement("img");
    cardImageContainer.classList.add("card-image-container");
    cardImageContainer.src = image;
    cardImageContainer.alt = alt

    let cardTitle = document.createElement("h3");
    cardTitle.textContent = title;

    let p = document.createElement("p");
    p.textContent = description;

    card.appendChild(cardImageContainer);
    card.appendChild(cardTitle)
    card.appendChild(p);

    return card;
}