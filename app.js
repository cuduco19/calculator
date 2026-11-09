function getValues(){
    let n1 = parseFloat(document.getElementById("num1").value);
    console.log("n1: ", n1);
    let n2 = parseFloat(document.getElementById("num2").value);
    console.log("n2: ", n2);

    return [n1, n2];
}


function add(){
    let [a, b] = getValues();
    console.log("[a, b]: ", [a,b]);
    
    document.getElementById("result").innerText = `Result: ${a + b}`;
    console.log("Result of a + b: ", a + b);

}

function subtract(){
    let [a, b] = getValues();
    console.log("[a, b]: ", [a,b]);
    
    document.getElementById("result").innerText = `Result: ${a - b}`;
    console.log("Result of a - b: ", a - b);
}

function multiply(){
    let [a, b] = getValues();
    console.log("[a, b]: ", [a,b]);
    
    document.getElementById("result").innerText = `Result: ${a * b}`;
    console.log("Result of a * b: ", a * b);
}
function divide(){
    let [a, b] = getValues();
    console.log("[a, b]: ", [a,b]);
    
    if(b == 0){
        document.getElementById("result").innerText =`Result: Error (Div by 0)`;
        return;
    }

    document.getElementById("result").innerText = `Result: ${a / b}`;
    console.log("Result of a / b: ", a / b);
}


function resetCalculator(){
     document.getElementById("num1").value = '';
     document.getElementById("num2").value = '';
     document.getElementById("result").innerText = 'Result: 0';
}
