// Requerendo o modulo HTTP e o módulo de RAM Usage feito:
const http = require('http')
const stats = require('./ramUsage.js')

// Constantes de endereço:
const HOST = 'http://localhost'
const PORT = 3000

// Criando o Server:
http.createServer((req, res) => {

    let url = req.url

    // Conferindo a rota:
    if (url === '/stats'){

    res.end(JSON.stringify(stats, null, 2))

    } else{
        // Alteração no DOM com a url com o JSON com a 
        res.end('<h1>Welcome to my simple RAM usage viewer!</h1><a href="http://localhost:3000/stats">Click Here to see your RAM usage and some other stuff!</a>')
    }

}).listen(PORT, () => console.log(`Server is running at ${HOST}:${PORT}`))