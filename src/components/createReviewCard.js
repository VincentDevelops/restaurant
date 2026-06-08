export const createReviewCard = (quote, userImage, imageAlt, name, description) => {

    // reivew card
    // > h3
    // > review image
    // > reviewer container
    // > > review-image
    // > > review-info
    // > > > h4
    // > > > span
    // > >
    // >



    const card = document.createElement("div");
    card.classList.add("review-card");

    const h3 = document.createElement("h3");
    h3.textContent = quote;

    const reviewerContainer = document.createElement("div");
    reviewerContainer.classList.add("reviewer-container", "flex");

    const image = document.createElement("img");
    image.classList.add("review-image");
    image.alt = imageAlt;
    image.src = userImage;

    const reviewInfo = document.createElement("div");
    reviewInfo.classList.add("review-info", "flex");

    const h4 = document.createElement("h4");
    h4.classList.add("review-name");
    h4.textContent = name;

    const span = document.createElement("span");
    span.classList.add("review-description")
    span.textContent = description;


    reviewInfo.append(h4, span);
    reviewerContainer.append(image, reviewInfo);

    card.append(h3, reviewerContainer);

    return card;

}