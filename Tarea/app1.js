const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa tu nombre completo: ", function(nombre) {
    let nombreSinBordes = nombre.replace(/^\s+|\s+$/g, "");
    if (nombreSinBordes.length === 0) {
        console.log("Nombre vacío.");
        rl.close();
        return;
    }
    let sinEspacios = nombreSinBordes.replace(/\s+/g, "");
    console.log("Nombre ajustado: " + nombreSinBordes);
    console.log("Caracteres sin contar espacios: " + sinEspacios.length);
    rl.close();
});
