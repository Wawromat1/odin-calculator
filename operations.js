let currentInput = '';
let currentOperation = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;

    document.getElementById('calculatorDisplay').value = `${previousInput} ${currentOperation} ${currentInput}`;
}

function appendOperation(operation) {
    if (currentInput === '' && previousInput === '') return;

    if (currentInput !== '') {
        operate();
    }

    if (previousInput === '') {
        previousInput = currentInput;
    }
    
    currentOperation = operation;
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
    if (secondValue === 0) {
        alert('bro... are u stupid?');

        clearDisplay();

        return;
    }

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

function negate() {
    if (currentInput === '') return;

    if (currentInput !== '') currentInput = (parseFloat(currentInput) * -1).toString();

    document.getElementById('calculatorDisplay').value = `${previousInput} ${currentOperation} ${currentInput}`;
}

function appendDot() {
    if (currentInput === '') {
        currentInput = '0.';
    }

    if (!currentInput.includes('.')) currentInput += '.';

    document.getElementById('calculatorDisplay').value = `${previousInput} ${currentOperation} ${currentInput}`;
}

function deleteLastInput() {
    if (previousInput === '' && currentInput === '') return;

    if (previousInput !== '' && currentOperation !== '' && currentInput !== '') {
        currentInput = currentInput.slice(0, -1);

        document.getElementById('calculatorDisplay').value = `${previousInput} ${currentOperation} ${currentInput}`;
        return;
    }

    if (previousInput === '' && currentInput !== '') {
        currentInput = currentInput.slice(0, -1);

        document.getElementById('calculatorDisplay').value = currentInput;
        return;
    }

    if (previousInput !== '' && currentOperation !== '' && currentInput === '') {
        currentInput = previousInput;
        previousInput = '';
        currentOperation = '';

        document.getElementById('calculatorDisplay').value = currentInput;
        return;
    }
}