const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan sebuah kalimat: ", (kalimat) => {
    rl.question("masukan kata yang ingin anda cari: ", (katacari) =>{
        const indeksKata = kalimat.indexOf(katacari);
        if (indeksKata !== -1) {
            console.log(`kata '${katacari}' ditemukan pada indeks: ${indeksKata}`);
        } else {
            console.log(`kata '${katacari} tidak ditemukan dalam kalimat.`);
        }
        rl.close();
    });
});