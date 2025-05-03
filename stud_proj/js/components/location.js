const locationOpenBtn = document.querySelector(".location__city");
const locationSublinkBtn = document.querySelectorAll(".location__sublink");
const locationCity = document.querySelector(".location__city-name");

export function openAndChoiceLocation() {
  locationOpenBtn.addEventListener("click", () => {
    locationOpenBtn.classList.toggle("location__city--active");
  });

  locationSublinkBtn.forEach((element) => {
    element.addEventListener("click", () => {
      locationCity.textContent = element.textContent;
      locationOpenBtn.classList.remove("location__city--active");
    });
  });
}
