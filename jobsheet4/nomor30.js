const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("masukkan sebuah kalimat: ", (kalimat) => {
    // gunakan method touppercase untuk mengubah kalimat menjadi huruf kecil
    const kalimatLowerCase = kalimat.toLocaleLowerCase();
    console.log(`kalimat dalam huruf kecil: ${kalimatLowerCase}`);
    rl.close();
});