const menuList = ["SHOP", "ABOUT", "ART", "NEWS", "CONTACT"];
const ulMenu = document.querySelector(".menu-list ul");
menuList.forEach((item) => {
  ulMenu.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
});

let title = document.querySelector("main h1").innerHTML;
if (title.length > 12) {
  document.querySelector("main h1").innerHTML = "";
  title.split(" ").forEach((word) => {
    document
      .querySelector("main h1")
      .insertAdjacentHTML("beforeend", `<span>${word}</span>`);
  });
}

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

const bestsellersSlider = [
  {
    name: "Super nova",
    price: "230 RSD",
    description: "IPA / abv 5.0% / ibu 26 / 0.33l",
    img: "../Kbinet-Brewery/pics/SuperNova.png",
  },
  {
    name: "Lutka",
    price: "230 RSD",
    description: "IPA / abv 4.7% / ibu 15 / 0.33l",
    img: "../Kbinet-Brewery/pics/Lutka.png",
  },
  {
    name: "Plavo",
    price: "230 RSD",
    description: "IPA / abv 6.2% / ibu 26 / 0.33l",
    img: "../Kbinet-Brewery/pics/Plavo.png",
  },
  {
    name: "Porter",
    price: "235 RSD",
    description: "IPA / abv 6.0% / ibu 30 / 0.33l",
    img: "../Kbinet-Brewery/pics/Porter.png",
  },
  {
    name: "Plavo",
    price: "230 RSD",
    description: "IPA / abv 6.2% / ibu 26 / 0.33l",
    img: "../Kbinet-Brewery/pics/Plavo.png",
  },
  {
    name: "Porter",
    price: "235 RSD",
    description: "IPA / abv 6.0% / ibu 30 / 0.33l",
    img: "../Kbinet-Brewery/pics/Porter.png",
  },
];
const bestsellersSwiperWrapper = document.querySelector(
  ".bestsellers-products .swiper-wrapper"
);
bestsellersSlider.forEach((element) => {
  bestsellersSwiperWrapper.insertAdjacentHTML(
    "beforeend",
    `<div class="swiper-slide">
        <div class="swiper-slide-item"><div class="swiper-slide-item-img"><img src="${element.img}" alt=""></div><div class="swiper-slide-item-title"><h4>${element.name}</h4><h4>${element.price}</h4></div><p>${element.description}</p></div>
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

const kabinetProductsBeersSlider = [
  {
    name: "Disko",
    price: "255 RSD",
    description: "IPA / abv 5.6% / ibu 40 / 0.33l",
    img: "../Kbinet-Brewery/pics/Disko.png",
  },
  {
    name: "Konfuzije",
    price: "260 RSD",
    description: "lager / abv 6.3% / ibu 60 / 0.33l",
    img: "../Kbinet-Brewery/pics/Konfuzije.png",
  },
  {
    name: "Trag",
    price: "230 RSD",
    description: "Ale / abv 4.7 %% / ibu 15 / 0.33l",
    img: "../Kbinet-Brewery/pics/Trag.png",
  },
  {
    name: "Shop now",
    img: "../Kbinet-Brewery/pics/shop-now.png",
  },
];
const kabinetProductsBeersSwiperWrapper = document.querySelector(
  ".swiper-kabinet-products-beers .swiper-wrapper"
);
kabinetProductsBeersSlider.forEach((element) => {
  if (element.name && element.price && element.description && element.img) {
    kabinetProductsBeersSwiperWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide">
          <div class="swiper-slide-item"><div class="swiper-slide-item-img"><img src="${element.img}" alt=""></div><div class="swiper-slide-item-title"><h4>${element.name}</h4><h4>${element.price}</h4></div><p>${element.description}</p></div>
          </div>`
    );
  }
  if (element.name && !element.price && !element.description && element.img) {
    kabinetProductsBeersSwiperWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide">
        <div class="swiper-slide-item-shop-now"><div class="swiper-slide-item-shop-now-img"><img src="${element.img}" alt=""></div><span class="shop-now">${element.name}</span></div>
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

const kabinetProductsMerchSlider = [
  {
    name: "Kabinet",
    price: "1200 RSD",
    description: "T-shirt",
    img: "../Kbinet-Brewery/pics/kabinet-t-short.png",
  },
  {
    name: "BrrKaaa",
    price: "350 RSD",
    description: "Tote bag",
    img: "../Kbinet-Brewery/pics/BrrKaaa-bag.png",
  },
  {
    name: "Lutka",
    price: "350 RSD",
    description: "Tote bag",
    img: "../Kbinet-Brewery/pics/Lutka-bag.png",
  },
  {
    name: "Shop now",
    img: "../Kbinet-Brewery/pics/shop-now.png",
  },
];
const kabinetProductsMerchSwiperWrapper = document.querySelector(
  ".swiper-kabinet-products-merch .swiper-wrapper"
);
kabinetProductsMerchSlider.forEach((element) => {
  if (element.name && element.price && element.description && element.img) {
    kabinetProductsMerchSwiperWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide">
            <div class="swiper-slide-item"><div class="swiper-slide-item-img"><img src="${element.img}" alt=""></div><div class="swiper-slide-item-title"><h4>${element.name}</h4><h4>${element.price}</h4></div><p>${element.description}</p></div>
            </div>`
    );
  }
  if (element.name && !element.price && !element.description && element.img) {
    kabinetProductsMerchSwiperWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide">
          <div class="swiper-slide-item-shop-now"><div class="swiper-slide-item-shop-now-img"><img src="${element.img}" alt=""></div><span class="shop-now">${element.name}</span></div>
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

const kabinetProductsPivoladaSlider = [
  {
    name: "BrrKaaa",
    price: "350 RSD",
    description: "Citrus / 0.25l",
    img: "../Kbinet-Brewery/pics/BrrKaaa-pivolada.png",
  },
  {
    name: "Plavo",
    price: "350 RSD",
    description: "Floral / 0.25l",
    img: "../Kbinet-Brewery/pics/Plavo-pivolada.png",
  },
  {
    name: "Porter",
    price: "350 RSD",
    description: "Chocolate / 0.25l",
    img: "../Kbinet-Brewery/pics/Porter-pivolada.png",
  },
  {
    name: "Shop now",
    img: "../Kbinet-Brewery/pics/shop-now.png",
  },
];
const kabinetProductsPivoladaSwiperWrapper = document.querySelector(
  ".swiper-kabinet-products-pivolada .swiper-wrapper"
);
kabinetProductsPivoladaSlider.forEach((element) => {
  if (element.name && element.price && element.description && element.img) {
    kabinetProductsPivoladaSwiperWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide">
              <div class="swiper-slide-item"><div class="swiper-slide-item-img"><img src="${element.img}" alt=""></div><div class="swiper-slide-item-title"><h4>${element.name}</h4><h4>${element.price}</h4></div><p>${element.description}</p></div>
              </div>`
    );
  }
  if (element.name && !element.price && !element.description && element.img) {
    kabinetProductsPivoladaSwiperWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide">
            <div class="swiper-slide-item-shop-now"><div class="swiper-slide-item-shop-now-img"><img src="${element.img}" alt=""></div><span class="shop-now">${element.name}</span></div>
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
