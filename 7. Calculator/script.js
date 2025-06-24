const displayText = document.querySelector(".display-text");
const numbers = document.querySelectorAll(".numbers");

const operator = ["+", "-","*", "/"];
let numbers1 = 0;
let numbers2 = 5;

let isDefaultDigit = true;

    if (isDefaultDigit === true) {
        displayText.textContent = 0;
    }

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

console.log(operate("3", numbers2, operator[2]));

numbers.forEach(function(numBtns) {
    numBtns.addEventListener("click", populateDisplay);
})

function populateDisplay(event) {
    const numberLength = displayText.textContent.length;
    
    isDefaultDigit = false

    if(isDefaultDigit != true && numbers1 === 0) {
        numbers1 = displayText.textContent = event.target.textContent;
        console.log(isDefaultDigit);
    } else if(numbers1 > 0 && numberLength < 12) {
           numbers1 = displayText.textContent += event.target.textContent;
           console.log("numbers1 = " + numbers1);
        }
}