const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const listRef = document.querySelector("#ingredients");
const elements = [];
ingredients.forEach((element) => {
  const listItemRef = document.createElement("li");
  listItemRef.textContent = element;
  elements.push(listItemRef);
});

listRef.append(...elements);
