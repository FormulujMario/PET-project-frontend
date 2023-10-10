import { logoImgDisplay, menuListDisplay } from "../modules/header/header.js";
import { pageTitleDisplay } from "../modules/page-title.js";
import {
  backToTopButton,
  footerMenuListDisplay,
  socNetIconsDisplay,
} from "../modules/footer/footer.js";
import {
  SHOP_MAIN_BEERS_LIST,
  SHOP_MAIN_BEER_PACKS_LIST,
  SHOP_MAIN_PIVOLADA_LIST,
  SHOP_MAIN_MERCH_LIST,
  SORT_BY,
  STYLE,
} from "../modules/constants.js";
// ======================= Menu header =======================
logoImgDisplay();
menuListDisplay();
// ======================= Page title =======================
pageTitleDisplay();
// ======================= Category display function =======================
const categoryDisplay = (section, list) => {
  if (section.querySelectorAll(".shop-item")) {
    Array(...section.querySelectorAll(".shop-item")).forEach((element) =>
      element.remove()
    );
  }
  list.forEach((element) => {
    section.insertAdjacentHTML(
      "beforeend",
      `
            <div class="shop-item">
            <div class="shop-item-img"><img src="${element.img}" alt=""></div>
            <div class="shop-item-title"><h4>${element.name}</h4><h4>${element.price} ${element.currency}</h4></div>
            <p>${element.description}</p>
            </div>`
    );
  });
};
// ======================= Shop Main Beer Packs =======================
const shopBeerPacksSection = document.querySelector(
  ".shop-category.beer-packs-section"
);
categoryDisplay(shopBeerPacksSection, SHOP_MAIN_BEER_PACKS_LIST);
// ======================= Shop Main Beers =======================
const shopBeersSection = document.querySelector(".shop-category.beers-section");
categoryDisplay(shopBeersSection, SHOP_MAIN_BEERS_LIST);
// ======================= Shop Main Pivolada =======================
const shopPivoladaSection = document.querySelector(
  ".shop-category.pivolada-section"
);
categoryDisplay(shopPivoladaSection, SHOP_MAIN_PIVOLADA_LIST);
// ======================= Shop Main Merch =======================
const shopMerchSection = document.querySelector(".shop-category.merch-section");
categoryDisplay(shopMerchSection, SHOP_MAIN_MERCH_LIST);
// ======================= Shop Main Tab buttons =======================
const allTabButton = document.querySelector(".all-tab");
const beerPackTabButton = document.querySelector(".beer-packs-tab");
const beersTabButton = document.querySelector(".beers-tab");
const merchTabButton = document.querySelector(".merch-tab");
const pivoladaTabButton = document.querySelector(".pivolada-tab");

const beerPackShopCategory = document.querySelector(".beer-packs-category");
const beersShopCategory = document.querySelector(".beers-category");
const merchShopCategory = document.querySelector(".merch-category");
const pivoladaShopCategory = document.querySelector(".pivolada-category");

