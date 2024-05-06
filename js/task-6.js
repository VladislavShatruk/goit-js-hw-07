function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const controls = document.querySelector("#controls");
// const boxes = document.querySelector("#boxes");
// const inputNbr = document.querySelector('input[type="number"]');
// // const actions = document.querySelectorAll("#controls button")

// // actions[0].dataset.create = "create";
// // actions[1].dataset.destroy= "destroy";

// const btnCreate = document.querySelector("button[data-create]");
// const btnDelete = document.querySelector("button[data-destroy]");

// // console.log(inputNbr);
// inputNbr.addEventListener("input", createBoxes);
// btnCreate.addEventListener("click", handleCreate);
// btnDelete.addEventListener("click", handleDelete);

// function createBoxes(amount) {
//   const arr = [];

//   for (let i = 0; i < amount; i++) {
//     const newDiv = document.createElement("div");
//     const size = 30 + i * 10;
//     newDiv.style.marginBottom = "8px";
//     newDiv.style.width = `${size}px`;
//     newDiv.style.height = `${size}px`;
//     newDiv.style.backgroundColor = getRandomHexColor();

//     arr.push(newDiv);
//   }
//   boxes.append(arr);
//   console.log(boxes.children);
// }

// let step = 0;

// function handleCreate() {
//   if (condition) {
    
//   }
//   const sizeBox = 30;
//   const newEl = document.createElement("div");
//   newEl.style.width = `${sizeBox+step}px`;
//   newEl.style.height= `${sizeBox+step}px`;
//   newEl.style.backgroundColor = getRandomHexColor();
//   // boxes.append(newEl);
//   step += 10;
// }

const divContainer = document.querySelector("#boxes");
const inputNbr = document.querySelector('input[type="number"]')


inputNbr.addEventListener("input", handleInput)


function handleInput(event) {
  const numberBoxes = event.target.value;
  // return numberBoxes;
  
for (let i = 0; i <= numberBoxes; i++) {
  const div = document.createElement("div");
  div.classList.add("div-number");

  divContainer.appendChild(div);
}
}

console.log(divContainer);






// function handleDelete() {
//   boxes.innerHTML = "";
// }