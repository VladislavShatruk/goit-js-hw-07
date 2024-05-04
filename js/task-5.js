function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector(".widget")
const changeColorBtn = document.querySelector(".change-color")
const colorIs = document.querySelector(".color")

changeColorBtn.addEventListener("click", handleChange)

function handleChange() {
  
  container.style.backgroundColor = getRandomHexColor();
  colorIs.textContent = getRandomHexColor()

}