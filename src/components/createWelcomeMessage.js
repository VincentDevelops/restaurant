export const createWelcomeMessage = (title, subtitle) => {

    const welcomeContainer = document.createElement("div");
    welcomeContainer.classList.add("welcome", "flex");

    const h1 = document.createElement("h1");
    h1.textContent = title;

    const p = document.createElement("p");
    p.textContent = subtitle;

    welcomeContainer.append(h1, p);

    return welcomeContainer;

};