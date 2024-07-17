let url = "https://words.dev-apis.com/word-of-the-day"

let first_guess = ""
let second_guess = ""
let third_guess = ""
let fourth_guess = ""
let fifth_guess = ""
let sixth_guess = ""

async function getWord() {
    const promise = await fetch(url)
    const processed = await promise.json()
    displayStr = processed.word
    display.innerText = displayStr;
}

function buttonClick() {
    let str = getWord()
}

function init() {
    document
      .addEventListener("keydown", function (event) {

        console.log("Pressed: " + event.key)
      });
  }
  
  init();