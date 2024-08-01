var num1 = null;
var num2 = null;
var output = null;
var op = "";

function calc() {
    num1 = parseFloat(document.getElementById('input1').value);
    num2 = parseFloat(document.getElementById('input2').value);
    switch (op) {
        case "+":
            output = num1 + num2;
            document.getElementById('input1').value = output;
            document.getElementById('input2').value = "";
            num1 = output;
            break;
        case "-":
            output = num1 - num2;
            document.getElementById('input1').value = output;
            document.getElementById('input2').value = "";
            num1 = output;
            break;
        case "*":
            output = num1 * num2;
            document.getElementById('input1').value = output;
            document.getElementById('input2').value = "";
            num1 = output;
            break;
        case "/":
            output = num1 / num2;
            document.getElementById('input1').value = output;
            document.getElementById('input2').value = "";
            num1 = output;
            break;
        case "^":
            output = Math.pow(num1, num2);
            document.getElementById('input1').value = output;
            document.getElementById('input2').value = "";
            num1 = output;
            break;
        case "^2":
            output = Math.pow(num1, 2)
            document.getElementById('input1').value = output;
            document.getElementById('input2').value = "";
            num1 = output;
            break;
    }
}

function add() {
    op = "+";
    calc();
}

function sub() {
    op = "-";
    calc();
}

function mult() {
    op = "*";
    calc();
}

function div() {
    op = "/";
    calc();
}

function equal() {
    calc();
}

function power() {
    op = "^";
    calc();
}

function square() {
    op = "^2"
    calc()
}