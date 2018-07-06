'use strict';

document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    // anon f(x)'s for event listeners
    let numberButtons = document.querySelectorAll("button.number");
    let equationObj = {
        leftSide: "",
        rightSide: "",
        equationType: "",
    }
    // add event listeners to numbers
    for(let i = 0; i < numberButtons.length; i++) {
        numberButtons[i].addEventListener("click", addNumberToDisplay);
    }

    //add event listeners to operators (/, *, +, -)
    let operatorButtons = document.querySelectorAll("button.operator");

    for(let i = 0; i < operatorButtons.length; i++) {
        operatorButtons[i].addEventListener("click", function() {
            let displayText = document.getElementsByClassName("display-text")[0];
            switch (this.innerHTML) {
                case "÷":
                    equationObj.equationType = "division";
                    AddInnerHTMLAndReset(equationObj, displayText);
                    break;
                case "x":
                    equationObj.equationType = "multiplication";
                    AddInnerHTMLAndReset(equationObj, displayText);
                    break;
                case "-":
                    equationObj.equationType = "subtraction";
                    AddInnerHTMLAndReset(equationObj, displayText);
                    break;
                case "+":
                    equationObj.equationType = "addition";
                    AddInnerHTMLAndReset(equationObj, displayText);
                    break;
                default: 
                    console.log("error with equation type");
                    AddInnerHTMLAndReset(equationObj, displayText)
                    break;
            }
        });
    };

    // cancel event listener
    let cancel = document.getElementsByClassName("cancel")[0];
    cancel.onclick = function() {
        let displayText = document.getElementsByClassName("display-text")[0];
        displayText.innerHTML = 0;
        equationObj = {
            leftSide: "",
            rightSide: "",
            equationType: ""
        }
    }

    // equals event listener
    let equals = document.getElementsByClassName("equals")[0];
    equals.onclick = function() {
        let displayText = document.getElementsByClassName("display-text")[0];
        // add the right side of the equation
        equationObj.rightSide = displayText.innerHTML;
        switch (equationObj.equationType) {
            case("division"):
                displayText.innerHTML = Number(equationObj.leftSide) / Number(equationObj.rightSide);
                break;
            case("multiplication"):
                displayText.innerHTML = Number(equationObj.leftSide) * Number(equationObj.rightSide);
                console.log(equationObj);
                break;
            case("subtraction"):
                displayText.innerHTML = Number(equationObj.leftSide) - Number(equationObj.rightSide);
                break;
            case("addition"):
                displayText.innerHTML = Number(equationObj.leftSide) + Number(equationObj.rightSide);
                break;
            default:
                console.log("error with doing the math");
                break;
        }
    }
});

// helper f(x) 

function AddInnerHTMLAndReset(obj, elementToReset) {
    obj.leftSide = elementToReset.innerHTML;
    elementToReset.innerHTML = "0";
    console.log(obj);
    
}

// anonymous f(x)

// number anon f(x)

function addNumberToDisplay() {
    let displayText = document.getElementsByClassName("display-text")[0];
    if(displayText.innerHTML === "0") { // no implicit coercion
        displayText.innerHTML = "";
    }

    displayText.innerHTML += this.innerHTML;
}

