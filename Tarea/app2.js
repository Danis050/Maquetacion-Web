const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa tu correo electrónico: ", function(correo) {
    let correoNormalizado = correo.toLowerCase();
    let dominioValido = correoNormalizado.endsWith("@gmail.com");
    console.log("Correo normalizado: " + correoNormalizado);
    if (dominioValido) {
        console.log("El dominio es válido.");
    } else {
        console.log("El dominio no es válido.");
    }
    rl.close();
});
