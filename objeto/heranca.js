// cadena de prototipo

const avo =
{
    attr1: 'A',
}

// objeto 'pai' hereda de 'avo'
const pai =
{
    __proto__: avo,
    attr2: 'B',
}

// objeto 'filho' hereda de 'pai'
const filho =
{
    __proto__: pai,
    attr3: 'C',
}

console.log(filho.attr1, filho.attr2, filho.attr3)


const carro =
{
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta)
    {
        if (this.velAtual + delta <= this.velMax)
        {
            this.velAtual += delta
        }
        else
        {
            this.velAtual = this.velMax
        }
    },
    status()
    {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}



const ferrari =
{
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo =
{
    modelo: 'V40',
    status()
    {
        return `${this.modelo}: ${super.status()}`
    }

}

// otro metodo de definir que un objeto hereda de otro
// ferrari hereda de carro
Object.setPrototypeOf(ferrari, carro)
console.log(ferrari)
console.log(volvo)

ferrari.acelerarMais(300)
console.log(ferrari.status())