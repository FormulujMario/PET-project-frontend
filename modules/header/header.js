import { MENU_LIST } from "../costants.js";
const ulMenu = document.querySelector(".menu-list ul");
export const menuListDisplay = () => {
  MENU_LIST.forEach((item) => {
    ulMenu.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
  });
};
