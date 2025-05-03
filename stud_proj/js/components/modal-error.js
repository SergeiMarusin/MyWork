const body = document.querySelector("body");

export const createErrorModal = () => {
  body.insertAdjacentHTML("beforeEnd", addErrorCard());

  const modalCloseBtn = document.querySelector(".modal-error__close");
  const modalError = document.querySelector(".modal-error");
  modalCloseBtn.addEventListener("click", () => {
    modalError.remove();
  });
};

const addErrorCard = () => {
  return `
        <div class="modal-error">
          <div class="modal-error__box">
            <p class="modal-error__text">Ваши данные не отправлены!!! Попробуйте снова!!!</p>
            <button class="modal-error__close" type="button">
              <svg
                  class="main-menu__icon"
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <use xlink:href="images/sprite.svg#icon-close"></use>
              </svg>
            </button>
          </div>
       </div>
    `;
};
