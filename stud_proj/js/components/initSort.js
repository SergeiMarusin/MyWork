import { renderCardWithPagination } from "./catalog.js";
const selectEl = document.querySelector(".catalog__sort-select");

export const initSort = (data) => {
  selectEl.addEventListener("change", () => {
    renderCardWithPagination(data);
  });
};

export const sortData = (a, b) => {
  const selectValue = selectEl.value;
  if (selectValue === "price-min") {
    return a.price.new - b.price.new;
  }
  if (selectValue === "price-max") {
    return b.price.new - a.price.new;
  }
  if (selectValue === "rating-max") {
    return a.rating - b.rating;
  }
};
