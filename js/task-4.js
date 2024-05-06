const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const elements = event.target.elements;

    if (elements.email.value.trim() === "" || elements.password.value.trim() === "") {
        alert("All form fields must be filled in")
        return;
    }

    const info = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim(),
    }
    
    console.log(info);
    form.reset()
}
