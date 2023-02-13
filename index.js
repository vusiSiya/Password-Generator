const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let p1Buttn = document.getElementById('p1')
let p2Buttn = document.getElementById('p2')
let genPasswordBtn = document.getElementById('gen-PswdBtn')
let passwordEl = document.getElementById('password-El')

genPasswordBtn.addEventListener("click", function () {
    generatePaswords();
})
function generatePaswords() {
    let randmIndex;
    let password1 = ""
    let password2 = ""

    for (let i = 0; i < 15 * 2; i++) {
        randmIndex = Math.floor(Math.random() * characters.length) + 1;

        //First Password
        if (i < 15) {
            password1 += characters[randmIndex];
        }//Second Passoword
        else {
            password2 += characters[randmIndex];
        }
    }
    p1Buttn.innerText = password1;
    p2Buttn.innerText = password2;

    passwordClicked(password1, password2);
}

function passwordClicked(_password1, _password2) {
    p1Buttn.addEventListener("click", function () {
        passwordEl.textContent = `Password: ${_password1}`;
    })
    p2Buttn.addEventListener("click", function () {
        passwordEl.textContent = `Password: ${_password2}`;
    })
}



