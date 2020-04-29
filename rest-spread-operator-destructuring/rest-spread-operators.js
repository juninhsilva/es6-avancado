function sum(a, b) { return a + b; }
console.log(sum(5, 5));

function sumWithArgs(a, b) {
    var value = 0;
    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}

console.log(sumWithArgs(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//com es6
//rest operator ...
function sumRest(...args) {
    return args.reduce((acc, value) =>
        acc + value, 0);
}

console.log(sumRest(1, 2, 3, 4, 5, 6, 7, 8));

const minus = (a, b, ...args) => {
    console.log(a, b);
    console.log(args);
}

console.log(minus(1, 2, 3, 4, 5));

const xx = (...args) => args.reduce((acc, value) => acc * value, 1);
console.log(xx(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const sumApply = (...rest) => {
    return xx.apply(undefined, rest);
}

console.log(sumApply(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12));

//spread operator
//serve para strings, arrays e objetos literais e iteráveis
const sumSpread = (...rest) => {
    return xx(...rest);
}

console.log(sumSpread(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12));

const obj = {
    text = 'Texto do objeto'
}

const objSpread = {
    test: 'olá',
    ...obj
};

console.log(objSpread);