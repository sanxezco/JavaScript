const porta = 3003

const express = require('express')
const app = express()

// haciendo uso de funciones middleware. Implementamos una funcion middleware que imprime un esstado en la consola y luego hace el request get

app.get('/produtos', (req, res, next) => 
{
    console.log('Middleware 1')
    next()
})

app.get('/produtos', (req, res, next) => 
{
    res.send(
        {
            nome: 'Notebook',
            preco: 1299.99,
            desconto: 0.15
        }
    )
})


app.listen(porta, () =>
{
    console.log(`Servidor está executando na porta ${porta}`)
})
