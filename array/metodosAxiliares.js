const Nomes = ['Maria', 'José', 'João']

// métodos auxiliares precisam de uma callback function
// o index é para mostrar a posição do array (é opcional)
// forEach percorre por toda a array

Nomes.forEach((nome, index) => {
    console.log(`${index}: ${nome}`)
})

// map percorre por toda a array igual ao forEach e consegue modificar os itens
// dá para manipular objetos utilizando metodos auxiliares de array, é só colocar o objeto ({}) dentro de uma array ([])

const Pessoas = [{
    nome: 'Maria',
    idade: 18
}]

Pessoas.map((pessoa) => {
    console.log(`${pessoa.idade}`)
})

// é possível colocar vários objetos dentro de um array
// o filtro retorna objeto que tiver os requisitos definidos

const Livros = [
    {
        genero: 'Terror',
        valor: 24.99
    },

    {
        genero: 'Romance',
        valor: 14.99
    },

    {
        genero: 'Terror',
        valor: 29.99
    }
]

const filterTerror = Livros.filter((livro) => {
    return livro.genero === 'Romance'
})

console.log(filterTerror)

// every retorna sempre true ou false

const etapaEliminaria = [
    {curso: 'a'}
]

const requisitos = etapaEliminaria.every(requisito => {
    return requisito.curso == 'a'
})

if (requisitos == true){
    console.log('Atendeu aos requisitos!') 
}else{
    console.log('Não atendeu aos requisitos!') 
}






