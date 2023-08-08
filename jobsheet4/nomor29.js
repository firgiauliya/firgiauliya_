const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("masukkan sebuah kalimat: ", (kalimat) => {
    // gunakan method touppercase untuk mengubah kalimat menjadi huruf besar
    const kalimatUpperCase = kalimat.toUpperCase();
    console.log(`kalimat dalam huruf besar: ${kalimatUpperCase}`);
    rl.close();
});