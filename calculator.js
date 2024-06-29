
const calculate = {
    add: (a, b) => {
        //console.log(`${a} + ${b} = `, a + b);
        return a + b;
    },
    min: (a, b) => {
        //console.log(`${a} - ${b} = `, a - b);
        return a - b;
    },
    mul: (a, b) => {
        //console.log(`${a} * ${b} = `, a * b);
        return a * b;
    },
    div: (a, b) => {
        //console.log(`${a} / ${b} = `, a / b);
        return a / b;
    },
    pow: (a, b) => {
        //console.log(`${a} ** ${b} = `, a ** b);
        return a ** b;
    }                
};

const addResult = calculate.add(2, 3);           // 5
const minResult = calculate.min(addResult, 3);   // 2
const mulResult = calculate.mul(2, minResult);   // 4
const divResult = calculate.div(mulResult, 3);   // 1.333
const powResult = calculate.pow(divResult, 3);   // 1.333 ** 3

console.log(addResult);
console.log(minResult);
console.log(mulResult);
console.log(divResult);
console.log(powResult);