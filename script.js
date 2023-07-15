const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
];

const passwordElOne = document.querySelector("#passwordFieldOne");
const passwordElTwo = document.querySelector("#passwordFieldTwo");
const msgInfoEl = document.querySelector("#msgInfo");

let passwordOne = '';
let passwordTwo = '';

function generatePassword() {
    passwordOne = ''; // Reset passwordOne
    passwordTwo = ''; // Reset passwordTwo

    let passwordLength = document.querySelector("#passwordLength").value;

    if (passwordLength <= 20 && passwordLength > 4 && passwordLength !== '0' && passwordLength !== '') {
        for (let i = 0; i < passwordLength; i++) {
            passwordOne += characters[(Math.floor(Math.random() * characters.length))];
            passwordTwo += characters[(Math.floor(Math.random() * characters.length))];
        }
        passwordElOne.textContent = passwordOne;
        passwordElTwo.textContent = passwordTwo;
        msgInfoEl.textContent = "";
    } else {
        msgInfoEl.textContent = "Invalid Length 😯";
        passwordElOne.textContent = ' ';
        passwordElTwo.textContent = ' ';
        passwordOne = '';
        passwordTwo = '';
    }
}


function copyPassword(btnNumber) {
    if (btnNumber === 1) {
        if (!passwordOne) {
            msgInfoEl.textContent = "It's Empty 😒";
        } else {
            // Perform copying operation for passwordOne
            navigator.clipboard.writeText(passwordOne);
            msgInfoEl.textContent = 'Password copied 😊';
        }
    } else if (btnNumber === 2) {
        if (!passwordTwo) {
            msgInfoEl.textContent = "It's Empty 😒";
        } else {
            // Perform copying operation for passwordTwo
            navigator.clipboard.writeText(passwordTwo);
            msgInfoEl.textContent = 'Password copied 😊';
        }
    }
}
