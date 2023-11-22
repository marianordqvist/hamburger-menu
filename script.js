let menuEl = document.querySelector(".menu");
let menuItemsEl = document.querySelectorAll(".menu-item");
let hamburgerButtonEl = document.querySelector(".hamburger-button");
let closeIconEl = document.querySelector(".close-icon");
let menuIconEl = document.querySelector(".menu-icon");

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

hamburgerButtonEl.addEventListener("click", toggleMenu);

menuItemsEl.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
