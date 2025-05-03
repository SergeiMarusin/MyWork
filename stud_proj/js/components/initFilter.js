import { renderCardWithPagination } from "./catalog.js";

const form = document.querySelector(".catalog-form");
const pendantCountText = document.querySelector(
  ".custom-checkbox--pendant .custom-checkbox__count"
);
const ceilingCountText = document.querySelector(
  ".custom-checkbox--ceiling .custom-checkbox__count"
);
const overheadCountText = document.querySelector(
  ".custom-checkbox--overhead .custom-checkbox__count"
);
const pointCountText = document.querySelector(
  ".custom-checkbox--point .custom-checkbox__count"
);
const nightlightsCountText = document.querySelector(
  ".custom-checkbox--nightlights .custom-checkbox__count"
);

export const initFilter = (data) => {
  let pendantCount = 0;
  let ceilingCount = 0;
  let overheadCount = 0;
  let pointCount = 0;
  let nightlightsCount = 0;

  data.forEach((item) => {
    item.type.find((el) => {
      if (el === "pendant") {
        pendantCount += 1;
      }
      if (el === "ceiling") {
        ceilingCount += 1;
      }
      if (el === "overhead") {
        overheadCount += 1;
      }
      if (el === "point") {
        pointCount += 1;
      }
      if (el === "nightlights") {
        nightlightsCount += 1;
      }
    });
  });

  pendantCountText.textContent = pendantCount;
  ceilingCountText.textContent = ceilingCount;
  overheadCountText.textContent = overheadCount;
  pointCountText.textContent = pointCount;
  nightlightsCountText.textContent = nightlightsCount;

  form.addEventListener("change", () => {
    renderCardWithPagination(data);
  });
  form.addEventListener("reset", () => {
    setTimeout(() => {
      renderCardWithPagination(data);
    });
  });
};

const filterByStatus = ({ availability }) => {
  const selectedStatus = document.querySelector(
    ".catalog-form .custom-radio__field:checked"
  );
  if (selectedStatus && selectedStatus.value === "instock") {
    return (
      availability.moscow ||
      availability.orenburg ||
      availability.saintPetersburg
    );
  }
  return true;
};

const filterByType = ({ type }) => {
  const selectedTypes = document.querySelectorAll(
    ".catalog-form .custom-checkbox__field:checked"
  );
  if (selectedTypes.length) {
    return [...selectedTypes].some((item) => type.includes(item.value));
  }

  return true;
};

export const filterData = (data) => filterByStatus(data) && filterByType(data);
