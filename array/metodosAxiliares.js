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
    {
        nome: 'Maira',
        sexo: 'F'
    },

    {
        nome: 'Gisele',
        sexo: 'F'
    },

    {
        nome: 'Bianca',
        sexo: 'f'
    }
]

const requisitos = etapaEliminaria.every(requisito => {
    return requisito.sexo == 'F' || 'f'
})

if (requisitos == true){
    console.log('Atendeu aos requisitos!') 
}else{
    console.log('Não atendeu aos requisitos!') 
} 

const cachorros = [

    {
        nome: 'jully',
        raca: 'vira-lata'
    },

    {
        nome: 'bibi',
        raca: 'vira-lata'
    },

    {
        nome: 'gisele',
        raca: 'pinscher'
    },

    {
        nome: 'olga',
        raca: 'pug'
    }
]

const encontrarCachorro = cachorros.find(cachorro => {
    return cachorro.nome == 'jully' && cachorro.raca == 'vira-lata'
})

if (encontrarCachorro){
    console.log(`Cachorro encontrado! Informações: ${encontrarCachorro.nome}, ${encontrarCachorro.raca}`)
}else{
    console.log('Não existe!')
}


const candidatos = [
    {
        nome: 'Marilene',
        sexo: 'F',
        raca: 'Amarelo(a)',
        idade: 23
    },

    {
        nome: 'Karol',
        sexo: 'F',
        raca: 'Preto(a)',
        idade: 17
    },

    {
        nome: 'Pedro Henrique',
        sexo: 'M',
        raca: 'Branco(a)',
        idade: 29
    },

    {
        nome: 'Thiago',
        sexo: 'M',
        raca: 'Branco(a)',
        idade: 17
    }
]

const canditadoPreto = candidatos.some(candidato => {

    return candidato.raca == 'Preto(a)'
})

if(canditadoPreto){
    console.log('Existe!')

}else{
    console.log('Nenhum foi encontrado!')
}





