const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('app-final2.json')
const middlewares = jsonServer.defaults()

const jsonFile = require('jsonfile')
var jsonQuery = require('json-query')

var file = 'app-final2.json';

var host = '127.0.0.1';
var puerto = '8080';

server.use(middlewares)

server.get('/producto',(req, res, next) => {
    console.log('entro Metodo get')
    next()
})

server.post('/producto',(req, res, next) => {
    console.log('entro Metodo Post')
    next()
})

server.delete('/producto',(req, res, next) => {
    console.log('entro Metodo delete')
    next()
})

server.put('/producto/:id',(req, res, next) => {
    console.log('entro Metodo put')
    next()
})

server.get('/autentication',(req, res, next) => {

    jsonFile.readFile(file, function(err, obj){
        var data = obj.usuario
        var usuario = data.filter(usuarios =>{
            return (usuarios.nickname == req.query.nickname && usuarios.password == req.query.password)
        }).length > 0;

        if(usuario == true){
            res.sendStatus(200)
        }
        else
        {
            res.sendStatus(401)
        }
    })
})

server.post('/usuario',(req, res, next) => {
    let body = JSON.parse(req)
    console.log(body);
})

server.use(router)
server.listen(puerto, host, () => {
    console.log('El servidor esta corriendo: ' + host + ':' + puerto);
})