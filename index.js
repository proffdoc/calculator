function add() {
    calculate((a, b) => a + b);
}
function subtract() {
    calculate((a, b) => a - b);
}
function multiply() {
    calculate((a, b) => a * b);
}
function divide() {
    calculate((a, b) => a / b);
}
function calculate(operation) {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = operation(Number(num1), Number(num2));
    document.getElementById('result').value = result;
}