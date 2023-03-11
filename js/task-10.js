function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



//        НЕ    ПЕРЕВІРЯТИ       =)




// const inputEl = document.querySelector("#controls > input");
// const createBtnEl = document.querySelector(`[data-create]`);

// const boxesEl = document.querySelector("#boxes");
// boxesEl.style.display = "flex";
// boxesEl.style.gap = "10px";

// const inputNumberEl = Number(inputEl.value);

// const creatBoxes = (amount) => {
//   let boxArray = [];

//   for (let i = 0; i <= amount; i += 1){
//     boxArray += i;
//     console.log(boxArray);
//   }

  // const boxxx = boxxx.createElement("div");
  // boxesEl.append(twoBoxx);
  // boxxx.style.width = "30px";
  // boxxx.style.height = "30px";
  // boxxx.style.backgroundColor = "red";

// }
// creatBoxes(6);

// createBtnEl.addEventListener("click", creatBoxes);





