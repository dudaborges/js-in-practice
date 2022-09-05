// var n1 = 3
// var n2 = 5
// var contador = n1 + n2

// var contador = contador + n1
// contador += n1


var inicio = 1
var fim = 10
var passo = 2

//jeito errado
for (inicio = 1; inicio <= 10; inicio + passo){
    //Desse jeito o sistema vai imprimir infinitamente, porque a variável início sempre terá o mesmo valor e o passo também. Então sempre será feito a mesma conta, e sempre dará abaixo de 10. A conta nesse caso: 1 + 2 = 3 e 3 é menor que 10, então vai pra sempre imprimir, porque sempre dará o mesmo resultado
}

//jeito

for (pulando = inicio; pulando <= fim; pulando = pulando + passo){
    //O pulando começa com o valor inicial indicado, ele nunca pode passar do fim, e ele muda de valor toda vez que for adicionado um passo. Então começa valendo 1, nesse caso, depois é adicionado 2, e a variável pulando vira 3. Depois, é adicionado mais 2, até chegar ultrapassar o 10. 
}