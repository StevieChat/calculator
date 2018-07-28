var numberSection = document.querySelector('.numberSection');
numberSection.addEventListener('click', display, false);

var operatorSection = document.querySelector('.operatorSection');
operatorSection.addEventListener('click', setOperator, false);

var equals = document.querySelector('.enter');
equals.addEventListener('click', calculate, false);

var clear = document.querySelector('.clear');
clear.addEventListener('click', reset, false);

var results = document.querySelector('#results');

var number = "";
var numberTwo;
var operator;
var amount;
var displayNum;

function display(e){
    if(e.target.classList.contains('number')){
        if(operator){
            number = e.target.textContent;
        }else{
            number += e.target.textContent;
        }
    }
}

function setOperator(e){
    if(e.target.textContent === "/"){
        operator = "divide";
    }else if(e.target.textContent === "X"){
        operator = "multiply";
    }else if (e.target.textContent === "-"){
        operator = "subtract";
    }else if(e.target.textContent === "+"){
        operator = "add";
    }
}

function calculate(e){
    if(number && numberTwo){
        if(amount || operator == "divide"){
            operate(operator, Number(numberTwo), Number(number));
        }else{
            operate(operator, Number(number), Number(numberTwo));
        }
    } 
    operator = undefined;
}

function reset(e){
    numberTwo = undefined;
    number = "";
    operator = undefined;
    amount = undefined;
    results.textContent = "";
}

function operate(operator, x, y){
    if(operator === "add"){
        amount = add(x,y);
        results.textContent = amount;
    }else if(operator === "subtract"){
        amount = subtract(x,y);
        results.textContent = amount;
    }else if(operator === "multiply"){
        amount = multiply(x,y);
        results.textContent = amount;
    }else{
        amount = divide(x,y);
        results.textContent = amount;
    } 
    number = amount;
    operator = undefined;
}

function add(x,y){
     return x+y;
}

function subtract(x,y){
    return Math.abs(x-y);
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}

function debug(){
    console.log("Number: " + number);
    console.log("Number Two: " + numberTwo);
    console.log("Operator " + operator);
    console.log("Amount " + amount);
}