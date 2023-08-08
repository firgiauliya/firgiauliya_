const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan sebuah kalimat: ", (inputString) => {
    rl.question("masukan indeks yang ingin anda cek: ", (index) => {
        index = Number(index);
        if (index >= 0 && index < inputString.length) {
            const charachter = inputString.charAt(index);
            console.log(`karakter pada indeks ${index}: ${charachter}`);
        } else {
            console.log("indeks tidak valid!");
        }
        rl.close();
    });
});