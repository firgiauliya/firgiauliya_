const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan sebuah kalimat: ",(kalimat) => {
    rl.question("masukan kata yang ingin anda cari: ",(katacari) => {
        const indeksKataTerakhir = kalimat.lastIndexOf(katacari);
        if (indeksKataTerakhir !== -1) {
            console.log(`kata '${katacari}' ditemukan pada indeks terakhir: ${indeksKataTerakhir}`);
        } else {
            console.log(`kata '${katacari}' tidak ditemukan dalam kalimat.`);
        }
        rl.close();
    } )
} )