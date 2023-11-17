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
    let email = document.querySelector(".email").value;
    let contraseña = document.querySelector(".contraseña").value;
    let confirmar = document.querySelector(".confirmar").value;

    if (nombre && email && contraseña && confirmar){
        if(contraseña == confirmar){
            console.log(nombre, email, contraseña, confirmar)
            let array = []
            datas = JSON.stringify({
                    nameuser: nombre,
                    email: email,
                    password: contraseña,
                    passwordverify: confirmar
                
            });
            array.push(datas);
            localStorage.setItem("usuarios", array)
        }
        else {
            alert ("La contraseña debe ser la misma.")
        }
}
    else {
        alert ("Recuerde que debe llenar todo el formulario...")
        }
}
