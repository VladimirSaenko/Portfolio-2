
"use strict"

let alertBox = document.querySelector('.alertBox');


function getPassword() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/@#$%&()+&<>:";
    let passwordLength = 16;
    let password = "";

    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber];
    }

    document.getElementById('password').value = password;
    alertBox.innerHTML = "New Password Copied: <br>" + password;
}

function copyPassword() {
    let copyPassText = document.getElementById('password');
    copyPassText.select();
    document.execCommand("copy");
    alertBox.classList.toggle('active');
    setTimeout(function() {
        alertBox.classList.toggle('active');
    }, 4000);
}
