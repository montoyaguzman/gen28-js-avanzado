const fs = require('fs');
const path = './1-node/1.3-create-file/';
const fileName = 'patito.txt';
const contentFile = 'El sensei anda muy intenso hoy, debe ser marte retrogado...';
const destination = path + fileName;

fs.writeFile(destination, contentFile, (err) => {
    if (err) {
        throw err;
    } else {
        console.log(`Archivo creado exitosamente!`);
    }
});
// callback: es pasar una funcion a otro funcion dentro de sus parametros
// 1-node/1.3-create-file/index.js

