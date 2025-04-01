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

// TO DO 

// DIVISION BY 0
// DEL KEY?
// PERCENT AND NEGATIVE KEY
const display = document.querySelector(".display")

const parseInput = function(key) {


    const keyType = key.classList[1]
    const keyStr = key.innerText;

        
    if (resultDisplayed == true && keyType == "num") {
        displayString = `${num1}${op}`;
        display.innerText = displayString;
        resultDisplayed = false;
    }


    switch(keyType) {

        case "clear":
             
            clearAll();
            break;
            
        case "equals":

            num2 = Number(currentNum);
            // checks for valid inputs ie 2 numbers and an operator
            if ((!num1 || (!num2 && num2 != 0) || !op)){
                displayString = "ERROR";
                return;
            }
            displayString = (operator(num1, num2, op).toString());
            resultDisplayed = true;
            decimal = false;
            opChosen = false;
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
            decimal = false;
            num1 = currentNum;
            currentNum = ""
            break;
        
        case "point":
            // boolean tracking if decimal has already been pressed for this number
            if (decimal) {
                return;
            } else {
                decimal = true;
                currentNum += keyStr;
                displayString += keyStr;
            }
            break;
        
        case "plusminus":
            if (!opChosen && currentNum) {
                displayString = (Number(displayString) * -1);
            }
            break;

        // case "delete":
        //     displayString.pop();
        //     break;

    }
    
    createDisplay(displayString);
    // call function to display values on screen
    
    return;
}





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
    if (b === 0) {
        return "lmao";
    }
    return a / b;
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

// function to reset all variables to initial values
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
    display.innerText = displayString;
}

const createDisplay = function(displayString) {
    // takes the display string and formats it to fit on the display as required
    // display length = 14 maximum
    // if (displayString.length > 12 && !opChosen) {
    //     displayString = eNotation(Number(currentNum))
    // }
    if (display.innerText == "lmao") {
        return;
    }
     display.innerText = displayString;

}

const eNotation = function(num) {
    // takes a long input number and returns a string with it as e notation ie 500000 = 5.0e+5 -100000 = -1.0e5
    return(num.toExponential(2).toString())
}

