function Carro (velocidadeMaxima = 200, delta = 5)
{
    // atributo privado (solo acceso dentro de la funcion)
    let velocidadeAtual = 0

    // metodo publico (usando this.)
    this.acelerar = function ()
    {
        if (velocidadeAtual + delta <= velocidadeMaxima)
        {
            velocidadeAtual += delta
        }
        else
        {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico para solamente obtener el valor de la velocidad actual
    this.getVelocidadeAtual = function ()
    {
        return velocidadeAtual
    }
}

const fiat = new Carro
fiat.acelerar()
console.log(fiat.getVelocidadeAtual())

const lambo = new Carro(350, 25)
lambo.acelerar()
lambo.acelerar()
lambo.acelerar()
console.log(lambo.getVelocidadeAtual())