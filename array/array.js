// definicion de un arreglo usando 'new' (NO RECOMENDADA)
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

// definicion de un arreglo usando a notacion literal (RECOMENDADA)
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)
console.log(aprovados[0])

// substituir un elemento en un arreglo
aprovados[2] = 'Paulo'
console.log(aprovados)

//adicionar nuevo elemento al final del arreglo
aprovados.push('Abia')
console.log(aprovados)

//tamanho del arreglo
console.log(aprovados.length)

//ordenando el arreglo alfabeticamente
aprovados.sort()
console.log(aprovados)

// excluir elemento del arreglo dejando un espacio no definido en lugar del elemento eliminado
//delete aprovados[1]
//console.log(aprovados)

// excluir tantos elementos del arreglo a partir de un indice .. ex: borrar 2 elementos a partir de la posicion 1
aprovados.splice(1, 2)
console.log(aprovados)

// adiccionar tantos elementos al arreglo a partir de una posicion
aprovados.splice(2, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)