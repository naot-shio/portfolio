// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
let displayMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!displayMenu) {
    menuBtn.classList.add("hide");
    menu.classList.add("display");
    menuNav.classList.add("display");
    menuBranding.classList.add("display");
    navItems.forEach(item => item.classList.add("display"));

    // Set Menu State
    displayMenu = true;
  } else {
    menuBtn.classList.remove("hide");
    menu.classList.remove("display");
    menuNav.classList.remove("display");
    menuBranding.classList.remove("display");
    navItems.forEach(item => item.classList.remove("display"));

    // Set Menu State
    displayMenu = false;
  }
}
