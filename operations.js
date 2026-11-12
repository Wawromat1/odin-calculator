let currentInput = '';
let currentOperation = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;

    document.getElementById('calculatorDisplay').value = `${previousInput} ${currentOperation} ${currentInput}`;
}

function appendOperation(operation) {
    if (currentInput === '') return;

    if (currentInput !== '') {
        operate();
    }

    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('calculatorDisplay').value = `${previousInput} ${currentOperation}`;
}

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
function operate() {
    if (previousInput === '' || currentInput === '') return;

    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);


    switch (currentOperation) {
        case '+':
            result = add(prev, current);
            break;
        
        case '-':
            result = subtract(prev, current);
            break;

        case '*':
            result = multiply(prev, current);
            break;

        case '/':
            result = divide(prev, current);
            break;

        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';

    document.getElementById('calculatorDisplay').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';

    document.getElementById('calculatorDisplay').value = '';
}