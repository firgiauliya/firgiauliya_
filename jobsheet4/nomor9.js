const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan kalimat pertama: ", (kalimat1) => {
    rl.question("masukan kalimat kedua: ", (kalimat2) => {
        const kalimatGabungan = kalimat1.concat(kalimat2);
        console.log(`hasil penggabungan: ${kalimatGabungan}`);
        rl.close();
    });
});