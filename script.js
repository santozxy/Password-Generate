let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#value");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?@#$";

let newPassword = "";

sizePassword.innerHTML = sliderElement.value;
sliderElement.oninput = function () {
    sizePassword.innerHTML = this.value
}

function generatePass(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()*n));
    };
    containerPassword.classList.remove("hide")
    password.innerHTML = pass;
    newPassword = pass;
};


function copyPass(){
    alert("Senha copiada com sucesso");
    navigator.clipboard.writeText(newPassword);
}