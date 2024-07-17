let url = "https://words.dev-apis.com/word-of-the-day"

let complete = false

const display = document.querySelector(".first-guess")
let displayStr = ""

async function getWord() {
    const promise = await fetch(url)
    const processed = await promise.json()
    displayStr = processed.word
    display.innerText = displayStr
}

function scoreboard(event) {
    if (!complete) {
        if (displayStr.length < 6) {
            displayStr += event.key
            console.log(displayStr)
            display.innerText = displayStr
        }
        console.log("Too long")
    }
}

function buttonClick() {
    let str = getWord()
}

function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

function init() {
    document
      .addEventListener("keydown", function (event) {
        if (!complete) {
            if (isLetter(event.key)) {
                scoreboard(event)
            }
        }
      });
  }
  
  init();