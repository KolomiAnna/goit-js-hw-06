
const itemsEl = document.querySelectorAll(".item");

const lengtItemsEl = itemsEl.length;

console.log(`Number of categories: ${lengtItemsEl}`);



const titleTextEl = document.querySelectorAll("h2");


titleTextEl.forEach((element) => {
    console.group(`Category: ${element.textContent}`);

    console.log(`Elements: ${element.nextElementSibling.children.length}`);
    console.groupEnd();
})
