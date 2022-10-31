caculator = {
    add: function(a, b) {
        console.log(a + b);
    },
    sub: function(a, b) {
        console.log(a - b);
    },
    mul: function(a, b) {
        console.log(a * b);
    },
    div: function(a, b) {
        console.log(a / b);
    },
    rem: function(a, b) {
        console.log(a % b);
    },
    squ: function(a, b) {
        console.log(a ** b);
    }
};

const a = 6;
const b = 3;

caculator.add(a, b);
caculator.sub(a, b);
caculator.mul(a, b);
caculator.div(a, b);
caculator.rem(a, b);
caculator.squ(a, b);