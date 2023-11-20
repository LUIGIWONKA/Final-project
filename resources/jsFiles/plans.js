const navbarmenu = function (a = str, c = str) {
    const check = document.querySelector(a)
    const dropmenu = document.querySelector(c)

    check.onclick = function () {
        dropmenu.classList.toggle('open')
    }
}

navbarmenu("#check", ".test")

let usuarios = JSON.parse(localStorage.getItem("usuarios"));
let userlogged = localStorage.getItem("userlogged");

function plan() {
    if(userlogged === "1"){
        alert("Se le realizara su proceso, porfavor espere...")
    }
    else{
        window.location.href = "./login.html"
    }
}

function Log_out (dato) {
    if(dato){
        localStorage.setItem("userlogged", "1")
    }
    else{
        localStorage.setItem("userlogged", "false")
        window.location.href = '../../index.html';
    }
}

if(userlogged === "1") {
    const log = document.querySelector(".login_header");
    const sig = document.querySelector(".signup_header");
    const log1 = document.querySelector(".login_mobile");
    const sig2 = document.querySelector(".signup_mobile");
    const account = document.querySelector(".account");
    const account_mobile = document.querySelector(".account_mobile")
    const log_out = document.querySelector(".log_out")
    const log_out2 = document.querySelector(".log_out_mobile")
    const userimg = document.querySelector("#user_img");
    const userimg2 = document.querySelector("#user_img_mobile");

    if(log.style.display === "static" && sig.style.display === "static" && log1.style.display === "static" && sig2.style.display === "static" && account.style.display === "none" && account_mobile.style.display === "none" && log_out.style.display === "none" && log_out2.style.display === "none" && userimg.style.display === "none" && userimg2.style.display === "none") {
    }
    else{
        log.style.display = "none";
        sig.style.display = "none";
        log1.style.display = "none";
        sig2.style.display = "none";
        account.innerText = usuarios.nickname;
        account_mobile.innerText = usuarios.nickname;
        log_out.style.display = "block";
        log_out2.style.display = "block";
        userimg2.style.display = "block";
        userimg.style.display = "block";
    }
}