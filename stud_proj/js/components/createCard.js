export function createCard(data, cssClass = "") {
  const { id, name, price, image, availability } = data;
  const priceOld = price.old;
  const priceNew = price.new;
  const availabilityMoskow = availability.moscow;
  const availabilityOrenburg = availability.orenburg;
  const availabilitySpb = availability.saintPetersburg;
  return `
             <div class="product-card ${cssClass}">
                  <div class="product-card__visual">
                    <img class="product-card__img" src="images/${image}" height="344" width="290"
                         alt="Изображение товара">
                    <div class="product-card__more">
                      <a href="#" class="product-card__link btn btn--icon product-card__link--basket">
                        <span class="btn__text">В корзину</span>
                        <svg width="24" height="24" aria-hidden="true">
                          <use xlink:href="images/sprite.svg#icon-basket"></use>
                        </svg>
                      </a>
                      <a href="#" class="product-card__link btn btn--secondary">
                        <span class="btn__text">Подробнее</span>
                      </a>
                    </div>
                  </div>
                  <div class="product-card__info">
                    <h2 class="product-card__title">${name}</h2>
                    <span class="product-card__old">
                    <span class="product-card__old-number">${priceOld}</span>
                    <span class="product-card__old-add">₽</span>
                  </span>
                    <span class="product-card__price">
                    <span class="product-card__price-number">${priceNew}</span>
                    <span class="product-card__price-add">₽</span>
                  </span>
                    <div class="product-card__tooltip tooltip">
                      <button class="tooltip__btn" aria-label="Показать подсказку">
                        <svg class="tooltip__icon" width="5" height="10" aria-hidden="true">
                          <use xlink:href="images/sprite.svg#icon-i"></use>
                        </svg>
                      </button>
                      <div class="tooltip__content">
                        <span class="tooltip__text">Наличие товара по городам:</span>
                        <ul class="tooltip__list">
                         <li class="tooltip__item">
                          <span class="tooltip__text">Москва: <span class="tooltip__count">${availabilityMoskow}</span></span>
                         </li>
                         <li class="tooltip__item">
                          <span class="tooltip__text">Оренбург: <span class="tooltip__count">${availabilityOrenburg}</span></span>
                         </li>
                         <li class="tooltip__item">
                          <span class="tooltip__text">Санкт-Петербург: <span class="tooltip__count">${availabilitySpb}</span></span>
                         </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              `;
}
