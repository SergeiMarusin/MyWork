const basketButton = document.querySelector(".header__user-btn");
const basketInner = document.querySelector(".basket");

export function openBasket() {
  basketButton.addEventListener("click", () => {
    basketInner.classList.toggle("basket--active");
  });
}
