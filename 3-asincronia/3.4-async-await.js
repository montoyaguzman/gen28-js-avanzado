/**
 * BLOQUE 4 ASYNC/AWAIT
 * async para poder dentro la funcion la keyword await
 * await como la forma de controlar la asincronia, el codigo enfrente se espere
 */

const promise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2 Validando pago...');
            
            const statusArray = [200, 500];
            const randomResponse = statusArray[Math.floor(Math.random() * statusArray.length)];
            console.log('status:' , randomResponse);
            if (randomResponse === 200) {
                resolve();
            } else {
                reject();
            }

            resolve();
        }, 0);
    })
};

const main = async () => {
    console.log('============== BLOQUE 4 ==============');
    console.log('1 Damos click en pagar'); 
    
    try {
        await promise();
        console.log('3 Todo joya!!');
    } catch (error) {
        console.log('sucedio un error', error);
    }
    
}

main();