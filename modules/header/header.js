import { MENU_LIST } from "../constants.js";
const logoImg = document.querySelector(".logo img");
export const logoImgDisplay = () => {
  if (document.URL.includes("index")) {
    logoImg.src = "./pics/logo.png";
  } else {
    logoImg.src = "../pics/logo.png";
  }
};
const ulMenu = document.querySelector(".menu-list ul");
export const menuListDisplay = () => {
  MENU_LIST.forEach((item) => {
    ulMenu.insertAdjacentHTML("beforeend", `<li><a href=${item.link}>${item.name}</a></li>`);
  });
};
