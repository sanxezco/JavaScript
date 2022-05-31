// usando funciones callback, hacer un arreglo a partir de otro arreglo siguiendo una condicion dada

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sin usar callback
const notasBaixas1 = []
for (let i = 0; i <= notas.length; i++)
{
    if (notas[i] < 7)
    {
        notasBaixas1.push(notas[i])
    }
}
console.log('Notas Baixas sin usar callback')
console.log(notasBaixas1)

//usando callback
const notasBaixas2 = notas.filter(function (notas)
{
    return notas < 7
})
console.log('Notas Baixas usando callback')
console.log(notasBaixas2)

//usando callback con arrow
const notasBaixas3 = notas.filter(notas => notas < 7)
console.log('Notas Baixas usando callback y arrow')
console.log(notasBaixas3)

