/*
El concepto de 'destrucutring' es una forma de extraer datos de un objeto o arreglo

Es representado por {}
*/

const pessoa = {
    nome: 'Ana',
    idade: 29,
    endereco: {
        cidade: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome)
console.log(idade)

// si se quisiera asignar otro nombre a las variables
const { nome: n, idade: i } = pessoa
console.log(n)
console.log(i)

// accesar a un objeto dentro de otro objeto
const { endereco: { cidade, numero } } = pessoa
console.log(cidade)
console.log(numero)


