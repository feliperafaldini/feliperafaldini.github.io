const text = `Oi, eu sou Felipe Rafaldini, obrigado por visitar minha página na web!
    Sou desenvolvedor e estudante de Engenharia da Computação na Universidade de Sorocaba (UNISO).
    Estou aprendendo HTML, CSS e JavaScript com algumas experiências anteriores em Dart/Flutter, Python e LUA.
    Caso queira me contactar, acesse o menu lateral para o e-mail.`;

let index = 0;
let typingInterval;

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
