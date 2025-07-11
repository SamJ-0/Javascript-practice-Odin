const displayText = document.querySelector(".display-text");
const calcDisplay = document.querySelector(".calc-display");

const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const equals = document.querySelector(".equals");

const deleteBtns = document.querySelectorAll(".delete");

let operator = "";
let isOperatorChosen = false;
let firstNum = "0";
let secondNum = "0";
let result = 0;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    if(operator === "+") {
        return add(a, b);
    } 
    else if(operator === "-") {
        return subtract(a, b);
    } 
    else if(operator === "x") {
        return multiply(a, b);
    } 
    else if(operator === "÷") {
        return divide(a, b);
    } 
    else {
        displayText.textContent = "Please enter either: +, -, * or ÷";
    }
}

populateDisplay();

function populateDisplay() {

    numbers.forEach(function(numBtns) {
    numBtns.addEventListener("click", getNumbers);
})

operators.forEach(function(opBtns) {
    opBtns.addEventListener("click", getOperator);
})

deleteBtns.forEach(function(delBtns) {
    delBtns.addEventListener("click", deleteEntries);
})

equals.addEventListener("click", calculate);

}

function getNumbers(event) {

    let isTextLengthLimit = displayText.textContent.length < 10;
    
    if(displayText.textContent === "0" && !isOperatorChosen) {
        firstNum = displayText.textContent = event.target.textContent;
    } 
    else if(!isOperatorChosen && isTextLengthLimit) {
        firstNum += event.target.textContent;
        displayText.textContent = firstNum;
    } 
    else if(secondNum === "0" && isOperatorChosen) {
        secondNum = displayText.textContent = event.target.textContent;
    } 
    else if(isOperatorChosen && secondNum != "0" && isTextLengthLimit) {
        secondNum += event.target.textContent;
        displayText.textContent = secondNum;
    }
}

function getOperator(event) {
    operator = event.target.textContent;
    calcDisplay.textContent = `${firstNum} ${operator}`;
    isOperatorChosen = true;
}

function calculate(event) {
    let num1 = Number(firstNum);
    let num2 = Number(secondNum);

if(event.target.textContent === "=" && firstNum !="0" && secondNum != "0") {
   calcDisplay.textContent += ` ${secondNum} =`;
   result = displayText.textContent = Number(operate(num1, num2, operator).toFixed(5));
}
else if (secondNum === "0" && operator != "÷") {
    calcDisplay.textContent = "";
   displayText.textContent = "Enter 2nd number";
} 
else if (secondNum === "0" && operator === "÷") {
    displayText.textContent = "Can't divide by 0!";
}

}

function deleteEntries(event) {
   if(event.target.textContent === "C") {
    resetCalculator();
   }
    else if(event.target.textContent === "⌫" && !isOperatorChosen && firstNum.length > 1) {
        firstNum = firstNum.slice(0, -1);
        displayText.textContent = firstNum;
    }
    else if (firstNum === "" || firstNum.length <= 1) {
        firstNum = "0";
        displayText.textContent = "0";
    }
    else if (isOperatorChosen && secondNum === "0") {
        operator = "";
        displayText.textContent = firstNum;
        isOperatorChosen = false;
    } 
    else if(event.target.textContent ==="⌫" && isOperatorChosen && secondNum.length > 1) {
        secondNum = secondNum.slice(0, -1);
        displayText.textContent = secondNum;
    }
    else if (secondNum === "" || secondNum.length <= 1) {
        secondNum = "0";
        displayText.textContent = "0";
    }
}

function resetCalculator() {
        firstNum = "";
        secondNum = "";
        operator = "";
        displayText.textContent = "0";
        calcDisplay.textContent = "";
        isOperatorChosen = false;
}