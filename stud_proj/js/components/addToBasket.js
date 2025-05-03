import { createBasketProductCard } from "./createProductBasket.js";

const basketCount = document.querySelector(".header__user-count");
const basketList = document.querySelector(".basket__list");
const basketEmpty = document.querySelector(".basket__empty-block");
const basketInner = document.querySelector(".basket");
let count = 0;

export const renderBasketCard = (data) => {
  basketEmpty.remove();
  const card = createBasketProductCard(data);
  const basketItem = document.createElement("li");
  basketItem.classList.add("basket__item");
  basketItem.insertAdjacentHTML("beforeend", card);
  basketList.append(basketItem);
  count++;
  basketCount.textContent = count;
  // if (data) {
  //   renderBasketLink();
  // }


  const removeButton = basketItem.querySelector(".basket__close");
  removeButton.addEventListener("click", (e) => {
    e.preventDefault();
    basketItem.remove();
    count = count - 1;
    basketCount.textContent = count;
    if (!count) {
      basketInner.append(basketEmpty);
    }
  });
};

// const renderBasketLink = () => {
//   const link = `<a class="basket__link btn" href="#">Перейти к оформлению</a>`;
//   if (link >= 1) {
//     return;
//   }
//   basketInner.insertAdjacentHTML("beforeend", link);
// };
