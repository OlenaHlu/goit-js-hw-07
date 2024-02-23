const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("blur", handleInput)

function handleInput(event) {
    const userName = event.currentTarget.value.trim();

    nameOutput.textContent = userName || `Anonymous`;
}

