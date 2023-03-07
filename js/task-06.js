const inputEl = document.querySelector(`#validation-input`);

const dataLengthAttribute = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", () => {
const inputLength = inputEl.value.length;
inputEl.style.borderColor = "#bdbdbd";

outline

console.log(inputLength === dataLengthAttribute);
    if(inputLength === dataLengthAttribute){
        inputEl.style.borderColor = "#4caf50";
    } else inputEl.style.borderColor = "#f44336";

});