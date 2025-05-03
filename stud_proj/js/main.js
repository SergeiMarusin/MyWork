import { toggleMenu } from "./components/main-menu.js";
import { openAndChoiceLocation } from "./components/location.js";
import { getProducts } from "./components/getProducts.js";
import { toggleAccordion } from "./components/accordion.js";
import { initForm } from "./components/form.js";
import { openBasket } from "./components/basket.js";

window.addEventListener("DOMContentLoaded", () => {
  getProducts();
  toggleMenu();
  openAndChoiceLocation();
  toggleAccordion();
  initForm();
  openBasket();
});
