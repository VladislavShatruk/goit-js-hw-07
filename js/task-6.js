function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


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
  
  const amount = inputNbr.value;
  destroyBoxes(amount);
  inputNbr.value = "";
}



function createBoxes(amount) {
  const arr = [];

  if (amount <= 100 && amount >= 1) {

    for (let i = 0; i < amount; i++) {
      const newDiv = document.createElement("div");
      const size = 30 + i * 10;
      newDiv.style.margin = "5px";
      newDiv.style.width = `${size}px`;
      newDiv.style.height = `${size}px`;
      newDiv.style.backgroundColor = getRandomHexColor();
      arr.push(newDiv);
    }

    arr.map(element => boxes.append(element));
  }
  return;
}



function destroyBoxes(amount) {
  boxes.innerHTML = "";
}