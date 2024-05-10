//Side-menu
function openMenu() {
    const sideMenu = document.getElementById("side-menu");
    const menuButton = document.getElementById("menu-button");

    sideMenu.classList.toggle("show-menu");
    
    if (sideMenu.classList.contains("show-menu")) {
        menuButton.style.zIndex = "3";
    } else {
        menuButton.style.zIndex = "1";
    }
}

const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", openMenu);