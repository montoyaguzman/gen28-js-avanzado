import { sum, substract } from './modules/sum-substract.js';
import operations from './modules/multiply-divide.mjs';

function main() {
    console.log
    const resultSum = sum(10, 50);
    const resultSubs = substract(10, 5);
    const resultMult = operations.multiply(3, 50);
    const resultDiv = operations.divide(10, 2);

    console.log(`resultSum: ${resultSum}`); // 60
    console.log(`resultSubs: ${resultSubs}`); // 5
    console.log(`resultMult: ${resultMult}`); // 150
    console.log(`resultDiv: ${resultDiv}`); // 5
}

main();