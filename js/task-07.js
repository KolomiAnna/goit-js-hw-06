const inputEl = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`);

const inputMinSize = Number(inputEl.getAttribute("min"));
const inputMaxSize = Number(inputEl.getAttribute("max"));
console.log(inputMinSize, inputMaxSize);

inputEl.addEventListener("input", handleImputChange);

function handleImputChange (event) {
    textEl.style.fontSize = event.currentTarget.value + "px";
}
