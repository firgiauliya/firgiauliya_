const readline = require('readline');
const { start } = require('repl');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan sebuah kalimat: ", (kalimat) => {
    //gunakan method toUpperCase untuk mengubah kalimat menjadi huruf besar
    const kalimatUpperCase = kalimat.toUpperCase();
    console.log(`kalimat dalam huruf besar: ${kalimatUpperCase}`);
    rl.close();
});
