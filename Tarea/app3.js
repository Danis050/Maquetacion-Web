const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa el código: ", function(codigo) {
    let ultimos = codigo.slice(-4);
    console.log("Últimos 4 caracteres: " + ultimos);
    rl.close();
});
