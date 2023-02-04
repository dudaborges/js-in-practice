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



