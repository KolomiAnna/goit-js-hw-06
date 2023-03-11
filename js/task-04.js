let counterValue = 0;

const decrementBtnEl = document.querySelector(`[data-action = "decrement"]`);
const incrementBtnEl = document.querySelector(`[data-action = "increment"]`);
const spanEl = document.querySelector(`#value`);



decrementBtnEl.addEventListener("click", () => {
    counterValue -= 1;
    spanEl.textContent = counterValue;
});

incrementBtnEl.addEventListener("click", () => {
    counterValue += 1;
    spanEl.textContent = counterValue;
});
