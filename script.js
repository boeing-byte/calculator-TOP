// numbers and operator variables
let num1;
let num2;
let op;
let prevKeyOp = false;
let currentNum = "";
let displayString = "";
let resultDisplayed = false;
let decimal = false;
let opChosen = false;

const display = document.querySelector(".display")

const parseInput = function(key) {


    const keyType = key.classList[1]
    const keyStr = key.innerText;

        
    if (resultDisplayed == true && keyType == "num") {
        displayString = `${num1}${op}`;
        // display.innerText = displayString;
        resultDisplayed = false;
    }


    switch(keyType) {

        case "clear":
             
            clearAll();
            break;
            
        case "equals":

            num2 = parseInt(currentNum);
            // checks for valid inputs ie 2 numbers and an operator
            if ((!num1 || !num2 || !op)){
                return;
            }
            displayString = (operator(num1, num2, op).toString());
            resultDisplayed = true;
            decimal = false;
            break;

        case "num":

            currentNum += keyStr;
            prevKeyOp = false;
            displayString += keyStr;
            break;

        case "op":

            if ((prevKeyOp == true || display.innerText == "")){
                console.log(`Operator n/a`)
                return;  
            }
            // makes second pressinng of operator cause it to act like equals
            // ie 2+2+ becomes 4+ etc..
            if (opChosen) {
                num2 = Number(currentNum);
                displayString = (operator(num1, num2, op).toString());
                resultDisplayed = true;
                decimal = false;
                opChosen = false;
            }
            op = keyStr
            currentNum = Number(displayString);
            displayString += keyStr;
            opChosen = true;
            prevKeyOp = true;
            num1 = currentNum;
            currentNum = ""
            break;
        
        case "point":
            // boolean tracking if decimal has already been pressed for this number
            if (decimal) {
                return;
            } else {
                decimal = true;
                displayString += keyStr;
            }
    }
    // reduce length of long float numbers on display
    if (displayString.length >= 15) {
        displayString = displayString.substring(0, 14)
    }
    display.innerText = displayString;
    
    return;
}
// function to take click event, check if it is "clear"
// then check if it is equals
// then check if it is an operator key,
// if it is, check if previous key was an operator
// if not, and it is a number, add it to string




// Add event listeners for click on each key
let keys = document.querySelectorAll(".key")
keys = Array.from(keys)
keys.forEach((key) => {key.addEventListener("click", () => parseInput(key))});



// functions for operations

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    if (b == 0) {
        return NaN;
    } else {
        return a / b;
    }
}

// operator function
const operator = function (a, b, op) {
    switch(op) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a,b);
            break;
        case '*':
            result = multiply(a, b);
            break
        case '/':
            result = divide(a, b);
            break
    }
    if (result == NaN) {
        return "ERROR"
    } else {
        return result;
    }   
}

// function to reset all variables
const clearAll = function() {

    currentNum = "";
    num1 = "";
    num2 = "";
    op = "";
    prevKeyOp = false;
    displayString = "";
    resultDisplayed = false;
    decimal = false;
    opChosen = false;
}

