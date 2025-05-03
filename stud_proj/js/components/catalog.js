import { createCard } from "./createCard.js";
import { renderBasketCard } from "./addToBasket.js";
import { COUNT_SHOW_CARDS_CLICK } from "./constants.js";
import { tooltipForCard } from "./tooltip.js";
import { sortData } from "./initSort.js";
import { filterData } from "./initFilter.js";

const cards = document.querySelector(".catalog__list");
const pagination = document.querySelector(".catalog__pagination");

export const renderCardWithPagination = (data) => {
  let showCards = COUNT_SHOW_CARDS_CLICK;
  let currentPage = 1;

  const sortedAndFilteredData = data.slice().sort(sortData).filter(filterData);

  const renderCards = (data, numberOfProducts, page) => {
    cards.innerHTML = "";
    pagination.innerHTML = "";
    const firstProductIndex = numberOfProducts * page - numberOfProducts;
    const lastProductIndex = firstProductIndex + numberOfProducts;
    const productsOnPage = data.slice(firstProductIndex, lastProductIndex);
    createProductCard(productsOnPage);
  };

  const createPagination = (data, numberOfProducts) => {
    const pagesCount = Math.ceil(data.length / numberOfProducts);

    for (let i = 1; i <= pagesCount; i++) {
      const liEl = renderPaginationBtn(i);
      pagination.append(liEl);
    }
  };

  const renderPaginationBtn = (page) => {
    const liPagination = document.createElement("li");
    liPagination.classList.add("catalog__pagination-item");

    const btnEl = document.createElement("button");
    btnEl.classList.add("catalog__pagination-link");
    btnEl.textContent = page;
    liPagination.append(btnEl);

    if (currentPage === page) {
      btnEl.disabled;
    }

    return liPagination;
  };

  const updatePagination = () => {
    pagination.addEventListener("click", (e) => {
      if (!e.target.closest(".catalog__pagination-item")) {
        return;
      } else {
        currentPage = e.target.textContent;
        renderCards(sortedAndFilteredData, showCards, currentPage);
        createPagination(sortedAndFilteredData, showCards);
      }
    });
  };

  renderCards(sortedAndFilteredData, showCards, currentPage);
  createPagination(sortedAndFilteredData, showCards);
  updatePagination();
};

const createProductCard = (data) => {
  if (!data.length) {
    cards.remove();
    return;
  }

  data.forEach((item) => {
    const card = createCard(item);
    const liEl = document.createElement("li");
    liEl.classList.add("catalog__item");
    liEl.insertAdjacentHTML("beforeend", card);
    cards.append(liEl);

    tooltipForCard(liEl);

    const addButton = liEl.querySelector(".product-card__link--basket");
    addButton.addEventListener("click", () => {
      renderBasketCard(item);
    });
  });
};
