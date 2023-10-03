import {
  MENU_LIST,
  BESTSELLERS_LIST,
  KABINET_PRODUCTS_BEERS_LIST,
  KABINET_PRODUCTS_MERCH_LIST,
  KABINET_PRODUCTS_PIVOLADA_LIST,
  NEWS_LIST,
  FOOTER_MENU_LIST,
} from "../Kabinet-Brewery/modules/costants.js";
// ======================= Menu header =======================
const ulMenu = document.querySelector(".menu-list ul");
MENU_LIST.forEach((item) => {
  ulMenu.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
});
// ======================= Page title =======================
let title = document.querySelector("main h1").innerHTML;
if (title.length > 12) {
  document.querySelector("main h1").innerHTML = "";
  title.split(" ").forEach((word) => {
    document
      .querySelector("main h1")
      .insertAdjacentHTML("beforeend", `<span>${word}</span>`);
  });
}
// ======================= Main page top slider =======================
const swiperMainPage = new Swiper(".swiper-main-page", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// ======================= Bestsellers slider =======================
const bestsellersSwiperWrapper = document.querySelector(
  ".bestsellers-products .swiper-wrapper"
);
BESTSELLERS_LIST.forEach((element) => {
  bestsellersSwiperWrapper.insertAdjacentHTML(
    "beforeend",
    `<div class="swiper-slide">
        <div class="swiper-slide-item">
        <div class="swiper-slide-item-img"><img src="${element.img}" alt=""></div>
        <div class="swiper-slide-item-title"><h4>${element.name}</h4><h4>${element.price}</h4></div>
        <p>${element.description}</p>
        </div>
        </div>`
  );
});
const swiperBestsellers = new Swiper(".swiper-bestsellers", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// ======================= Kabinet products Beers slider =======================
const kabinetProductsBeersSwiperWrapper = document.querySelector(
  ".swiper-kabinet-products-beers .swiper-wrapper"
);
KABINET_PRODUCTS_BEERS_LIST.forEach((element) => {
  if (element.name && element.price && element.description && element.img) {
    kabinetProductsBeersSwiperWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide">
          <div class="swiper-slide-item">
          <div class="swiper-slide-item-img"><img src="${element.img}" alt=""></div>
          <div class="swiper-slide-item-title"><h4>${element.name}</h4><h4>${element.price}</h4></div>
          <p>${element.description}</p>
          </div>
          </div>`
    );
  }
  if (element.name && !element.price && !element.description && element.img) {
    kabinetProductsBeersSwiperWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide">
        <div class="swiper-slide-item-shop-now">
        <div class="swiper-slide-item-shop-now-img"><img src="${element.img}" alt=""></div>
        <span class="shop-now">${element.name}</span>
        </div>
        </div>`
    );
  }
});
const kabinetProductsBeers = new Swiper(".swiper-kabinet-products-beers", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// ======================= Kabinet products Merch slider =======================
const kabinetProductsMerchSwiperWrapper = document.querySelector(
  ".swiper-kabinet-products-merch .swiper-wrapper"
);
KABINET_PRODUCTS_MERCH_LIST.forEach((element) => {
  if (element.name && element.price && element.description && element.img) {
    kabinetProductsMerchSwiperWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide">
            <div class="swiper-slide-item">
            <div class="swiper-slide-item-img"><img src="${element.img}" alt=""></div>
            <div class="swiper-slide-item-title"><h4>${element.name}</h4><h4>${element.price}</h4></div>
            <p>${element.description}</p>
            </div>
            </div>`
    );
  }
  if (element.name && !element.price && !element.description && element.img) {
    kabinetProductsMerchSwiperWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide">
          <div class="swiper-slide-item-shop-now">
          <div class="swiper-slide-item-shop-now-img"><img src="${element.img}" alt=""></div>
          <span class="shop-now">${element.name}</span>
          </div>
          </div>`
    );
  }
});
const kabinetProductsMerch = new Swiper(".swiper-kabinet-products-merch", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// ======================= Kabinet products Pivolada slider =======================
const kabinetProductsPivoladaSwiperWrapper = document.querySelector(
  ".swiper-kabinet-products-pivolada .swiper-wrapper"
);
KABINET_PRODUCTS_PIVOLADA_LIST.forEach((element) => {
  if (element.name && element.price && element.description && element.img) {
    kabinetProductsPivoladaSwiperWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide">
              <div class="swiper-slide-item">
              <div class="swiper-slide-item-img"><img src="${element.img}" alt=""></div>
              <div class="swiper-slide-item-title"><h4>${element.name}</h4><h4>${element.price}</h4></div>
              <p>${element.description}</p>
              </div>
              </div>`
    );
  }
  if (element.name && !element.price && !element.description && element.img) {
    kabinetProductsPivoladaSwiperWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide">
            <div class="swiper-slide-item-shop-now">
            <div class="swiper-slide-item-shop-now-img"><img src="${element.img}" alt=""></div>
            <span class="shop-now">${element.name}</span>
            </div>
            </div>`
    );
  }
});
const kabinetProductsPivolada = new Swiper(
  ".swiper-kabinet-products-pivolada",
  {
    direction: "horizontal",
    loop: false,
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }
);
// ======================= Kabinet products Tab buttons =======================
const beersTabButton = document.querySelector(".beers-tab");
const merchTabButton = document.querySelector(".merch-tab");
const pivoladaTabButton = document.querySelector(".pivolada-tab");

const beersSwiper = document.querySelector(".swiper-kabinet-products-beers");
const merchSwiper = document.querySelector(".swiper-kabinet-products-merch");
const pivoladaSwiper = document.querySelector(
  ".swiper-kabinet-products-pivolada"
);

beersTabButton.onclick = () => {
  beersTabButton.classList.remove("active", "disabled");
  beersTabButton.classList.add("active");
  merchTabButton.classList.remove("active", "disabled");
  merchTabButton.classList.add("disabled");
  pivoladaTabButton.classList.remove("active", "disabled");
  pivoladaTabButton.classList.add("disabled");

  beersSwiper.classList.remove("visible", "hidden");
  beersSwiper.classList.add("visible");
  merchSwiper.classList.remove("visible", "hidden");
  merchSwiper.classList.add("hidden");
  pivoladaSwiper.classList.remove("visible", "hidden");
  pivoladaSwiper.classList.add("hidden");
};
merchTabButton.onclick = () => {
  merchTabButton.classList.remove("active", "disabled");
  merchTabButton.classList.add("active");
  beersTabButton.classList.remove("active", "disabled");
  beersTabButton.classList.add("disabled");
  pivoladaTabButton.classList.remove("active", "disabled");
  pivoladaTabButton.classList.add("disabled");

  merchSwiper.classList.remove("visible", "hidden");
  merchSwiper.classList.add("visible");
  beersSwiper.classList.remove("visible", "hidden");
  beersSwiper.classList.add("hidden");
  pivoladaSwiper.classList.remove("visible", "hidden");
  pivoladaSwiper.classList.add("hidden");
};
pivoladaTabButton.onclick = () => {
  pivoladaTabButton.classList.remove("active", "disabled");
  pivoladaTabButton.classList.add("active");
  beersTabButton.classList.remove("active", "disabled");
  beersTabButton.classList.add("disabled");
  merchTabButton.classList.remove("active", "disabled");
  merchTabButton.classList.add("disabled");

  pivoladaSwiper.classList.remove("visible", "hidden");
  pivoladaSwiper.classList.add("visible");
  beersSwiper.classList.remove("visible", "hidden");
  beersSwiper.classList.add("hidden");
  merchSwiper.classList.remove("visible", "hidden");
  merchSwiper.classList.add("hidden");
};
// ======================= News slider =======================
const newsSwiperWrapper = document.querySelector(
  ".swiper-latest-news .swiper-wrapper"
);
NEWS_LIST.forEach((element, i) => {
  if (i === 0 || i === 2) {
    newsSwiperWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide side-slide">
        <div class="swiper-slide-item">
        <div class="swiper-slide-item-img"><img src="${element.imgSmall}" alt=""></div>
        <div class="swiper-slide-item-title"><p>${element.date}</p></div>
        <h4>${element.title}</h4>
        </div>
        </div>`
    );
  }
  if (i === 1) {
    newsSwiperWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide central-slide">
        <div class="swiper-slide-item">
        <div class="swiper-slide-item-img"><img src="${element.imgBig}" alt=""></div>
        <div class="swiper-slide-item-title"><p>${element.date}</p></div>
        <h4>${element.title}</h4>
        </div>
        </div>`
    );
  }
});
const swiperNews = new Swiper(".swiper-latest-news", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
});
// ======================= Back to top button =======================
document.querySelector(".back-to-top button").onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
// ======================= Footer menu list =======================
const footerMenuWrapper = document.querySelector(".list-menu-footer");
FOOTER_MENU_LIST.forEach((element, i) => {
  let ul = document.createElement("ul");
  footerMenuWrapper.insertAdjacentHTML(
    "beforeend",
    `<div class="column-${i + 1}">
    <span>${element.name}</span>
      </div>`
  );
  element.list.forEach((subelement) => {
    ul.insertAdjacentHTML("beforeend", `<li>${subelement}</li>`);
  });
  let divAppend = document.querySelector(`.column-${i + 1}`);
  divAppend.appendChild(ul);
});
