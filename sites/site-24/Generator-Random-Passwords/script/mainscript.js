
"use strict";

let alertBox = document.querySelector('.alertBox');

function getPassword() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/@#$%&()+&<>:";
    let passwordLength = 16;
    let password = "";
    let smiles = [
        '-_-',
        '( ͡° ͜ʖ ͡°)',
        '(✷‿✷)',
        '( ͡⊙ ͜ʖ ͡⊙)',
        '[✖‿✖]',
        'ʕ•ᴥ•ʔ',
        '༼ つ ◕_◕ ༽つ',
        '(づ｡◕‿‿◕｡)づ',
        '[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]',
        '(ಠ_ಠ)',
        'ᕦ(ò_óˇ)ᕤ',
        '0_0',
        'X_X',
        '╚(ಠ_ಠ)=┐',
        ':-D',
        'XD:',
        ')0)',
        '(>_<)',
        '(o_O)',
        ' ヅ ',
        ';)'
    ]
    for(let i = 0; i < passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber];
    }
    document.getElementById('password').value = password;
    let randomNumber = Math.floor(Math.random() * smiles.length);
    alertBox.innerHTML = "<span>New Password Copied: <br> " + password + ' <br><br>' + smiles[randomNumber] + "<span/>";
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
