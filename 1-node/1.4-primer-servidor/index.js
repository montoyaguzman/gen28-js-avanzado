const http = require('http');

const server = http.createServer((request, response) => {
    const status = '200';
    const mimeType = { 'Content-type' : 'text/html' };
    response.writeHead(status, mimeType)
    response.write('<html> <body> Adios desde node </html> </body>');
    response.end();
});

server.listen(5501);

console.log('Servidor iniciado...');