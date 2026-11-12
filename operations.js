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

// Elements
const firstValue = document.getElementById('firstValue');
const secondValue = document.getElementById('secondValue');
const operator = document.getElementById('operator');

const inputBtns = document.querySelectorAll('.inputBtn');

inputBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('number')) {
            updateDisplayValue(firstValue.textContent, btn.textContent.trim());
        }
    });
});

// Button functionality
function updateDisplayValue(element, btnValue) {
    if (element === '0') {
        if (btnValue === '0') return;
        element = btnValue;
        return;
    }
    
    element += btnValue;
}