// funcion sin retorno

function imprimirSoma(a,b)
{
    console.log(a+b)
}

imprimirSoma(2,3)

// funcion con retorno

function soma(a,b)
{
    return a+b
}
console.log(soma(2,4))

// armazenando uma funcion em uma variavel
const imprimeSoma = function (a,b)
{
    console.log( a + b )
}

imprimeSoma(12,3)

// funcion arrow

const suma = (a,b) => 
{
    return a + b
}

console.log(suma(2,33))

// funcion arrow con retorno implicito
const subtracao = (a,b) => a - b
console.log(subtracao(10,4))

const print = texto => console.log(texto)
print("texto")