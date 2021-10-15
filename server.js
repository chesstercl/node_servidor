const http = require('http');

const libros = [
    {'titulo': 'Codigo Limpio', 'autor': 'Robert C. Martin'},
    {'titulo': 'El Quijote de la Mancha', 'autor': 'Miguel de Cervantes'},
    {'titulo': 'Martin Rivas', 'autor': 'Alberto Blest Gana'},
]

const server = http.createServer(( request, response) =>{
    
    response.setHeader('Content-Type', 'application/json');
    response.end(
        JSON.stringify( {data: libros} )
    );
});

const PORT = 5000;

server.listen(PORT, () => console.log('El servidor se esta ejecutando'));

