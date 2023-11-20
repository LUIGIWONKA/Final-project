const navbarmenu = function (a = str, c = str) {
    const check = document.querySelector(a)
    const dropmenu = document.querySelector(c)

    check.onclick = function () {
        dropmenu.classList.toggle('open')
    }
}

navbarmenu("#check", ".test")

function Registrarse(){
    let nombre = document.querySelector(".nombre").value;
    let nickname = document.querySelector(".nickname").value;
    let email = document.querySelector(".email").value;
    let contraseña = document.querySelector(".contraseña").value;
    let confirmar = document.querySelector(".confirmar").value;

    if (nombre && email && contraseña && confirmar){
        if(contraseña == confirmar){
            document.querySelector("#message_error").innerText = ""
            let array = []
            datas = JSON.stringify({
                    nameuser: nombre,
                    nickname: nickname,
                    email: email,
                    password: contraseña,
                    passwordverify: confirmar
                
            });
            array.push(datas);
            localStorage.setItem("usuarios", array)
        }
        else {
            document.querySelector("#message_error").innerText = "La contraseña debe ser la misma."
        }
}
    else {
        document.querySelector("#message_error").innerText = "Recuerde que debe llenar todo el formulario..."
        }
}
