const pessoa =
{
    nome: "Rances",
    idade: 29,
    peso: 80
}

// obtener los valores de las keys
console.log(Object.keys(pessoa))

// obtener los valores
console.log(Object.values(pessoa))

//obtener lista de key:value
console.log(Object.entries(pessoa))

// recorrer un objeto
Object.entries(pessoa).forEach( ([key,value]) => {
    console.log(`${key}: ${value}`)
})

// definir nueva propiedad
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '17/01/1993'
})
console.log(pessoa)

//asignar nuevos atributos a un objeto. Primero se define el objeto destino y luego se le pasan los objetos a asignar (cuantos quieras)
const nacionalidad = {nacionalidad : 'cubana'}
const ciudadDeNacimeinto = {ciudadDeNacimiento : 'La Habana'}
const ciudadActual = {ciudadActual : 'São Paulo'}
const updatePessoa = Object.assign(pessoa, nacionalidad, ciudadDeNacimeinto, ciudadActual)
console.log(updatePessoa)

// hacer que el objeto sea inalterable
Object.freeze(pessoa)