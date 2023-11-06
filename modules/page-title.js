// ======================= Page title =======================
let title = document.querySelector("main h1").innerHTML;
export const pageTitleDisplay = () => {
  if (title.length > 12) {
    document.querySelector("main h1").innerHTML = "";
    document.querySelector("main h1").style.justifyContent="space-between";
    title.split(" ").forEach((word) => {
      document
        .querySelector("main h1")
        .insertAdjacentHTML("beforeend", `<span>${word}</span>`);
    });
  } else {
    document.querySelector("main h1").style.justifyContent="center";
  }
};
