export function initShortcuts({ onOperation, onReset }) {
    window.addEventListener("keydown", (event) => {
        if (document.activeElement.tagName === "INPUT") {
            if (event.key === "Enter") {
                event.preventDefault();
                document.activeElement.blur();
            }
            if (event.key === "Escape") {
                onReset();
            }
            return;
        }

        switch (event.key) {
            case "+":
                onOperation("add");
                break;
            case "-":
                onOperation("subtract");
                break;
            case "*":
                onOperation("multiply");
                break;
            case "/":
                event.preventDefault();
                onOperation("divide");
                break;
            case "Escape":
            case "c":
            case "C":
            case "r":
            case "R":
                onReset();
                break;
        }
    });
}