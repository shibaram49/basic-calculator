const display = document.getElementById("display");

function appendToDisplay(input) {
    const currentValue = display.value;


    const lastChar = currentValue.slice(-1);
    if (isOperator(lastChar) && isOperator(input)) {
        return;
    }

    
    if (input === '.' && currentValue.split(/[+\-*/]/).pop().includes('.')) {
        return;
    }

    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
      
        if (display.value.includes("/0")) {
            display.value = "Error";
            return;
        }

        const result = eval(display.value);

        
        display.value = isFinite(result) ? result : "Error";
    } catch (error) {
        display.value = "Error";
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}
