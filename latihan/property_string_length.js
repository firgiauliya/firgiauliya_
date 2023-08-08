// lenght
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan sebuah kalimat:", (inputString) => {
    //contoh property length
    console.log(`panjang kalimat: ${inputString.length}`);
    rl.close();
});

