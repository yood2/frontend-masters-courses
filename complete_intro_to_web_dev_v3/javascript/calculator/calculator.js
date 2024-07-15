let string = "0";

const display = document.querySelector(".display");

// buttons from querySelector
const buttons = document.querySelector(".buttons");

// button eventListeners
buttons.addEventListener("click", function(event) {
    console.log(event);
    if (event.target.tagName === "BUTTON") {
        let button_content = event.target.innerText;
        console.log(button_content);
        
        if (button_content === "C") {
            string = "0";
            console.log("cleared")
        } else if (button_content === "Del") {
            if (string.length !== 1) {
                string = string.slice(0, -1)
            }
            console.log("deleting?")
        } else if (string === "0") {
            string = button_content;
            console.log("new num")
        } else {
            string += button_content;
            console.log("appending num")
        }
        display.innerText = string;
    }
});
