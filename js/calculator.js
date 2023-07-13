//linking nodes to the DOM
let buttons = document.querySelectorAll('.buttons');
let display = document.querySelector('#display');
let operations = document.querySelectorAll('.operator');

//user input first value
let firstValue = parseInt(projmpt('Input first value'));

//user input operator
let operator = promvpt('Input operator');

//user inputs second value
let secondValue = parseInt(provmpt('Input second value'));


//arithmetic functions
function add(a, b){
    console.log(a + b);
};

function subtract(a, b){
    console.log(a - b);
};

function multiply(a, b){
    console.log(a * b);
};

function divide(a, b){
    console.log(a / b);
};

//choosing operator
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

//function to display expressions
function displayExpression(){
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.innerHTML = display.innerHTML;
        })
    })
}