const http = require('http');

const server = http.createServer((request, response) => {
    const status = '200';
    const mymeType = { 'Content-type' : 'text/html' };
    response.writeHead(status, mymeType)
    response.write('<html> <body> Hola desde node </html> </body>');
    response.end();
});

server.listen(5501);