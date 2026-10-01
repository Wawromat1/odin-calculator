//basic math functions

function add(firstValue, secondValue) {
    return firstValue + secondValue;
}

function subtract(firstValue, secondValue) {
    return firstValue - secondValue;
}

function multiply(firstValue, secondValue) {
    return firstValue * secondValue;
}

function divide(firstValue, secondValue) {
    if (secondValue === 0) return 'bro... are u stupid?'

    return firstValue / secondValue;
}

// operation function

function operate(firstValue, operator, secondValue) {
    switch (operator) {
        case '+':
            return add(firstValue, secondValue);
        
        case '-':
            return subtract(firstValue, secondValue);

        case '*':
            return multiply(firstValue, secondValue);

        case '/':
            return divide(firstValue, secondValue);

        default:
            break;
    }
}