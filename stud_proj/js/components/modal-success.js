const body = document.querySelector("body");

export const createSuccessModal = () => {
  body.insertAdjacentHTML("beforeEnd", addSuccessCard());

  const modalCloseBtn = document.querySelector(".modal-success__close");
  const modalError = document.querySelector(".modal-success");
  modalCloseBtn.addEventListener("click", () => {
    modalError.remove();
  });
};

const addSuccessCard = () => {
  return `
        <div class="modal-success">
          <div class="modal-success__box">
            <p class="modal-success__text">Ваши данные успешно отправлены</p>
            <button class="modal-success__close" type="button">
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