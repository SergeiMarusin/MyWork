export function createBasketProductCard(data) {
  const { image, name, price } = data;
  const priceNew = price.new;
  return `
                  <div class="basket__img">
                    <img src="images/${image}"" alt="Фотография товара" height="60" width="60">
                  </div>
                  <span class="basket__name">${name}</span>
                  <span class="basket__price">${priceNew} руб</span>
                  <button class="basket__close" type="button">
                    <svg class="main-menu__icon" width="24" height="24" aria-hidden="true">
                      <use xlink:href="images/sprite.svg#icon-close"></use>
                    </svg>
                  </button>


          `;
}
