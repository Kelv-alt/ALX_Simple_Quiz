function add(numnber1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 !== 0) {
        return number1 / number2;
    } else {
        return "Division by zero error";
    }
}

document.getElementById("add").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("number1").value) || 0;
    const num2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = add(num1, num2);
    document.getElementById("calculation-result").textContent = "Result: " + result;
});

document.getElementById("subtract").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("number1").value) || 0;
    const num2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = subtract(num1, num2);
    document.getElementById("calculation-result").textContent = "Result: " + result;
});
document.getElementById("divide").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("number1").value) || 0;
    const num2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = divide(num1, num2);
    document.getElementById("calculation-result").textContent = "Result: " + result;
});
document.getElementById("multiply").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("number1").value) || 0;
    const num2 = parseFloat(document.getElementById("number2").value) || 0;
    const result = multiply(num1, num2);
    document.getElementById("calculation-result").textContent = "Result: " + result;
});