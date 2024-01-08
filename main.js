let http = require('http'); //require è la stessa cosa dell'import 
http.createServer(function (request, response) { //ho creato un server web con una sola funzione 
    response.writeHead(200, { 'Content-type' : 'text/plain' }); //scrivo l' header della risposta, con codice 200 (200 = ok) e il content type
    response.end("Hello World\n"); //scrivo il body della risposta
}).listen(8081);  //sulla porta 8081
console.log("Server running on port 8081\n");