const userName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output")

userName.addEventListener("input", handleInput);


function handleInput(event) {
    
    event.target.value.trim();

    if (event.target.value === "" || event.target.value.trim() === "") {
        spanName.textContent = "Anonymous";
    }
    else {
        spanName.textContent = event.target.value.trim();
    }
}