//linking nodes to the DOM
let buttons = document.querySelectorAll('.buttons');
let buttons1 = document.querySelectorAll('.buttons1');
let display = document.querySelector('#display');
let operations = document.querySelectorAll('.operator');
let equalsTo = document.querySelector('#equals');

//user input first value
let firstValue;

//user input operator
let operator;

//user inputs second value
let secondValue;


//arithmetic functions
function add(a, b){
    console.log(a + b);
    getFirstValue();
};

function subtract(a, b){
    console.log(a - b);
    getFirstValue();
};

function multiply(a, b){
    console.log(a * b);
    getFirstValue();
};

function divide(a, b){
    console.log(a / b);
    getFirstValue();
};

//choosing operator
function solve(){
    switch (operator) {
        case '+':
            add(firstValue, secondValue)
            break;
        case '-':
            subtract(firstValue, secondValue)
            break;
        case '*':
            multiply(firstValue, secondValue)
            break;
        case '/':
            divide(firstValue, secondValue)
            break;
        default:
            break;
    };
}


//function to display expressions
function getFirstValue(){
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            display.innerHTML = display.innerHTML.toString() + button.innerHTML.toString();
            getOperator();
        });
    });
    return;
}

function getOperator(){
    operations.forEach(operation => {
        operation.addEventListener('click', () => {
            firstValue = parseInt(display.innerHTML);
            console.log(firstValue);
            console.log(typeof(firstValue));
            display.innerHTML = operation.innerHTML;
            operator = display.innerHTML.toString();
            console.log(operator);
            console.log(typeof(operator));
            getSecondValue();
        });
    });
    return;
}

function getSecondValue() {
    buttons1.forEach(button1 => {
        button1.addEventListener('click', () => {
            display.innerHTML = '';
            display.innerHTML = display.innerHTML.toString() + button1.innerHTML.toString();
            secondValue = parseInt(display.innerHTML);
            console.log(secondValue);
            console.log(typeof(secondValue));
        });
    });
    return;
}

equalsTo.addEventListener('click', () => {
    solve();
})

getFirstValue();