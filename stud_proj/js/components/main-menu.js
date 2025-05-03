const menuOpenBtn = document.querySelector(".header__catalog-btn");
const mainMenu = document.querySelector(".main-menu");
const menuCloseBtn = document.querySelector(".main-menu__close");

export function toggleMenu() {
  menuOpenBtn.addEventListener("click", () => {
    mainMenu.classList.add("main-menu--active");
  });

  menuCloseBtn.addEventListener("click", () => {
    mainMenu.classList.remove("main-menu--active");
  });
}
