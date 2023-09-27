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
