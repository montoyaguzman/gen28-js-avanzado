/**
 * BLOQUE 1 - Codigo sincrono
 * Una linea se ejecuta inmediatamente despues de la otra
 * no hay codigo dependiente o bloqueante.
 */
console.log('============== BLOQUE 1 ==============');
console.log('Primero'); 
console.log('Segundo');
console.log('Tercero');


/**
 * BLOQUE 2 ASINCRONO
 */
console.log('============== BLOQUE 2 ==============');
console.log('Primero'); 

setTimeout(() => {
    console.log('Segundo');
}, 0);

console.log('Tercero');