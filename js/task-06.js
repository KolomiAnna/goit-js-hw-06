const inputEl = document.querySelector(`#validation-input`);

const dataLengthAttribute = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", () => {
const inputLength = inputEl.value.length;
inputEl.style.outline = "2px solid #bdbdbd";


console.log(inputLength === dataLengthAttribute);
    if(inputLength === dataLengthAttribute){
        inputEl.style.outline = "2px solid #4caf50"
    } else inputEl.style.outline = "2px solid #f44336";

});