const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("masukkan sebuah kalimat: ", (kalimat) => {
    rl.question("masukkan indeks awal: ", (startIndex) => {
        rl.question("masukkan panjang substring: ", (length) => {
            // konversi nilai indeks dan panjang ke tipe number
            startIndex = Number(startIndex);
            endIndex = Number(length);
            // gunakan method substr untuk mengambil substring dari starindex dengan panjang index
            const substringResult = kalimat.substr(startIndex, length);
            console.log(`hasil substring dari indeks ${startIndex} dengan panjang ${length}: ${substringResult}`);
            rl.close();
        });
    });
});