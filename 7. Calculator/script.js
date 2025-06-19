const operator = ["+", "-","*", "/"];
let num1 = 3;
let num2 = 5;

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

console.log(operate(num1, num2, operator[2]));