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

const swiper = new Swiper(".swiper", {
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
        name:'Super nova',
        price: '230 RSD',
        description: 'IPA / abv 5.0% / ibu 26 / 0.33l',
        img:'../pics/SuperNova.png'
    },
    {
        name:'Lutka',
        price: '230 RSD',
        description: 'IPA / abv 4.7% / ibu 15 / 0.33l',
        img:'../pics/Lutka.png'
    },
    {
        name:'Plavo',
        price: '230 RSD',
        description: 'IPA / abv 6.2% / ibu 26 / 0.33l',
        img:'../pics/Plavo.png'
    },
    {
        name:'Porter',
        price: '235 RSD',
        description: 'IPA / abv 6.0% / ibu 30 / 0.33l',
        img:'../pics/Porter.png'
    }
];