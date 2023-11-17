const navbarmenu = function (a = str, c = str) {
    const check = document.querySelector(a)
    const dropmenu = document.querySelector(c)

    check.onclick = function () {
        dropmenu.classList.toggle('open')
    }
}

navbarmenu("#check", ".test")



let usuarios = JSON.parse(localStorage.getItem("usuarios"));



function ValidateLoginUser(dato) {
    localStorage.setItem("userlogged", dato)
}

function Login() {
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));
    let email = document.querySelector(".email").value;
    let contraseña = document.querySelector(".contraseña").value;
    if (email && contraseña) {
        if (email == usuarios.email) {
            if (contraseña == usuarios.password) {
                ValidateLoginUser("1")
                document.querySelector("#message_error").innerText = ""
                const button_submit = document.querySelector(".button-login");
                button_submit.addEventListener("click", function () {
                    let dato = localStorage.getItem("userlogged");
                    if (dato === "1") { // Comprueba que dato sea una cadena "1"
                        window.location.href = 'file:///C:/Users/Estiven/Documents/Final%20project/index.html'; // Cambia esta URL por la dirección a la que quieras redirigir
                    }
                });

            }
            else {
                document.querySelector("#message_error").innerText = "Contraseña incorrecta"
            }
        }
        else {
            document.querySelector("#message_error").innerText = "Usuario no encontrado."
        }
    }
    else {
        document.querySelector("#message_error").innerText = "Recuerde que debe llenar todo el formulario..."
    }
}
