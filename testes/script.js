// function ver(){
//     var n1 = document.getElementById('n1')
//     var n2 = document.getElementById('n2')
//     var soma = n1.value + n2.value
//     var res = document.getElementById('res')

//     //.value pega o valor de dentro do input
//     res.innerHTML = soma

// }

// var hoje = new Date()
// var anoAtual = hoje.getFullYear()
// var n = '2'
// var soma = anoAtual - n
// console.log(soma)

//subtração não gera concatenação
//É preciso converter a string para number, quando for adição.

function ver(){
    let nome = document.getElementById('txtnome')
    let res = document.getElementById('res')

    let qntLetras = nome.value.length

    res.innerHTML = `Seu nome tem ${qntLetras} letras`
}

//.value.length serve para ver a quantidade de dígitos tanto para number quanto para string

var n1 = 2
var res = n1.value 

//Não é q o .value não funciona apenas com String, é que o .value serve para PEGAR O VALOR NO INPUT. Não faz sentido usá-lo assim e uma variável.