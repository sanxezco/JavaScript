const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // importa o axios para fazer requisições

/*
Desafio: buscar la MUJER CHINA con menor SALARIO
*/

// função para buscar personas de china
const chineses = f => f.pais === 'China'

// função para buscar las mujeres
const mulheres = f => f.genero === 'F'

// função para buscar la persona de menor salario
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
    const func = funcionarios
                .filter(chineses) // filtra as chineses
                .filter(mulheres) // filtra as mulheres
                .reduce(menorSalario) // pega a menor salario
    console.log(func)
})

