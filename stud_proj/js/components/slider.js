import { createCard } from "./createCard.js";
import { renderBasketCard } from "./addToBasket.js";
import { tooltipForCard } from "./tooltip.js";

const dayProducts = document.querySelector(".day-products");
const dayProductsList = document.querySelector(".day-products__list");
const dayProductsSlider = document.querySelector(".day-products__slider");
const sliderPrevBtn = document.querySelector(
  ".day-products__navigation-btn--prev"
);
const sliderNextBtn = document.querySelector(
  ".day-products__navigation-btn--next"
);

export const createSlider = (data) => {
  const filteredData = data.filter((item) => item.goodsOfDay);
  if (!filteredData.length) {
    dayProducts.remove();
    return;    
  }

  filteredData.forEach((item) => {
    const card = createCard(item, "product-card--small");
    const sliderItem = document.createElement("li");
    sliderItem.classList.add("day-products__item");
    sliderItem.classList.add("swiper-slide");
    sliderItem.insertAdjacentHTML("beforeend", card);
    dayProductsList.append(sliderItem);

    tooltipForCard(sliderItem)

    const addButton = sliderItem.querySelector(".product-card__link--basket");
    addButton.addEventListener("click", () => {
      renderBasketCard(item);
    });
  });

  return new window.Swiper(dayProductsSlider, {
    slidesPerView: "4",
    initialSlide: 4,
    spaceBetween: 20,

    navigation: {
      nextEl: sliderNextBtn,
      prevEl: sliderPrevBtn,
    },
  });
};
