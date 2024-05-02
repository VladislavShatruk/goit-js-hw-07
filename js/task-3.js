const userName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output")

userName.addEventListener("input", handleInput);


function handleInput(event) {
    if (!(event.target.value == ' ' || event.target.value.length === 0)) {
        spanName.textContent = event.target.value;
    }
        else {
            spanName.textContent = "Anonymous";
        }
    console.log(event);
}
