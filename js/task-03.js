const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];

  const listItemEl = document.querySelector(".gallery");

  const makeGalleryCard = ({url, alt}) =>
    `<li> <img src = ${url} alt = ${alt} width = 200px></li>`;

console.log(makeGalleryCard);

const markup = images.map((el) => makeGalleryCard(el)).join("");

console.log(markup);

listItemEl.insertAdjacentHTML("beforeend", markup);

listItemEl.style.display = "flex";
listItemEl.style.flexDirection= "column";
listItemEl.style.gap = "25px";
// listItemEl.listStyle = "none";