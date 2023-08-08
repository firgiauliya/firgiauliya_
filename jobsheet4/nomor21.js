const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan sebuah kalimat: ", (kalimat) => {
    rl.question("masukan indeks awal: ", (startIndex) =>{
        rl.question("masukan indeks akhir:", (endIndex) => {
            startIndex = Number(startIndex);
            endIndex -= Number (endIndex);
            const substringResult = kalimat.substring(startIndex, endIndex);
            console.log(`hasil substring dari indeks ${startIndex} hingga ${endIndex}: ${substringResult}}`);
            rl.close();
        });
    });
});