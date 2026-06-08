const createFoodCard = (image, alt, title, description) => {

    let card = document.createElement("div");
    card.classList.add("card");

    let cardImageContainer = document.createElement("div");
    card.classList.add("card-image-container");
    card.src = image;
    card.alt = alt

    let title = document.createElement("h3");
    title.textContent = title;

    let p = document.createElement("p");
    p.textContent = description;

    card.appendChild(cardImageContainer);
    card.appendChild(title)
    card.appendChild(p);

    return card;
}