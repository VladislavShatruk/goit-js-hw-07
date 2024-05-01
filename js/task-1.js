const categories = document.querySelector("#categories");
const liEl = (categories.children);
// const newEl = liEl.map((category) => {
    // console.log(`value ${category}`)
// })

console.log(`Number of categories: ${categories.children.length}`);
console.log(liEl);

// categories.forEach(arr => {
//   console.log(`category: ${category} index: ${index} arr: ${arr}`);
// });



function getel() {
    
liEl.map(arr => {
    console.log(`1arr: ${arr}`);
  });
  return arr;
}
console.log(getel(1));



// const numbers = [5, 10, 15, 20, 25];

// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });