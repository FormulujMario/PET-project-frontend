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
} from "../modules/constants.js";
// ======================= Menu header =======================
logoImgDisplay();
menuListDisplay();
// ======================= Page title =======================
pageTitleDisplay();
// ======================= Shop Main Beer Packs =======================
const shopBeerPacksSection = document.querySelector(
  ".shop-category.beer-packs-section"
);
SHOP_MAIN_BEER_PACKS_LIST.forEach((element) => {
  shopBeerPacksSection.insertAdjacentHTML(
    "beforeend",
    `
            <div class="shop-item">
            <div class="shop-item-img"><img src="${element.img}" alt=""></div>
            <div class="shop-item-title"><h4>${element.name}</h4><h4>${element.price}</h4></div>
            <p>${element.description}</p>
            </div>`
  );
});
// ======================= Shop Main Beers =======================
const shopBeersSection = document.querySelector(".shop-category.beers-section");
SHOP_MAIN_BEERS_LIST.forEach((element) => {
  shopBeersSection.insertAdjacentHTML(
    "beforeend",
    `
            <div class="shop-item">
            <div class="shop-item-img"><img src="${element.img}" alt=""></div>
            <div class="shop-item-title"><h4>${element.name}</h4><h4>${element.price}</h4></div>
            <p>${element.description}</p>
            </div>`
  );
});
// ======================= Shop Main Pivolada =======================
const shopPivoladaSection = document.querySelector(
  ".shop-category.pivolada-section"
);
SHOP_MAIN_PIVOLADA_LIST.forEach((element) => {
  shopPivoladaSection.insertAdjacentHTML(
    "beforeend",
    `
            <div class="shop-item">
            <div class="shop-item-img"><img src="${element.img}" alt=""></div>
            <div class="shop-item-title"><h4>${element.name}</h4><h4>${element.price}</h4></div>
            <p>${element.description}</p>
            </div>`
  );
});
// ======================= Shop Main Merch =======================
const shopMerchSection = document.querySelector(".shop-category.merch-section");
SHOP_MAIN_MERCH_LIST.forEach((element) => {
  shopMerchSection.insertAdjacentHTML(
    "beforeend",
    `
            <div class="shop-item">
            <div class="shop-item-img"><img src="${element.img}" alt=""></div>
            <div class="shop-item-title"><h4>${element.name}</h4><h4>${element.price}</h4></div>
            <p>${element.description}</p>
            </div>`
  );
});
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
// ======================= Back to top button =======================
backToTopButton();
// ======================= Footer menu list =========================
footerMenuListDisplay();
socNetIconsDisplay();
