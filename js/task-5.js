function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorValueSpan = document.querySelector(".color");

changeColorButton.addEventListener("click", changeColor);
function changeColor(event) {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorValueSpan.textContent = newColor;
}
