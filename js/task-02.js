const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

  const setListItemEl = ingredients.map(element => {

        const listItemEl = document.createElement("li");
        listItemEl.classList.add("item");
        listItemEl.textContent = element;

        return listItemEl;
    });

    const listItemEl = document.querySelector("#ingredients");
    listItemEl.append(...setListItemEl);

 console.log(listItemEl);
  
