const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// lectura de modo sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// lectura de modo asincrono com callback
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    //console.log(`${config.db.host}:${config.db.port}`)
    console.log(config)
})

// lectura de modo asincrono sem callback
const config = require('./arquivo.json')
console.log(config)
