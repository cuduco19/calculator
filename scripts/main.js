import { calculate } from "./math.js";
import { initShortcuts } from "./shortcuts.js";

const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultDisplay = document.getElementById("result");

function getValues() {
    const n1 = parseFloat(num1Input.value);
    const n2 = parseFloat(num2Input.value);

    return [
        Number.isNaN(n1) ? 0 : n1,
        Number.isNaN(n2) ? 0 : n2,
    ];
}

function handleOperation(operation) {
    const [a, b] = getValues();
    const answer = calculate(operation, a, b);

    if (answer === null) {
        resultDisplay.innerText = "Result: Error (Div by 0)";
        return;
    }

    resultDisplay.innerText = `Result: ${answer.toFixed(2)}`;
}

function resetCalculator() {
    num1Input.value = "";
    num2Input.value = "";
    resultDisplay.innerText = "Result: 0.00";
    num1Input.focus();
}

document.getElementById("btn-add").addEventListener("click", () => handleOperation("add"));
document.getElementById("btn-subtract").addEventListener("click", () => handleOperation("subtract"));
document.getElementById("btn-multiply").addEventListener("click", () => handleOperation("multiply"));
document.getElementById("btn-divide").addEventListener("click", () => handleOperation("divide"));
document.getElementById("btn-reset").addEventListener("click", resetCalculator);

initShortcuts({
    onOperation: handleOperation,
    onReset: resetCalculator,
});