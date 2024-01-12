import { createRequire } from "module";
import fetch from "node-fetch";

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const require = createRequire(import.meta.url);

function login(username, password) {
    return new Promise((resolve, reject) => {
        fetch("https://ws.progettimolinari.it/credential/login", {
            method: "Post",
            headers: {
                "content-type": "application/json",
                key: "52e671cb-61fc-4c68-845e-520773ac9edc",
            },
            body: JSON.stringify({ username: username, password: password }),
        })
            .then((element) => element.json())
            .then((element) => {
                if (element.result) {
                    resolve(true);
                } else {
                    reject(false);
                };
            })
            .catch((error) => reject(error));
    });
};

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Inserire un username:\n", username => {
    readline.question("Inserire una password:\n", password => {
        console.log(`Questo è lo username: ${username}!\nQuesta è la password: ${password}!\n`);
        login(username, password).then((response) => {
            console.log("Login: " + response);
        });
        readline.close();
    });
});