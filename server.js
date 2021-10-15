const http = require('http');

const server = http.createServer(( request, response) =>{
    console.log(request);
    response.end();
});

const PORT = 5000;

server.listen(PORT, () => console.log('El servidor se esta ejecutando'));

