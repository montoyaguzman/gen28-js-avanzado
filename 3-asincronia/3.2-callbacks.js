/**
 * BLOQUE 3 Callbacks
 * Llamar a una funcion como parametro de otra
 */
const isOk = () => {
    console.log('3 Todo joya!!');
}

const deliveryTime  = () => {
    console.log('4 Llega mañana...');
}

const validatingPayment = (isOk, deliveryTime) => {
    setTimeout(() => { 
        let error = null;
        console.log('2 Validando pago...');
        console.log('2.1 Checando inventario');
        error = false;
        // other sentences
        if (!error) {
            isOk();
            deliveryTime();
        }
    }, 0);
}

console.log('============== BLOQUE 3 ==============');
console.log('1 Damos click en pagar'); 
validatingPayment(isOk, deliveryTime);

