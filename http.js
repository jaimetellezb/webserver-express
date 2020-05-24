/**
 * Este paquete ya viene con node
 */
const http = require('http');

/**
 * Se llama la función createServer(), la cual recibe un callback
 * como parámetro y dentro un request y un response
 * en este ejemplo se va escribir en el servidor "Hola Mundo"
 * luego end() para terminar el proceso y no se quede esperando
 * luego por medio del método listen() agregar el puerto por el 
 * cual el servidor va recibir peticiones
 */
// http.createServer((req, res) => {
//         res.write('Hola Mundo');
//         res.end();
//     })
//     .listen(8080);

// console.log('Escuchando el puerto 8080');

/**
 * También se puede devolver un JSON de la siguiente manera
 */

http.createServer((req, res) => {
        // en la cabecera pasar un statuscode 200
        // y un Content-Type : application/json
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Jaime',
            edad: 30,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');