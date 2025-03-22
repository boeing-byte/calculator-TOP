// numbers and operator variables
let a;
let b;
let op;

// functions for operations
// add
const add = function(a, b) {
    return a + b;
}

// subtract
const subtract = function(a, b) {
    return a - b;
}

// multiply
const multiply = function(a, b) {
    return a * b;
}

// divide
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

console.log(operator(4, 2, '+'))
console.log(operator(4, 2, '-'))
console.log(operator(4, 2, '/'))
console.log(operator(4, 2, '*'))
console.log(operator(4, 0, '/'))