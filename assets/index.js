const checkbox =  document.getElementById("checkbox");
const body = document.querySelector("body");
checkbox.addEventListener("change" , darkMode)

function darkMode() {
    if (checkbox.checked == true) {
        body.classList.add("its-active")
    } else {
        body.classList.remove("its-active")
    }
}