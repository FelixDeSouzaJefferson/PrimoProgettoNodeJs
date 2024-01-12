const fs = require('fs');

let sillaba = "";
let array = [];
let rime = [];

fs.readFile('parole.txt', (error, data) => {
    array = String(data).split('\n');
    if (error) {
        throw error;
    };
});

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Inserire una parola:\n", parola => {
    if (parola.length >= 3) {
        sillaba = parola.substring(parola.length - 3);
        console.log(`Questa è la tua parola: ${parola}!`);
        array.forEach((e) => {
            if (e.length >= 3) {
                const x = e.substring(e.length - 3);
                if (x == sillaba) {
                    rime.push(e);
                    console.log(e);
                }
            }
        });
    } else {
        console.log('La parola deve avere almeno 3 lettere:\n');
    }
    readline.close();
});