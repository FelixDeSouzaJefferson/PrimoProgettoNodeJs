import { createRequire } from "module";
import  fetch  from "node-fetch";

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

function salvaDati(dict, key) {
    fetch("https://ws.progettimolinari.it/cache/set", {
        method: "Post",
        headers: {
            "content-type": "application/json",
            key: "52e671cb-61fc-4c68-845e-520773ac9edc",
        },
        body: JSON.stringify({
            key: key,
            value: JSON.stringify(dict),
        }),
    })
        .then((element) => element.json())
        .then((element) => console.log(element))
        .catch((error) => console.error(error));
};

function recuperaDati(chiave) {
    return new Promise((resolve, reject) => {
        fetch("https://ws.progettimolinari.it/cache/get", {
            method: "Post",
            headers: {
                "content-type": "application/json",
                key: "52e671cb-61fc-4c68-845e-520773ac9edc",
            },
            body: JSON.stringify({ key: chiave }),
        })
            .then((element) => {
                resolve(element.json());
            })
            .catch((error) => reject(error));
    });
};

const require = createRequire(import.meta.url);

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Inserire una chiave:\n", chiave => {
    readline.question("Inserire un valore:\n", valore => {
        console.log(`Questa è la chiave: ${chiave}!\nQuesto è il valore: ${valore}!\n`);
        salvaDati(valore, chiave);
        readline.close();
    });
});