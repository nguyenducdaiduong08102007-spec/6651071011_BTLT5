function multiply() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Vui lòng nhập đủ hai số!";
        return;
    }
    
    const res = num1 * num2;
    document.getElementById("result").innerText = res;
}

function divide() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Vui lòng nhập đủ hai số!";
        return;
    }
    
    if (num2 === 0) {
        document.getElementById("result").innerText = "Không thể chia cho 0!";
        return;
    }
    
    const res = num1 / num2;
    document.getElementById("result").innerText = res;
}