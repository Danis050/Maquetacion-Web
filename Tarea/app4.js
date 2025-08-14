const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa el mensaje: ", function(mensaje) {
    let posicion = mensaje.indexOf("error");
    if (posicion !== -1) {
        console.log("La palabra 'error' aparece en la posición: " + posicion);
    } else {
        console.log("No se encontró la palabra 'error'.");
    }
    rl.close();
});
