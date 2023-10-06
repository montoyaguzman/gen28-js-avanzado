/**
 * BLOQUE 1 - Codigo sincrono
 * Una linea se ejecuta inmediatamente despues de la otra
 * no hay codigo dependiente o bloqueante.
 */
// console.log('============== BLOQUE 1 ==============');
// console.log('1 Damos click en pagar');
// for(let i=0; i<100; i++) {
//     console.log('2 Validando pago...');
//     // Esto no es sostenible en la vida real ya que se necesita usar
//     // cosas externar como Apis, WEB Api, acceso al sistema operativo, etc
// } 
// console.log('3 Todo joya!!');


/**
 * BLOQUE 2 ASINCRONO
 */
console.log('============== BLOQUE 2 ==============');
console.log('1 Damos click en pagar'); 

setTimeout(() => { // setTimeout va a ser la representacion de ese codigo dependiente (asincrono)
    console.log('2 Validando pago...');
}, 0);

console.log('3 Todo joya!!');