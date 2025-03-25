// numbers and operator variables
let num1;
let num2;
let op;
let prevKeyOp = false;
let currentNum = "";
// string to go onto the display
let displayString = "";


const display = document.querySelector(".display")

// TO DO
const parseInput = function(key) {
    
    
    const keyType = key.classList[1]
    const keyStr = key.innerText;
    switch(keyType) {

        case "clear": 
            currentNum = "";
            num1 = "";
            num2 = "";
            op = "";
            prevKeyOp = false;
            displayString = "";
            return;

        case "equals":

            num2 = parseInt(currentNum);
            if ((!num1 || !num2 || !op)){
                return;
            }
            displayString = (operator(num1, num2, op).toString());
            break;
        case "num":

            currentNum += keyStr;
            prevKeyOp = false;
            displayString += keyStr;
            break;
        case "op":
            if ((prevKeyOp == true || display.innerText == "")){
                console.log(`Operator n/a`)
                
            }
            op = keyStr
            currentNum = Number(displayString);
            displayString += keyStr;
            prevKeyOp = true;
            //console.log(currentNum)
            num1 = currentNum;
            currentNum = ""
            //console.log(`Was previous key an operator : ${prevKeyOp}`)
            break;
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
        return  "ERROR";
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
    return result;
}


// function to update display?

