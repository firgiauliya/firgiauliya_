const readline = require('readline');
const { start } = require('repl');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan sebuah kalimat: ", (kalimat) => {
    rl.question("masukan indeks awal: ", (startIndex) => {
        rl.question("masukan panjang substring: ", (length) => {
            // konversi nilai indeks dan panjang ke tipe number
            startIndex = Number(startIndex);
            length = Number(length);
            // gunakan method substr untuk mengambil substring dari startIndex dengan panjang length
            const substringResult = kalimat.substr(startIndex, length);
            console.log(`kasil substring dari indeks ${startIndex} dengan panjang ${length}: ${substringResult}`);
            rl.close();
        });
    });
});