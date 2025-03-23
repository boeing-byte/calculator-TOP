// numbers and operator variables
let a;
let b;
let op;

// string to go onto the screen
let inputStr = ""

let prevKeyOp;

const screen = document.querySelector(".screen")

// TO DO
const createInputStr = function(key) {
    let keyType = key.classList[1];

    if (keyType == "clear") {
        screen.innerText = ""
    } else if (keyType == "equals") {
        screen.innerText = "="
    } else if (keyType == "op") {
        screen.innerText = keyType
        // check if previous key was an operator
    } else {
        screen.innerText = key.innerText
    }
    console.log(`${key.innerText} ${key.classList[1]}`)
}
// function to take click event, check if it is "clear"
// then check if it is equals
// then check if it is an operator key,
// if it is, check if previous key was an operator
// if not, and it is a number, add it to string




// Add event listeners for click on each key
let keys = document.querySelectorAll(".key")
keys = Array.from(keys)
keys.forEach((key) => {key.addEventListener("click", () => createInputStr(key))});



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

// function to create input string on screen

// const createInputStr = function(key, keyType, inputStr, prevKeyOp) {
    
//     if (prevKeyOp && keyType != "num") {
//         prevKeyOp = true;
//         return [...key, prevKeyOp];
//     } else {
//     prevKeyOp = false;
//     return [...key, prevKeyOp];
//     }
//  }

// function to update screen?

