const name = document.getElementById("name");
const email = document.getElementById("email");

const button = document.getElementById("register-button");
const success = document.getElementById("success");

button.addEventListener("click", () => {
    const password = document.getElementById("Password");
    const confirmPassword = document.getElementById("Confirm");
    if(password.value === confirmPassword.value){
        success.style.color = "black";
    }
})