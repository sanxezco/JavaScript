function imprimirNomeGritado(obj)
{
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (error) {
        //throw new Error('Algo deu errado!')
        //throw true
        throw 55
    } finally {
        console.log('Final');
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)

