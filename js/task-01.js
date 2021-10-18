const categoryRef = document.querySelectorAll(".item");
console.log(`В списке ${categoryRef.length} категорий`);

categoryRef.forEach((el) =>
  console.log(`Категория: ${el.firstElementChild.textContent}
Количество елементов: ${el.lastElementChild.children.length}
    `)
);
