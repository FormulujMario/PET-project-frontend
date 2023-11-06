import { SOC_NET_ICONS, FOOTER_MENU_LIST } from "../constants.js";
// ======================= Back to top button =======================
export const backToTopButton = () => {
  document.querySelector(".back-to-top button").onclick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
};
// ======================= Footer menu list =========================
const footerMenuWrapper = document.querySelector(".list-menu-footer");
export const footerMenuListDisplay = () => {
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
};
// ======================= Social Newtworks Icons ===================
const soclNetIconsWrapper = document.querySelector(".soc-net-icons");
export const socNetIconsDisplay = () => {
  SOC_NET_ICONS.forEach((icon) => {
    soclNetIconsWrapper.insertAdjacentHTML("beforeend", `${icon.svg}`);
  });
};
