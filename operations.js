let currentInput = '';
let currentOperation = '';
let previousInput = '';
let isResult = false;

window.addEventListener('keydown', (event) => {
    if (event.key === '1') appendNumber('1');
    if (event.key === '2') appendNumber('2');
    if (event.key === '3') appendNumber('3');
    if (event.key === '4') appendNumber('4');
    if (event.key === '5') appendNumber('5');
    if (event.key === '6') appendNumber('6');
    if (event.key === '7') appendNumber('7');
    if (event.key === '8') appendNumber('8');
    if (event.key === '9') appendNumber('9');
    if (event.key === '0') appendNumber('0');
    if (event.key === 'Escape') clearDisplay();
    if (event.key === 'Backspace') deleteLastInput();
    if (event.key === '_') negate();
    if (event.key === 'Enter') operate();
    if (event.key === '/') appendOperation('/');
    if (event.key === '*') appendOperation('*');
    if (event.key === '-') appendOperation('-');
    if (event.key === '+') appendOperation('+');
    if (event.key === '.') appendDot();
})

function appendNumber(number) {
    if (isResult === true) {
        currentInput = number;
    }else currentInput += number;

    isResult = false;
    document.getElementById('calculatorDisplay').value = `${previousInput} ${currentOperation} ${currentInput}`;
}

function appendOperation(operation) {
    let current = parseFloat(currentInput).toString();

    if (currentInput === '' && previousInput === '') return;
    if (currentOperation === '/' && current === '0') {
        clearDisplay();

        return;
    }

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
            if (current === 0) {
                alert('bro... are u stupid?');

                clearDisplay();

                return;
            }

            result = prev / current;
            break;

        default:
            return;
    }

    currentInput = Number(result.toPrecision(15)).toString();
    currentOperation = '';
    previousInput = '';
    isResult = true;

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
    if (currentInput === '' || isResult === true) {
        currentInput = '0.';
        
        isResult = false;
    }

    if (!currentInput.includes('.')) currentInput += '.';

    document.getElementById('calculatorDisplay').value = `${previousInput} ${currentOperation} ${currentInput}`;
}

function deleteLastInput() {
    if (previousInput === '' && currentInput === '') return;

    if (previousInput !== '' && currentOperation !== '' && currentInput !== '') {
        if (currentInput.includes('-') && currentInput.length === 2) {
            currentInput = '';
        }else currentInput = currentInput.slice(0, -1);

        document.getElementById('calculatorDisplay').value = `${previousInput} ${currentOperation} ${currentInput}`;
        return;
    }

    if (previousInput === '' && currentInput !== '') {
        if (currentInput.includes('-') && currentInput.length === 2) {
            currentInput = '';
        }else currentInput = currentInput.slice(0, -1);

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