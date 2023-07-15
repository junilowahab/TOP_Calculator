//linking nodes to the DOM
let buttons = document.querySelectorAll('.buttons');
let display = document.querySelector('#display');
let operations = document.querySelectorAll('.operator');
let equalsTo = document.querySelector('#equals');
let minorDisplay = document.querySelector('#displayminor');

//Creating values
let firstValue;
let arithmeticOperator;
let secondValue;
let result;
let doneSolution = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(doneSolution === true){
            display.innerText = '';
            minorDisplay.innerText = '';
            firstValue = undefined;
            secondValue = undefined;
            arithmeticOperator = undefined;
            doneSolution = false;
        };
        display.innerText = display.innerText.toString() + button.innerText.toString();
        if(firstValue !== undefined){
            secondValue = display.innerText;
        }else{
            firstValue = display.innerText;
        };
    })
});

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        console.log(firstValue);
        arithmeticOperator = operation.innerText.toString();
        minorDisplay.innerText = display.innerText + operation.innerText;
        display.innerText = operation.innerText.toString();
        display.innerText = '';
        console.log(arithmeticOperator);
    })
});

equalsTo.addEventListener('click', () => {
    console.log(secondValue);
    switch (arithmeticOperator) {
        case '+':
            add(parseInt(firstValue), parseInt(secondValue));
            break;
        case '-':
            subtract(parseInt(firstValue), parseInt(secondValue));
            break;
        case '*':
            multiply(parseInt(firstValue), parseInt(secondValue));
            break;
        case '/':
            divide(parseInt(firstValue), parseInt(secondValue));
            break;
        default:
            break;
    }
    minorDisplay.innerText = minorDisplay.innerText + secondValue;
    display.innerText = result;
    doneSolution = true;
})

function add(a, b){
    console.log(a + b);
    result = a + b;
};
function subtract(a, b){
    console.log(a - b);
    result = a - b;
};
function multiply(a, b){
    console.log(a * b);
    result = a * b;
};
function divide(a, b){
    console.log(a / b);
    result = a / b;
};