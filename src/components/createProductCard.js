
export const createProductCard = (image, alt, title, description, price, isSpecial) => {

    let card = document.createElement("div");
    card.classList.add("card");

    if (image) {
        let cardImageContainer = document.createElement("img");
        cardImageContainer.classList.add("card-image-container");
        cardImageContainer.src = image;
        cardImageContainer.alt = alt
        card.append(cardImageContainer)
    }

    if (isSpecial) {
        card.classList.add("special-card");
        const subcard = createProductCard(null, null, title, description, price, false);

        const specialTitle = document.createElement("h2");
        specialTitle.textContent = "Today's Special";

        subcard.prepend(specialTitle);

        card.append(subcard);
        return card;
    }

    let cardTitle = document.createElement("h3");
    cardTitle.textContent = title;

    let priceSpan = document.createElement("span");
    priceSpan.classList.add("price");
    priceSpan.textContent = price;

    let p = document.createElement("p");
    p.textContent = description;

    let button = document.createElement("button");
    button.classList.add("button");
    button.textContent = "Add to Cart";

    card.append(cardTitle, priceSpan, p, button);

    return card;
}