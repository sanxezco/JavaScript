const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// remueve el ultimo elemento del arreglo
pilots.pop()
console.log(pilots)

//adiciona un nuevo poli al final del arreglo
pilots.push('Verstappen')
console.log(pilots)

//remueve el primer elemento del arreglo
pilots.shift()
console.log(pilots)

//adiciona un nuevo poli al inicio del arreglo
pilots.unshift('Hamilton')
console.log(pilots)

// .splice(#,#,...) remueve y/o adiciona elementos en un arreglo
// ex.: adicionar 2 elementos a partir de la posicion 2 sin remover ningun elemento
pilots.splice(2, 0, 'Bottas', 'Massa')
console.log(pilots)

// ex.:remover 1 elemento a partir de la posicion 3
pilots.splice(3, 1)
console.log(pilots)

// crear un nuevo arreglo a partir de un arreglo en la posicion indicada
const algunsPilotos1 = pilots.slice(2)
console.log(algunsPilotos1)

// crear un nuevo arreglo a partir de un arreglo definiendo un intervalo (no incluye el ultimo elemento definido)
const algunsPilotos2 = pilots.slice(1, 4)
console.log(algunsPilotos2)