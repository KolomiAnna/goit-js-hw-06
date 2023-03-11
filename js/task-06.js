const inputEl = document.querySelector(`#validation-input`);

inputEl.classList.add("validation-input");


const dataLengthAttribute = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", () => {
    const inputLength = inputEl.value.length;

    console.log(inputLength === dataLengthAttribute);
    if (inputLength === dataLengthAttribute) {
        inputEl.classList.add("valid");
    } else inputEl.classList.add("invalid");

});