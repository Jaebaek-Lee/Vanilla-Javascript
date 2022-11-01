calculator = {
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    },
    div: function(a, b) {
        return a / b;
    }
};

let a = parseInt(prompt("Please input first integer."));
let b = parseInt(prompt("Please input second integer."));

const add = calculator.add(a, b);
const sub = calculator.sub(a, b);
const mul = calculator.mul(a, b);
const div = calculator.div(a, b);

console.log(add, sub);
console.log(calculator.add(add, sub));