const http = require('http');
const { brotliDecompressSync } = require('zlib');

const libros = [
    {'titulo': 'Codigo Limpio', 'autor': 'Robert C. Martin'},
    {'titulo': 'El Quijote de la Mancha', 'autor': 'Miguel de Cervantes'},
    {'titulo': 'Martin Rivas', 'autor': 'Alberto Blest Gana'},
]

const server = http.createServer(( request, response) =>{
    
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });

    let body = [];

    request.on('data', dataCliente => {
        body.push(dataCliente)
    })
    .on('end', () =>{
        body = Buffer.concat(body).toString();
        console.log(body);
    })

    response.end(
        JSON.stringify( {data: libros} )
    );
});

const PORT = 5000;

server.listen(PORT, () => console.log('El servidor se esta ejecutando'));

