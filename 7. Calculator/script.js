const displayText = document.querySelector(".display-text");

const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
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
    } else if(operator === "*") {
        return multiply(a, b);
    } else if(operator === "/") {
        return divide(a, b);
    } else {
        console.log("Please enter either: +, -, * or /");
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

}

function getNumbers(event) {

    if(displayText.textContent === "0" && !isOperatorChosen) {
        firstNum = displayText.textContent = event.target.textContent;
        console.log("firstNum = " + firstNum);
        console.log(isOperatorChosen);
    } else if (!isOperatorChosen) {
        firstNum += event.target.textContent;
        displayText.textContent = firstNum;
        console.log("firstNum = " + firstNum);
    } else if(secondNum === 0 && isOperatorChosen) {
        secondNum = displayText.textContent = event.target.textContent;
        console.log("SecondNum = " + secondNum);
        console.log(isOperatorChosen);
    } else if(isOperatorChosen && secondNum != 0) {
        secondNum += event.target.textContent;
        displayText.textContent = secondNum;
        console.log("secondNum = " + secondNum);
    }
}

function getOperator(event) {

    if(event.target.textContent === "+") {
        operator = event.target.textContent;
         console.log(operator);
        return isOperatorChosen = true;
    } else if(event.target.textContent === "-") {
        operator = event.target.textContent;
         console.log(operator);
        return isOperatorChosen = true;
    } else if(event.target.textContent === "x") {
        operator = event.target.textContent;
         console.log(operator);
        return isOperatorChosen = true;
    } else if(event.target.textContent === "/") {
        operator = event.target.textContent;
         console.log(operator);
        return isOperatorChosen = true;
    } else {
        console.log("Something isn't quite right " + operator);
    }
}

// console.log(operate("3", "5", operator));