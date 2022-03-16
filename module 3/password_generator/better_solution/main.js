const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = `!@#$%^&*()_+=-][}{'";:/?.,><~`;
const charsArr = [...characters, ...numbers, ...symbols];
const passwordContainers = Array.from(document.getElementsByClassName("password-container"));
const charsNumEl = document.getElementById("chars-num");
const generateBtn = document.getElementById("generate-btn");

// Focus on characters numbers input when document load
document.load = charsNumEl.focus();

// Generate random password with specific characters number from an array
function getRandomPassword(array, charsCount) {
    let password = "";
    for (let i = 0; i < charsCount; i++) {
        const randomChar = array[Math.floor(Math.random() * array.length)];
        password += randomChar;
    }
    return password;
}

// Eventlistener to generate passwords btn
generateBtn.addEventListener("click", function (e) {
    e.preventDefault()
    const charsNum = charsNumEl.value;
    if (charsNum > 0 && charsNum <= 25) {
        passwordContainers.forEach((container) => {
            container.textContent = getRandomPassword(charsArr, charsNum);
        });
    } else if (charsNum === "") {
        charsNumEl.value = 0;
    } else {
        passwordContainers.forEach((container) => {
            container.innerHTML = `<img src="img/dots-icon.png" />`;
        });
    }
});

// Copy selected password to the clipboard
passwordContainers.map((container) => {
    container.addEventListener("click", function () {
        navigator.clipboard.writeText(container.textContent);
    });
});