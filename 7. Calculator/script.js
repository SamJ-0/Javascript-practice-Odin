const displayText = document.querySelector(".display-text");

const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const equals = document.querySelector(".equals");
const deleteBtns = document.querySelectorAll(".delete");

let operator = "";
let isOperatorChosen = false;
let firstNum = 0;
let secondNum = 0;

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
    } else if(operator === "-") {
        return subtract(a, b);
    } else if(operator === "x") {
        return multiply(a, b);
    } else if(operator === "÷") {
        return divide(a, b);
    } else {
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

equals.addEventListener("click", calculate);


}

function getNumbers(event) {

    if(displayText.textContent === "0" && !isOperatorChosen) {
        firstNum = displayText.textContent = event.target.textContent;
    } else if (!isOperatorChosen) {
        firstNum += event.target.textContent;
        displayText.textContent = firstNum;
    } else if(secondNum === 0 && isOperatorChosen) {
        secondNum = displayText.textContent = event.target.textContent;
    } else if(isOperatorChosen && secondNum != 0) {
        secondNum += event.target.textContent;
        displayText.textContent = secondNum;
    }
}

function getOperator(event) {
    operator = event.target.textContent;
    isOperatorChosen = true;
}

function calculate(event) {
    let num1 = Number(firstNum);
    let num2 = Number(secondNum);

if(event.target.textContent === "=") {
   displayText.textContent = operate(num1, num2, operator);
}
}