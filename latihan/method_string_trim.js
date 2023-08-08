const readline = require('readline');
const { start } = require('repl');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan sebuah kalimat: ", (kalimat) => {
    //gunakan method trim untuk menghapus spasi di awal dan akhir kalimat
    const kalimatTrimmed = kalimat.trim();
    console.log(`kalimat setelah di-trim: ${kalimatTrimmed}`);
    rl.close();
});
