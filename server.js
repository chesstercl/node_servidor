const http = require('http');
const { brotliDecompressSync } = require('zlib');

const libros = [
    {'titulo': 'Codigo Limpio', 'autor': 'Robert C. Martin'},
    {'titulo': 'El Quijote de la Mancha', 'autor': 'Miguel de Cervantes'},
    {'titulo': 'Martin Rivas', 'autor': 'Alberto Blest Gana'},
]

const server = http.createServer(( request, response) =>{
    
    const { method, url } = request;



    let body = [];

    request.on('data', dataCliente => {
        body.push(dataCliente)
    })
    .on('end', () =>{
        body = Buffer.concat(body).toString();

        let status = 404;
        const res = {
            status: 404,
            data: null
        }

        if(method === 'GET' && url == '/libros'){
            status = 200;
            res.status = 200;
            res.data = libros;
        }

        response.writeHead(status, {
            'Content-Type': 'application/json'
        });

        response.end(
            JSON.stringify( res )
        );
    });

    
});

const PORT = 5000;

server.listen(PORT, () => console.log('El servidor se esta ejecutando'));

