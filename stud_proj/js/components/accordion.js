const accordionOpenBtn = document.querySelectorAll(".accordion__btn");

export function toggleAccordion() {
  accordionOpenBtn.forEach((element) => {
    element.addEventListener("click", () => {
      const activeAccordion = document.querySelector(".accordion__btn--active");
      element.classList.toggle("accordion__btn--active");
      if (activeAccordion) {
        activeAccordion.classList.remove("accordion__btn--active");
      }
    });
  });
}
