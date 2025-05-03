import { createSlider } from "./slider.js";
import { renderCardWithPagination } from "./catalog.js";
import { initSort } from "./initSort.js";
import { initFilter } from "./initFilter.js";

export function getProducts() {
  fetch("./data/data.json")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then((data) => {
      createSlider(data);
      renderCardWithPagination(data);
      initSort(data);
      initFilter(data);
    })
    .catch((err) => {
      throw new Error(err);
    });
}
