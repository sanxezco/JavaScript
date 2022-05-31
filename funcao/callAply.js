function getPreco (imposto= 0, moeda = 'R$')
{
    return `${this.nome} tiene un valor de ${moeda} ${this.preco * (1 - this.desconto) * (1 - imposto)}` 
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desconto: 0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = {nome: 'Fiat', preco: 49990, desconto: 0.2}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// diferencias entre .call y .apply

// para llamar una funcion con .call se le pasa el objeto al cual se le va aplicar la funcion y los atributos del metodo  ha ser aplicado como parametros noramles
console.log(getPreco.call(carro, 0.17, '$'))

// para llamar una funcion con .apply se le pasa el objeto al cual se le va aplicar la funcion y los atributos del metodo  ha ser aplicado como parametros en un array
console.log(getPreco.apply(carro, [0.17, '$']))