import { createErrorModal } from "./modal-error.js";
import { createSuccessModal } from "./modal-success.js";

const questionsForm = document.querySelector("#questions__form");
const validate = new JustValidate(questionsForm);

const initValidate = () => {
  validate.addField("#name", [
    {
      rule: "required",
      errorMessage: "Введите ваше имя",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Минимальная длина три символа",
    },
    {
      rule: "maxLength",
      value: 20,
      errorMessage: "Максимальная длина двадцать символов",
    },
  ]);

  validate.addField("#email", [
    {
      rule: "required",
      errorMessage: "Введите почту",
    },
    {
      rule: "email",
      errorMessage: "Почта введена не верно!",
    },
  ]);

  validate.addField("#agree", [
    {
      rule: "required",
      errorMessage: "Согласие обязательно",
    },
  ]);
};

const renderModal = (state) => {
  if (state === "error") {
    createErrorModal();
  }

  if (state === "success") {
    createSuccessModal()
  }
};

const sendData = (e) => {
  e.preventDefault();
  fetch(questionsForm.action, {
    method: "POST",
    body: new FormData(questionsForm),
  })
    .then((response) => {
      if (response.ok) {
        renderModal("success");
        questionsForm.reset();
        return;
      }
      renderModal("error");
      throw new Error();
    })
    .catch((err) => {
      renderModal("error");
      throw new Error(err);
    });
};

export const initForm = () => {
  initValidate();
  questionsForm.addEventListener("submit", sendData);
};
