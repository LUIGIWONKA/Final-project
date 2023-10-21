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