allTabButton.onclick = () => {
  allTabButton.classList.remove("active", "disabled");
  allTabButton.classList.add("active");
  beerPackTabButton.classList.remove("active", "disabled");
  beerPackTabButton.classList.add("disabled");
  beersTabButton.classList.remove("active", "disabled");
  beersTabButton.classList.add("disabled");
  merchTabButton.classList.remove("active", "disabled");
  merchTabButton.classList.add("disabled");
  pivoladaTabButton.classList.remove("active", "disabled");
  pivoladaTabButton.classList.add("disabled");

  beerPackShopCategory.classList.remove("visible", "hidden");
  beerPackShopCategory.classList.add("visible");
  beersShopCategory.classList.remove("visible", "hidden");
  beersShopCategory.classList.add("visible");
  merchShopCategory.classList.remove("visible", "hidden");
  merchShopCategory.classList.add("visible");
  pivoladaShopCategory.classList.remove("visible", "hidden");
  pivoladaShopCategory.classList.add("visible");
};
beerPackTabButton.onclick = () => {
  allTabButton.classList.remove("active", "disabled");
  allTabButton.classList.add("disabled");
  beerPackTabButton.classList.remove("active", "disabled");
  beerPackTabButton.classList.add("active");
  beersTabButton.classList.remove("active", "disabled");
  beersTabButton.classList.add("disabled");
  merchTabButton.classList.remove("active", "disabled");
  merchTabButton.classList.add("disabled");
  pivoladaTabButton.classList.remove("active", "disabled");
  pivoladaTabButton.classList.add("disabled");

  beerPackShopCategory.classList.remove("visible", "hidden");
  beerPackShopCategory.classList.add("visible");
  beersShopCategory.classList.remove("visible", "hidden");
  beersShopCategory.classList.add("hidden");
  merchShopCategory.classList.remove("visible", "hidden");
  merchShopCategory.classList.add("hidden");
  pivoladaShopCategory.classList.remove("visible", "hidden");
  pivoladaShopCategory.classList.add("hidden");
};
beersTabButton.onclick = () => {
  allTabButton.classList.remove("active", "disabled");
  allTabButton.classList.add("disabled");
  beerPackTabButton.classList.remove("active", "disabled");
  beerPackTabButton.classList.add("disabled");
  beersTabButton.classList.remove("active", "disabled");
  beersTabButton.classList.add("active");
  merchTabButton.classList.remove("active", "disabled");
  merchTabButton.classList.add("disabled");
  pivoladaTabButton.classList.remove("active", "disabled");
  pivoladaTabButton.classList.add("disabled");

  beerPackShopCategory.classList.remove("visible", "hidden");
  beerPackShopCategory.classList.add("hidden");
  beersShopCategory.classList.remove("visible", "hidden");
  beersShopCategory.classList.add("visible");
  merchShopCategory.classList.remove("visible", "hidden");
  merchShopCategory.classList.add("hidden");
  pivoladaShopCategory.classList.remove("visible", "hidden");
  pivoladaShopCategory.classList.add("hidden");
};
merchTabButton.onclick = () => {
  allTabButton.classList.remove("active", "disabled");
  allTabButton.classList.add("disabled");
  beerPackTabButton.classList.remove("active", "disabled");
  beerPackTabButton.classList.add("disabled");
  beersTabButton.classList.remove("active", "disabled");
  beersTabButton.classList.add("disabled");
  merchTabButton.classList.remove("active", "disabled");
  merchTabButton.classList.add("active");
  pivoladaTabButton.classList.remove("active", "disabled");
  pivoladaTabButton.classList.add("disabled");

  beerPackShopCategory.classList.remove("visible", "hidden");
  beerPackShopCategory.classList.add("hidden");
  beersShopCategory.classList.remove("visible", "hidden");
  beersShopCategory.classList.add("hidden");
  merchShopCategory.classList.remove("visible", "hidden");
  merchShopCategory.classList.add("visible");
  pivoladaShopCategory.classList.remove("visible", "hidden");
  pivoladaShopCategory.classList.add("hidden");
};
pivoladaTabButton.onclick = () => {
  allTabButton.classList.remove("active", "disabled");
  allTabButton.classList.add("disabled");
  beerPackTabButton.classList.remove("active", "disabled");
  beerPackTabButton.classList.add("disabled");
  beersTabButton.classList.remove("active", "disabled");
  beersTabButton.classList.add("disabled");
  merchTabButton.classList.remove("active", "disabled");
  merchTabButton.classList.add("disabled");
  pivoladaTabButton.classList.remove("active", "disabled");
  pivoladaTabButton.classList.add("active");

  beerPackShopCategory.classList.remove("visible", "hidden");
  beerPackShopCategory.classList.add("hidden");
  beersShopCategory.classList.remove("visible", "hidden");
  beersShopCategory.classList.add("hidden");
  merchShopCategory.classList.remove("visible", "hidden");
  merchShopCategory.classList.add("hidden");
  pivoladaShopCategory.classList.remove("visible", "hidden");
  pivoladaShopCategory.classList.add("visible");
};
// ======================= Filters - sort by =======================
const filtersSortBySection = document.querySelector(".sort-by");
SORT_BY.forEach((element) => {
  filtersSortBySection.insertAdjacentHTML(
    "beforeend",
    `
              <div class="${element.replace(/ /g, "-").toLowerCase()}">
              ${element}
              </div>`
  );
});
// ======================= popularity =======================
const popularityDiv = document.querySelector(".popularity");
popularityDiv.addEventListener("click", () => {
  SHOP_MAIN_BEERS_LIST.sort(function (a, b) {
    return a.popularity - b.popularity;
  });
  categoryDisplay(shopBeersSection, SHOP_MAIN_BEERS_LIST);
});
// ======================= average rating =======================
const averageRatingDiv = document.querySelector(".average-rating");
averageRatingDiv.addEventListener("click", () => {
  SHOP_MAIN_BEERS_LIST.sort(function (a, b) {
    return a.averageRating - b.averageRating;
  });
  categoryDisplay(shopBeersSection, SHOP_MAIN_BEERS_LIST);
});
// ======================= newness =======================
const newnessDiv = document.querySelector(".newness");
newnessDiv.addEventListener("click", () => {
  SHOP_MAIN_BEERS_LIST.sort(function (a, b) {
    return a.added - b.added;
  });
  categoryDisplay(shopBeersSection, SHOP_MAIN_BEERS_LIST);
});
// ======================= low to high price =======================
const lowToHighPriceDiv = document.querySelector(".low-to-high-price");
lowToHighPriceDiv.addEventListener("click", () => {
  SHOP_MAIN_BEERS_LIST.sort(function (a, b) {
    return a.price - b.price;
  });
  categoryDisplay(shopBeersSection, SHOP_MAIN_BEERS_LIST);
});
// ======================= Filters - style =======================
const filtersStyleSection = document.querySelector(".style");
STYLE.forEach((element) => {
  const id = element.replace(/\//g, "-");
  filtersStyleSection.insertAdjacentHTML(
    "beforeend",
    `
      <div>
      <input type="checkbox" id="${id}" name="${id}"/>
      <label for="${id}">${element}</label>
    </div>`
  );
});
// ======================= Back to top button =======================
backToTopButton();
// ======================= Footer menu list =========================
footerMenuListDisplay();
socNetIconsDisplay();
