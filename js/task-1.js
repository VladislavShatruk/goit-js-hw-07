const categories = document.querySelector("#categories");
const liEl = (categories.children);
// const newEl = liEl.map((category) => {
    // console.log(`value ${category}`)
// })

console.log(`Number of categories: ${categories.children.length}`);
// console.log(liEl);

// categories.forEach(arr => {
//   console.log(`category: ${category} index: ${index} arr: ${arr}`);
// });



function getel(liEl) {
    
// liEl.map(arr => {
//     console.log(`1arr: ${arr}`);
//   });
//   return arr;

const newArr = [];

for (const array of arguments) {
  newArr.push(array);
}
return newArr;

}
console.log(getel());



// const numbers = [5, 10, 15, 20, 25];

// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });