function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}


// export { // SyntaxError: Named export 'sum' not found. The requested module './modules/sum-substract.js' is a CommonJS module, which may not support all module.exports as named exports.
module.exports = {
    sum,
    substract,
};