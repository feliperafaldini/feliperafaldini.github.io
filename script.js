const text = `Oi, eu sou Felipe Rafaldini, obrigado por visitar minha página na web!
    Sou desenvolvedor e estudante de Engenharia da Computação na Universidade de Sorocaba (UNISO).
    Estou aprendendo HTML, CSS e JavaScript com algumas experiências anteriores em Dart/Flutter, Python e LUA.
    Caso queira me contactar, acesse o menu lateral para o e-mail.`;

let index = 0;
let typingInterval;
const fileButton = document.querySelector(".file-button");
const fileDropdownContent = document.getElementById("file-dropdown-content");
const editButton = document.querySelector(".edit-button");
const editDropdownContent = document.getElementById("edit-dropdown-content");
const viewButton = document.querySelector(".view-button");
const viewDropdownContent = document.getElementById("view-dropdown-content");
const favoritesButton = document.querySelector(".favorites-button");
const favoritesDropdownContent = document.getElementById("favorites-dropdown-content");
const toolsButton = document.querySelector(".tools-button");
const toolsDropdownContent = document.getElementById("tools-dropdown-content");
const helpButton = document.querySelector(".help-button");
const helpDropdownContent = document.getElementById("help-dropdown-content");

fileButton.addEventListener("click", function () {
    fileDropdownContent.style.display = fileDropdownContent.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function (event) {
    if (!fileButton.contains(event.target) && !fileDropdownContent.contains(event.target)) {
        fileDropdownContent.style.display = "none";
    }
});

editButton.addEventListener("click", function () {
    editDropdownContent.style.display = editDropdownContent.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function (event) {
    if (!editButton.contains(event.target) && !editDropdownContent.contains(event.target)) {
        editDropdownContent.style.display = "none";
    }
});

viewButton.addEventListener("click", function () {
    viewDropdownContent.style.display = viewDropdownContent.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function (event) {
    if (!viewButton.contains(event.target) && !viewDropdownContent.contains(event.target)) {
        viewDropdownContent.style.display = "none";
    }
});

favoritesButton.addEventListener("click", function () {
    favoritesDropdownContent.style.display = favoritesDropdownContent.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function (event) {
    if (!favoritesButton.contains(event.target) && !favoritesDropdownContent.contains(event.target)) {
        favoritesDropdownContent.style.display = "none";
    }
});

toolsButton.addEventListener("click", function () {
    toolsDropdownContent.style.display = toolsDropdownContent.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function (event) {
    if (!toolsButton.contains(event.target) && !toolsDropdownContent.contains(event.target)) {
        toolsDropdownContent.style.display = "none";
    }
});

helpButton.addEventListener("click", function () {
    helpDropdownContent.style.display = helpDropdownContent.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function (event) {
    if (!helpButton.contains(event.target) && !helpDropdownContent.contains(event.target)) {
        helpDropdownContent.style.display = "none";
    }
});

function typeText(textContentElement) {
    if (index < text.length) {
        if (text[index] == "\n") {
            textContentElement.innerHTML += "<br>";
        } else {
            textContentElement.innerHTML += text[index];
        }
        index++;
    } else {
        clearInterval(typingInterval);
    }
}

function showHomepage() {
    const contentMain = document.getElementById("content-main");
    contentMain.innerHTML = `
        <p class="main">
            <span class="text-content"></span><span class="cursor">_</span>
        </p>
    `;
    const textContentElement = document.querySelector(".text-content");
    index = 0;
    clearInterval(typingInterval);
    typingInterval = setInterval(() => typeText(textContentElement), 10);
}

document.addEventListener("DOMContentLoaded", () => {
    showHomepage();
});

function showContact() {
    const contentMain = document.getElementById("content-main");
    contentMain.innerHTML = `
    <p class="main">Meios de contato:<br><br>
        Email: feliperafaldini@gmail.com<br><br>
        GitHub: @feliperafaldini<br>
    </p> 
    `;
    clearInterval(typingInterval);
}

function rotateLetter(span, finalLetter) {
    if (finalLetter === " ") {
        span.textContent = " ";
        return;
    }
    let currentCharCode = 65;
    const finalCharCode = finalLetter.charCodeAt(0);

    const interval = setInterval(() => {
        span.textContent = String.fromCharCode(currentCharCode);
        if (currentCharCode === finalCharCode) {
            clearInterval(interval);
        } else {
            currentCharCode++;
            if (currentCharCode > 90 && finalCharCode <= 122) {
                currentCharCode = 97;
            }
        }
    }, 20);
}
function animateText() {
    const letters = document.querySelectorAll(".letter");
    letters.forEach((span, index) => {
        const finalLetter = span.getAttribute('data-final');
        setTimeout(() => {
            rotateLetter(span, finalLetter);
        }, index * 200);
    });

}

window.onload = animateText;
