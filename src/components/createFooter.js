export const createFooter = () => {

    const footer = document.createElement("footer");
    footer.classList.add("container-footer", "flex");

    const myInformation = document.createElement("div");
    myInformation.classList.add("my-information", "flex")

    const h1 = document.createElement("h1");
    h1.textContent = "Find Vince At";

    const myLinks = document.createElement("div");
    myLinks.classList.add("my-links", "flex");

    const siteLink = document.createElement("a");
    siteLink.classList.add("my-link");
    siteLink.href = "https://vincentdevelops.com";
    const siteH4 = document.createElement("h4");
    siteH4.textContent = "VincentDevelops.com";
    siteLink.append(siteH4);

    const gitLink = document.createElement("a");
    gitLink.classList.add("my-link", "git-link");
    gitLink.href = "https://github.com/vincentdevelops"
    const gitH4 = document.createElement("h4");
    gitH4.textContent = "GitHub";
    gitLink.append(gitH4);

    myLinks.append(siteLink, gitLink);
    myInformation.append(h1, myLinks);


    const footerLinks = document.createElement("div");
    footerLinks.classList.add("footer-links", "flex");

    for (let col = 0; col < 3; col++) {
        let thisCol = document.createElement("ul");
        thisCol.classList.add("link-col", "flex");

        for (let row = 0; row < 4; row++) {
            let thisLink = document.createElement("li");
            thisLink.classList.add("link");
            thisLink.textContent = "link";

            thisCol.append(thisLink);
        }

        footerLinks.append(thisCol);
    }

    footer.append(myInformation, footerLinks);


    return footer;

}