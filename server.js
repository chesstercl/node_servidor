const http = require('http');

const server = http.createServer(( request, response) =>{
    

    response.write('Hola mundo');
    response.end();
});

const PORT = 5000;

server.listen(PORT, () => console.log('El servidor se esta ejecutando'));

