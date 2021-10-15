const http = require('http');

const server = http.createServer(( request, response) =>{
    
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1>Hola mundo</h1>');
    response.end();
});

const PORT = 5000;

server.listen(PORT, () => console.log('El servidor se esta ejecutando'));

