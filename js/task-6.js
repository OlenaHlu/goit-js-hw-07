function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", reviewBoxes);
function reviewBoxes() {
  input.focus();
  if (input.value > 0 && input.value <= 100) {
    createBoxes(input.value);
    input.value = '';
  } else {
    alert("Please enter a number between 1 and 100!")
  }
};

let boxsize;
let newDiv;

btnDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  input.value = '';
  boxes.innerHTML = "";
}

function createBoxes(amount) {
  boxes.innerHTML = "";
  boxsize = 30;
  for (let i = 1; i <= amount; i += 1) {
    newDiv = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
    boxes.insertAdjacentHTML("beforeend", newDiv);
    boxsize += 10;
  }
}




