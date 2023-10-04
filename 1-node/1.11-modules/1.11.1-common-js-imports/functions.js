function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

/**
 * Esta funcion hace una division
 * @param {number} a Dividendo
 * @param {number} b Dividor
 * @return {number} result Resultado
 */
function divide(a, b) {
    return a / b;
}

module.exports = {
    sum: sum,
    substract,
    multiply,
    fnDivNumbers: divide,
};