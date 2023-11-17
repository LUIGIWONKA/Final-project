const navbarmenu = function (a = str, c = str) {
    const check = document.querySelector(a)
    const dropmenu = document.querySelector(c)

    check.onclick = function () {
        dropmenu.classList.toggle('open')
    }
}

navbarmenu("#check", ".test")

const photo_emergent = function(a){
    document.querySelector(a).addEventListener("click", function () {
        onclick = window.float_window.showModal();
    })
}

const close_photo_emergent = function(a){
    document.querySelector(a).addEventListener("click", function () {
        onclick = window.float_window.close();
    })
}

photo_emergent(".button");
close_photo_emergent(".close_button")

function plan() {
    alert("Se realizara su proceso...")
}

let usuarios = JSON.parse(localStorage.getItem("usuarios"));
let userlogged = localStorage.getItem("userlogged");

console.log(userlogged)
console.log(userlogged == 1)

if(userlogged === "1") {
    const log = document.querySelector(".login_header");
    const sig = document.querySelector(".signup_header");
    if(log.style.display === "none" && sig.style.display === "none") {
        log.style.display = "static";
        sig.style.display = "static";
    }
    else{
        log.style.display = "none";
        sig.style.display = "none";
    }

}