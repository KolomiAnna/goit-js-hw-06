const spanColorEl = document.querySelector(`.color`);
const changeColorBtnEl = document.querySelector(`.change-color`);
const bodyEl = document.querySelector(`body`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtnEl.addEventListener("click", () => {
  const colorName = getRandomHexColor();
  bodyEl.style.backgroundColor = colorName;
  spanColorEl.textContent = colorName;
});