const userName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output")

userName.addEventListener("input", handleInput);


function handleInput(event) {

    if (event.target.value.indexOf(" ")) {
        spanName.textContent = event.target.value.trim();
    }
    else {
        spanName.textContent = "Anonymous";
    }
}
