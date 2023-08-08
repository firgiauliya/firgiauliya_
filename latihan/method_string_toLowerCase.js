const readline = require('readline');
const { start } = require('repl');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan sebuah kalimat: ", (kalimat) => {
    //gunakan method toLowercase untuk mengubah kalimat menjadi huruf kecil 
    const kalimatLowerCase = kalimat.toLowerCase();
    console.log(`kalimat dalam huruf kecil: ${kalimatLowerCase}`);
    rl.close();
});