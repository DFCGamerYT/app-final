//Importar modulo HTTP
var http = require('http');

//Definir Puerto y Direccion de nuestro servidor
var host = '127.0.0.1';
var puerto = '8080';

//Creamos el servidor
var servidor = http.createServer(function(llamado, respuesta){
    respuesta.end('Nuestro servidor Funciona! La direccion es: ' + llamado.url)
});

//Definimos la operacion listener mediante las variables definidas en el paso anterior
servidor.listen(puerto, host, function(){
    console.log('El servidor esta corriendo: ' + host + ':' + puerto);
});
