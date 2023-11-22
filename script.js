let modeToggleButton = document.querySelector("[data-theme-toggle]");
let menuEl = document.querySelector(".menu");
let menuItemsEl = document.querySelectorAll(".menu-item");
let hamburgerButtonEl = document.querySelector(".hamburger-button");
let closeIconEl = document.querySelector(".close-icon");
let menuIconEl = document.querySelector(".menu-icon");

// Function to toggle between light and dark themes
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", newTheme);
}

function toggleMenu() {
  if (menu.classList.contains("menu-show")) {
    menu.classList.remove("menu-show");
    closeIconEl.style.display = "none";
    menuIconEl.style.display = "block";
  } else {
    menu.classList.add("menu-show");
    closeIconEl.style.display = "block";
    menuIconEl.style.display = "none";
  }
}

modeToggleButton.addEventListener("click", toggleTheme);

hamburgerButtonEl.addEventListener("click", toggleMenu);

menuItemsEl.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
