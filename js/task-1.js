const categories = document.querySelector("#categories");
const liEl = document.querySelectorAll(".item");
const newEl = liEl.map((category) => {
    // console.log(`value ${category}`)
})

console.log(`Number of categories: ${categories.children.length}`);
console.log(newEl);

// newEl.forEach(category, index => {
//   console.log(`Index ${index}, value ${category}`);
// });

// function getel() {
    
// }




// const numbers = [5, 10, 15, 20, 25];

// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });