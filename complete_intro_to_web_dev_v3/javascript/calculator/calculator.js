let displayStr = "0"
let firstOperand = NaN
let operator = NaN

const display = document.querySelector(".display")

function rerender() {
    display.innerText = displayStr;
}

function handleSymbol(value) {
    switch (value) {
        case "C": {
            displayStr = "0"
            break
        }
        case "Del": {
            if (displayStr.length > 1) {
                displayStr = displayStr.slice(0, -1)
            }
            break
        }
        case "=": {
            if (isNaN(firstOperand)) { 
                // do nothing
            } else {
                handleMath()
            }
            break
        }
        case "-":
        case "/":
        case "X":
        case "+": {
            firstOperand = parseInt(displayStr)
            operator = value
            displayStr = "0"
            break
        }
    }
}

function handleMath() {
    let result = parseInt(firstOperand)
    switch (operator) {
        case "+": {
            result += parseInt(displayStr)
            break
        }
        case "-": {
            result -= parseInt(displayStr)
            break
        }
        case "X": {
            result *= parseInt(displayStr)
            break
        }
        case "/": {
            result /= parseInt(displayStr)
            break
        }
    }
    displayStr = result
}

function handleNumber(value) {
    if (displayStr === "0") {
        displayStr = value
    } else {
        displayStr += value
    }
}

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value)
    } else {
        handleNumber(value)
    }
    rerender()
}

function init() {
    document
      .querySelector(".buttons")
      .addEventListener("click", function (event) {
        buttonClick(event.target.innerText);
      });
  }
  
  init();