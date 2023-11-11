const navbarmenu = function (a = str, b = str, c = str) {
    const check = document.querySelector(a)
    const checked = document.querySelector(b)
    const dropmenu = document.querySelector(c)

    check.onclick = function () {
        dropmenu.classList.toggle('open')
    }
}

navbarmenu("#check", ".checked", ".test")

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