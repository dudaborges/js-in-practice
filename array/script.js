// criar um array com os seguintes números: 10, 4, 7, 12

// em que posição está o 4?

// tem quantos ítens na lista?

// substitua o 7 pelo 8

// adicione o número 1 na lista

// imprima o seguinte formato de texto com todos os números:
// "O número x está na posição y"

console.log("Questão 1 - Criar um array com os seguintes números: 10, 4, 7, 12")
let num = [10, 4, 7, 12]
console.log(num)

console.log("Questão 2 - Em que posição está o 4?")
console.log(`O número 4 está na posição ${num.indexOf(4)}`)

console.log("Questão 3 - Tem quantos ítens na lista?")
console.log(`A lista tem ${num.length} ítens`)

console.log("Questão 4 - Substitua o 7 pelo 8")
num[2] = 8
console.log(num)

console.log("Questão 5 - Adicione o número 1 a lista")
num.push(1)
console.log(num)