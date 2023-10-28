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
    if (element.style && element.alcohol && element.color && element.volume) {
      section.insertAdjacentHTML(
        "beforeend",
        `
            <div class="shop-item">
            <div class="shop-item-img"><img src="${element.img}" alt=""></div>
            <div class="shop-item-title"><h4>${element.name}</h4><h4>${element.price} ${element.currency}</h4></div>
            <p>${element.style} / abv ${element.alcohol}% / ibu ${element.color} / ${element.volume}l</p>
            </div>`
      );
    } else {
      section.insertAdjacentHTML(
        "beforeend",
        `
              <div class="shop-item">
              <div class="shop-item-img"><img src="${element.img}" alt=""></div>
              <div class="shop-item-title"><h4>${element.name}</h4><h4>${element.price} ${element.currency}</h4></div>
              <p>${element.description}</p>
              </div>`
      );
    }
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
  document.querySelector('.show-filters').style.display = 'block';
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
// ======================= sort by function (ex high to low price) =======================
const onclickSortBy = (div, property) => {
  div.addEventListener("click", () => {
    document
      .querySelectorAll(".sort-by div")
      .forEach((div) => (div.style.color = "#000000b2"));
    div.style.color = "#000";
    SHOP_MAIN_BEERS_LIST.sort(function (a, b) {
      return a[property] - b[property];
    });
    categoryDisplay(shopBeersSection, SHOP_MAIN_BEERS_LIST);
  });
};
// ======================= popularity =======================
const popularityDiv = document.querySelector(".popularity");
onclickSortBy(popularityDiv, "popularity");
// ======================= average rating =======================
const averageRatingDiv = document.querySelector(".average-rating");
onclickSortBy(averageRatingDiv, "averageRating");
// ======================= newness =======================
const newnessDiv = document.querySelector(".newness");
onclickSortBy(newnessDiv, "added");
// ======================= low to high price =======================
const lowToHighPriceDiv = document.querySelector(".low-to-high-price");
onclickSortBy(lowToHighPriceDiv, "price");
// ======================= high to low price =======================
const highToLowPriceDiv = document.querySelector(".high-to-low-price");
highToLowPriceDiv.addEventListener("click", () => {
  document
    .querySelectorAll(".sort-by div")
    .forEach((div) => (div.style.color = "#000000b2"));
  highToLowPriceDiv.style.color = "#000";
  SHOP_MAIN_BEERS_LIST.sort(function (a, b) {
    return b.price - a.price;
  });
  categoryDisplay(shopBeersSection, SHOP_MAIN_BEERS_LIST);
});
// ======================= Filters - style - template =======================
const filtersStyleSection = document.querySelector(".style");
STYLE.forEach((element) => {
  const id = element.replace(/\//g, "-").toLowerCase();
  filtersStyleSection.insertAdjacentHTML(
    "beforeend",
    `
      <div>
      <input type="checkbox" id="${id}" name="${id}"/>
      <label for="${id}">${element}</label>
    </div>`
  );
});
// ======================= Filters - function =======================
const styleInputsList = document.querySelectorAll(".beers-filter input");
Array(...styleInputsList).forEach((input) => {
  input.addEventListener("change", () => {
    shopBeersSection.innerHTML = "";
    let filters = { style: [], alcohol: [], color: [] };
    const checkedStyle = document.querySelectorAll(".style input:checked");
    Array(...checkedStyle).forEach((inputChecked) => {
      const inputName = inputChecked.name.replace(/\-/g, "/");
      filters.style.push(inputName);
    });
    const checkedAlcohol = document.querySelectorAll(".alcohol input:checked");
    Array(...checkedAlcohol).forEach((inputChecked) => {
      filters.alcohol.push(inputChecked.name);
    });
    const checkedColor = document.querySelectorAll(".color input:checked");
    Array(...checkedColor).forEach((inputChecked) => {
      filters.color.push(inputChecked.name);
    });
    const filteredArr = SHOP_MAIN_BEERS_LIST.filter((element) => {
      const productStyleName = element.style.toLowerCase();
      if (filters.style.length === 0) {
        filters.style = STYLE.map((element) => element.toLowerCase());
      }
      if (filters.alcohol.length === 0) {
        filters.alcohol = ["zero-five", "five-seven", "over-seven"];
      }
      if (filters.color.length === 0) {
        filters.color = [
          "to-fifteen-ebc",
          "fifteen-fourty-ebc",
          "over-fourty-ebc",
        ];
      }
      return (
        filters.style.includes(productStyleName) &&
        filters.alcohol.includes(element.alcoholFilter) &&
        filters.color.includes(element.colorFilter)
      );
    });
    if (filteredArr.length === 0) {
      shopBeersSection.innerHTML = "no such beer";
    } else {
      categoryDisplay(shopBeersSection, filteredArr);
    }
  });
});
// ======================= Clear filters button =====================
document.querySelector(".clear-button").addEventListener("click", () => {
  Array(...styleInputsList).forEach((input) => {
    input.checked = false;
  });
});
// ======================= Show filters button ======================
document.querySelector(".show-filters").addEventListener("click", () => {
  document.querySelector(".filters-section").style.display = 'block';
});
// ======================= Back to top button =======================
backToTopButton();
// ======================= Footer menu list =========================
footerMenuListDisplay();
socNetIconsDisplay();
