let array = [1, 1];

function fibonacci(n, array) {
    return new Promise((resolve, reject) => {
        if (array.length < n) {
            array[array.length] = array[array.length - 1] + array[array.length - 2];
            setImmediate(() => {
                fibonacci(n, array);
            });
        } else {
            console.log("Questa è la lista di Fibonacci: " + array);
            resolve(array);
        };
    });
};

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Inserire un numero:\n", n => {
    console.log(`Questo è il numero inserito: ${n}!\n`);
    readline.close();
    fibonacci(n, array).then((data) => {
        console.log(data);
    }).catch(() => {
       reject();
    });
});