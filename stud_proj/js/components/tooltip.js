export const tooltipForCard = (card) => {
  const tooltip = card.querySelector(".tooltip__btn");
  const content = card.querySelector(".tooltip__content");
  tippy(tooltip, {
    content: content.innerHTML,
    allowHTML: true,
    theme: "light"
  });
};
