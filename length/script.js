//A propriedade "length" mostra o tamanho de uma string ou o tamanho de uma array

//na String
var texto = "Aprendedo length no JavaScript"
var tamanho = texto.length

console.log(`O texto "${texto}", tem ${tamanho} dígitos!`)

//na array
frutas = ["Banana", " Maça", " Laranja", " Melancia"]
var resultado = frutas.length

console.log(`A lista de frutas com ${frutas}, possui ${resultado} frutas!`)

//na estrutura de repetição

produtos = ["caneta", "borracha", "apontador", "régua", "lápis"]
qntProdutos = produtos.length

//valor iniciado, critério de parada e incremento
//vai repetir no máximo até a quantidade de produtos
console.log('Lista de produtos: ')
for (var repetir = 0; repetir < qntProdutos; repetir++){
    console.log(produtos[repetir])
}