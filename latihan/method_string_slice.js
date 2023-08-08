const readline = require('readline');
const { start } = require('repl');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan sebuah kalimat: ", (kalimat) => {
    rl.question("masukan indeks awal: ", (startIndex) => {
        rl.question("masukan indeks akhir: ", (endIndex) => {
            // konversi nilai indeks ke tipe number
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            //gunakan method slice untuk mengambil substring dari startIndex hingga endIndex
            const slicedSubstring = kalimat.slice(startIndex, endIndex);
            console.log(`hasil slice dari indeks ${startIndex} hingga ${endIndex}: ${slicedSubstring}`);
            rl.close();
        });
    });
});