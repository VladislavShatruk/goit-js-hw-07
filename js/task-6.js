function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDelete = document.querySelector("button[data-destroy]");
const inputNbr = document.querySelector('input[type="number"]')
btnCreate.addEventListener("click", handleCreate);
btnDelete.addEventListener("click", handleDelete);



function handleCreate() {

  boxes.innerHTML = "";
  const amount = inputNbr.value;
  createBoxes(amount);
  inputNbr.value = "";
}



function handleDelete() {

  boxes.innerHTML = "";
  inputNbr.value = "";
}



function createBoxes(amount) {
  const arr = [];

  if (amount <= 100 && amount >= 1) {

    for (let i = 0; i < amount; i++) {

      const size = 30 + i * 10;
      const newDiv = document.createElement("div");

      newDiv.style.margin = "5px";
      newDiv.style.width = `${size}px`;
      newDiv.style.height = `${size}px`;
      newDiv.style.backgroundColor = getRandomHexColor();
      arr.push(newDiv);
    }
    // const fragment =- document.createDocumentFragment();
    // arr.forEach((array) => {
    //   fragment.appendChild()
    // })

    document.createDocumentFragment(arr);
    boxes.append.arr
    console.log(boxes);

    // arr.map(element => boxes.append(element));
  }
  return;
}