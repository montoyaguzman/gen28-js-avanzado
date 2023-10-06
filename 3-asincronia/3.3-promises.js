/**
 * Promesas
 * Es algo que debe pasar en el futuro, pero pasara
 * Un evento que sucedera sin excepcion
 * new Promise
 * pending, reject(error), fullfilled(ok)
 */


console.log('============== BLOQUE 3 ==============');
const promise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2 Validando pago...');
            resolve();
        }, 0);
    })
};

console.log('1 Damos click en pagar'); 
promise()
    .then(() => {
        // more sentences
        let a = [];
        console.log('2.1 Checando inventario')
        // return a
    })
    // .then((a) => console.log('3 Todo joya!!'))
    .catch((error) => console.log('error: ', error))
    .finally(() => console.log('3 Todo joya!!'))
