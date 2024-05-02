const categories = document.querySelector("#categories");
const liEl = document.querySelectorAll("li.item")

console.log(`Number of categories: ${categories.children.length}`);

liEl.forEach(category => {
  console.log(`Category: ${category.children[0].textContent}`);
  console.log(`Elements: ${category.children[1].children.length}`);
});