// modo clasico de definir uma função
let doblo = function(numero)
{
    return numero * 2
}

// modo arrow de definir uma função
doblo = (numero) =>
{
    return numero * 2
}

// modo simplificado de definir uma função arrow
doblo = numero => numero * 2

// en caso de apenas um parametro, pode-se omitir os parenteses

console.log(doblo(2))