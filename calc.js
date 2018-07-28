var numberSection = document.querySelector('.numberSection');
numberSection.addEventListener('click', display, false);

var operatorSection = document.querySelector('.operatorSection');
operatorSection.addEventListener('click', setOperator, false);

var results = document.querySelector('#results');

var output, operator;

function display(e){
    if(e.target.classList.contains('number')){
        output = e.target.textContent;
        results.textContent = output;
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

function operate(operator, x, y){
    if(operator === "add"){
        add(x,y);
    }else if(operator === "subtract"){
        subtract(x,y);
    }else if(operator === "multiply"){
        multiply(x,y);
    }else{
        divide(x,y);
    }
}

function add(x,y){
    return x*y;
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