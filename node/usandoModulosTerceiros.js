const _= require('lodash')

// generador de numeros aleatorios entre 1 e 1000 cada 2s (2000)
setInterval(() => console.log(_.random(1,1000)),2000)