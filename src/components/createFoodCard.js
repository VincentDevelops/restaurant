export const createFoodCard = (image, alt, title, description) => {

    let card = document.createElement("div");
    card.classList.add("card");

    if (image) {
        let cardImageContainer = document.createElement("img");
        cardImageContainer.classList.add("card-image-container");
        cardImageContainer.src = image;
        cardImageContainer.alt = alt
        card.append(cardImageContainer)
    }

    let cardTitle = document.createElement("h3");
    cardTitle.textContent = title;

    let p = document.createElement("p");
    p.textContent = description;

    card.append(cardTitle, p);

    return card;
}