var numberSection = document.querySelector('.numberSection');
numberSection.addEventListener('click', display, false);

var operatorSection = document.querySelector('.operatorSection');
operatorSection.addEventListener('click', setOperator, false);

var equals = document.querySelector('.enter');
equals.addEventListener('click', calculate, false);

var results = document.querySelector('#results');

var number, numberTwo, operator;

function display(e){
    if(e.target.classList.contains('number')){
        if(number){
            numberTwo = number;
        }
        number = e.target.textContent;
        results.textContent = number;
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
    operate(operator, Number(number), Number(numberTwo));
}

function operate(operator, x, y){
    if(operator === "add"){
        results.textContent = add(x,y);
    }else if(operator === "subtract"){
        results.textContent = subtract(x,y);
    }else if(operator === "multiply"){
        results.textContent = multiply(x,y);
    }else{
        results.textContent = divide(x,y);
    }
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