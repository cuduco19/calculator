function getValues(){
    let n1 = parseFloat(document.getElementById("num1").value);
    console.log("n1: ", n1);
    
    let n2 = parseFloat(document.getElementById("num2").value);
    console.log("n2: ", n2);

    if(isNaN(n1)) 
        n1 = 0;
    if(isNaN(n2)) 
        n2 = 0;
    
    return [n1, n2];
}


function add(){
    let [a, b] = getValues();
    console.log("[a, b]: ", [a,b]);
    
    let answer = a / b;
    document.getElementById("result").innerText = `Result: ${answer.toFixed(2)}`;
    console.log("Result of a + b: ", answer.toFixed(2));

}

function subtract(){
    let [a, b] = getValues();
    console.log("[a, b]: ", [a,b]);
    
    let answer = a - b;
    document.getElementById("result").innerText = `Result: ${answer.toFixed(2)}`;
    console.log("Result of a - b: ", answer.toFixed(2));
}

function multiply(){
    let [a, b] = getValues();
    console.log("[a, b]: ", [a,b]);
    
    let answer = a * b;
    document.getElementById("result").innerText = `Result: ${answer.toFixed(2)}`;
    console.log("Result of a * b: ", answer.toFixed(2));
}
function divide(){
    let [a, b] = getValues();
    console.log("[a, b]: ", [a,b]);
    
    if(b == 0){
        document.getElementById("result").innerText =`Result: Error (Div by 0)`;
        return;
    }

    let answer = a / b;
    document.getElementById("result").innerText = `Result: ${answer.toFixed(2)}`;
    console.log("Result of a / b: ", answer.toFixed(2));
}


function resetCalculator(){
     let n1 = document.getElementById("num1").value = '';
     document.getElementById("num2").value = '';
     document.getElementById("result").innerText = 'Result: 0.00';
}

// ⌨️ Keyboard shortcuts listener
window.addEventListener("keydown", function(event) {
    //Avoid triggering shortcuts if the user is typing inside the input fields
    if(document.activeElement.tagName == "INPUT") {
        if (event.key === "Escape") {
            resetCalculator();
        }
        return; 
    }

     // Map keys to their operations when typing globally
    switch (event.key){
        case "+":
            add();
            break;
        case "-":
            subtract();
            break;
        case "*":
            multiply();
            break;
        case "/":
            event.preventDefault(); // Prevents the browser''s quick-find shortcut from opening
            divide();
            break;
        case "Escape":
        case "c":
        case "C":
        case "r":
        case "R":
            resetCalculator();
            break;
    }
});