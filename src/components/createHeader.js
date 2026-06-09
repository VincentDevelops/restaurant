export const createHeader = (navItems, pages, menuIcon) => {



    const header = document.createElement("header");
    header.classList.add("container-header", "grid");

    const siteMenuIcon = document.createElement("img");
    siteMenuIcon.classList.add("button-menu");
    siteMenuIcon.src = menuIcon;
    siteMenuIcon.alt = "site menu icon";

    const h1 = document.createElement("h1");
    h1.classList.add("logo", "flex");
    h1.textContent = "Vince's Place";
    h1.dataset.page = "homePage";

    const nav = document.createElement("nav");
    nav.classList.add("navbar", "flex");

    const linkContainer = document.createElement("ul");
    linkContainer.classList.add("nav-links", "flex");

    for (let i = 0; i < navItems.length; i++) {
        let listItem = document.createElement("li");
        let navButton = document.createElement("button");
        navButton.classList.add("button", "nav-link");

        navButton.textContent = navItems[i];
        navButton.dataset.page = pages[i];
        listItem.append(navButton);
        linkContainer.append(listItem);
    }

    nav.append(linkContainer);

    header.append(siteMenuIcon, h1, nav);

    return header;

}