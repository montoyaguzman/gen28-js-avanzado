import { sum, substract } from './modules/sum-substract.js';
import * as Operations from './modules/multiply-divide.js';
import { root } from './modules/root.js';
// import roota from './modules/root.js';

function main() {
    console.log
    const resultSum = sum(10, 50);
    const resultSubs = substract(10, 5);
    const resultMult = Operations.multiply(3, 50);
    const resultDiv = Operations.divide(10, 2);

    console.log(`resultSum: ${resultSum}`); // 60
    console.log(`resultSubs: ${resultSubs}`); // 5
    console.log(`resultMult: ${resultMult}`); // 150
    console.log(`resultDiv: ${resultDiv}`); // 5

    roota();
}

main();