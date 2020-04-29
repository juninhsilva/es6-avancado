//parametros obrigatórios
function multiply(a, b) {
    //testa se é válido
    // b = b || 1;
    b = typeof b === undefined ? 1 : b;
    return a * b;
}
console.log(multiply(5, 5));

//com es6
function multiplyES6(a = 1, b = 1) {
    return a * b;
}

console.log(multiplyES6(5 * 0));

function randomNumber() {
    return Math.random() * 10;
}

//lazy evaluation
function lazyEvaluation(a, b = randomNumber()) {
    return a * b;
}

console.log(lazyEvaluation(5));