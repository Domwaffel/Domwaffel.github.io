let currentNum = 0;
let displayNum = 0;
let currentOperator = "";
let decimal = false

function numberInput(number) {
    let go = true;
    let count = 1;
    if (decimal) {
        while (go) {
            if (displayNum % 1 != 0) {
                displayNum *= 10;
                count++;
            } else {
                go = false;
            }
        }
        displayNum = displayNum * 10 + number;
        displayNum /= Math.pow(10, count);
    } else {
        displayNum = displayNum * 10 + number;
    }
    displayOutput();
}

function operatorInput(operator) {
    currentNum = displayNum;
    displayNum = 0;
    decimal = false;
    if (currentOperator == "") {
        currentOperator = operator;
    } else {
        sumInput();
    }
    displayOutput();
}

function sumInput() {
    calculateInput();
    displayOutput();
}

function signInput() {
    if (displayNum == 0) {
        currentNum = currentNum * -1;
    } else {
        displayNum = -displayNum;
    }
    displayOutput();
}

function decimalInput() {
    decimal = true;
}

function AC() {
    currentNum = 0;
    displayNum = 0;
    decimal = false;
    currentOperator = "";
    displayOutput();
}



function calculateInput() {
    if (currentOperator == "+") {
        displayNum = currentNum + displayNum;
    } else if (currentOperator == "-") {
        displayNum = currentNum - displayNum;
    } else if (currentOperator == "*") {
        displayNum = currentNum * displayNum;
    } else if (currentOperator == "/") {
        displayNum = currentNum / displayNum;
    } else if (currentOperator == "%") {
        displayNum = currentNum % displayNum;
    }
    currentNum = 0;
    currentOperator = "";
}

function displayOutput() {
    if (currentNum == 0) {
        document.getElementById("displaytext").innerHTML = displayNum;
    } else if (displayNum == 0) {
        document.getElementById("displaytext").innerHTML = currentNum + " " + currentOperator;
    } else {
        document.getElementById("displaytext").innerHTML = currentNum + " " + currentOperator + " " + displayNum;
    }
}

window.onload = function() {
    displayOutput();

    document.getElementById("clear").addEventListener("click", function() { AC(); });
    document.getElementById("sign").addEventListener("click", function() { signInput(); });
    document.getElementById("equals").addEventListener("click", function() { sumInput(); });
    document.getElementById("decimal").addEventListener("click", function() { decimalInput(); });

    document.getElementById("add").addEventListener("click", function() { operatorInput("+"); });
    document.getElementById("subtract").addEventListener("click", function() { operatorInput("-"); });
    document.getElementById("multiply").addEventListener("click", function() { operatorInput("*"); });
    document.getElementById("divide").addEventListener("click", function() { operatorInput("/"); });
    document.getElementById("percent").addEventListener("click", function() { operatorInput("%"); });

    document.getElementById("zero").addEventListener("click", function() { numberInput(0); });
    document.getElementById("one").addEventListener("click", function() { numberInput(1); });
    document.getElementById("two").addEventListener("click", function() { numberInput(2); });
    document.getElementById("three").addEventListener("click", function() { numberInput(3); });
    document.getElementById("four").addEventListener("click", function() { numberInput(4); });
    document.getElementById("five").addEventListener("click", function() { numberInput(5); });
    document.getElementById("six").addEventListener("click", function() { numberInput(6); });
    document.getElementById("seven").addEventListener("click", function() { numberInput(7); });
    document.getElementById("eight").addEventListener("click", function() { numberInput(8); });
    document.getElementById("nine").addEventListener("click", function() { numberInput(9); });
};