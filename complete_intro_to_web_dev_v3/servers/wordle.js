let fetchURL = "https://words.dev-apis.com/word-of-the-day"
let postURL = "https://words.dev-apis.com/validate-word"

let complete = false

const display = document.querySelector(".first-guess")
let displayStr = ""

async function getWord() {
    const promise = await fetch(url)
    const processed = await promise.json()
    displayStr = processed.word
    display.innerText = displayStr
}

function rerender() {
    display.innerText = displayStr;
}

async function checkWord() {
    const result = await fetch(postURL,{
        method: "POST",
        body: JSON.stringify({ word: displayStr })
    })
    const { validWord } = await result.json()
    console.log(validWord)
}

function buttonClick(event) {
    if (isLetter(event.key)) {
        if (displayStr.length <= 5) {
            displayStr += event.key
            rerender()
        }
    } else if (event.key === "Enter") {
        checkWord()
    }
}

function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

function init() {
    document
        .addEventListener("keydown", function (event) {
            buttonClick(event)
        });
  }
  
init();