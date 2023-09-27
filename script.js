const menuList = ["SHOP", "ABOUT", "ART", "NEWS", "CONTACT"];
const ulMenu = document.querySelector(".menu-list ul");
menuList.forEach((item) => {
  ulMenu.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
});
