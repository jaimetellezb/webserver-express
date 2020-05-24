const express = require("express");
const hbs = require("hbs");
require("./hbs/helpers");
const app = express();

// Para obtener el puerto del servidor asignado por Heroku
const port = process.env.PORT || 3000;

/**
 * Se pueden usar Middleware, que es una instrucción o un callback
 * que se va ejecutar siempre
 * en este caso usaremos todo lo que haya en /public
 * esto también hace que cualquier persona pueda verlo
 *
 * Para acceder se hace mediante localhost:3000/home.html o localhost:3000/index.html
 */
app.use(express.static(__dirname + "/public"));

//Express HBS engine (handlerbars)
//partials
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

/**
 * este método lo que hace es una petición GET cuando
 * el path es /
 */
app.get("/", (req, res) => {
    // renderiza el archivo home.hbs
    // y se envía un arreglo con los argumentos que se usan en la página
    res.render("home", {
        nombre: "Jaime",
    });
});

/**
 * se pueden crear varios métodos
 * con diferente path
 */
app.get("/about", (req, res) => {
    res.render("about", {});
});

/**
 * este método recibe el puerto y un callback con un String que muestra en consola
 *
 * (al subirlo a Heroku no sabemos que puerto nos dará)
 * Para ejecutar la clase server.js debe agregarse en el package.json
 * en la parte de scripts la siguiente línea
 * "start": "node server.js",
 */
app.listen(port, () =>
    console.log(`Escuchando peticiones en el puerto ${port}`)
);