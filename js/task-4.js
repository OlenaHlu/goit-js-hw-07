
const form = document.querySelector(".login-form");


form.addEventListener("submit", sendForm);
function sendForm(event) {
    event.preventDefault();
    
    const emailInput = event.currentTarget.elements.email.value.trim();
    const passwordInput = event.currentTarget.elements.password.value.trim();

    if (emailInput === "" || passwordInput === "") {
        alert("All form fields must be filled in");
    } else {
        const formData = {
            email: emailInput,
            password: passwordInput
        };
        console.log(formData);
    form.reset();
    }
}

