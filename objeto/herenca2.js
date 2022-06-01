const pai = 
{
    nome: 'Pedro',
    corCabelo: 'Preto',
}

// crea objeto filha1 a partir de pai e define los atributos propios de filha1

const filha1 = Object.create(pai)
filha1.nome = 'Ana'

console.log(`${filha1.nome} tem cabelo ${filha1.corCabelo}`)

const filha2 = Object.create(pai,
    {
        nome: {value: 'Bia', writable: false, enumerable: true},
    })

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
