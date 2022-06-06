const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto)
{
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id)
{
    return produtos[id] || {}
}

function getProdutos()
{
    return Object.values(produtos)
}

function excluirProduto(id)
{
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

// Como todos estos metodos solo son visibles dentro del modulo 'bancoDeDados' es necesario exportarlos para que sean visibles en todos los demas modulos que precisen  importarlos

module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}