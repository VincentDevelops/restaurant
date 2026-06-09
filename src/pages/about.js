import selfieImage from "../assets/selfie.jpg";

export const createAboutPage = () => {

    const message = "This site was created for the Odin Project"
    const about = "I'm a college student finishing up a Computer Science degree. I love programming and am mostly doing these projects for the fun of it, and of course it doesn't hurt to learn new technologies. Feel free to reach out with the supplied links below."

    const aboutPage = document.createElement("section");
    aboutPage.classList.add("about-page-container", "flex");

    const image = document.createElement("img");
    image.src = selfieImage;
    image.alt = "vince photo";
    image.classList.add("selfie");

    const h1 = document.createElement("h1");
    h1.textContent = "About Vince";

    const span = document.createElement("span");
    span.textContent = message;

    const p = document.createElement("p");
    p.textContent = about;

    aboutPage.append(image, h1, span, p);

    return aboutPage;

}