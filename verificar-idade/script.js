function verificar(){
    //criar as variáveis, para dar nome aos valores
    var anoNasc = document.getElementById('txtano')
    var mulher = document.getElementById('fem')
    var homem = document.getElementById('masc')

    //para calcular o ano de nascimento, precisamos pegar o ano atual
    var diaHoje = new Date()
    var anoAtual = diaHoje.getFullYear()

    //antes de calcularmos, precisamos preparar o sistema caso alguém não preencha algo, ou coloque uma data acima do ano atual
    //.value é para pegar o valor dentro do input(o que a pessoa vai escrever dentro)

    if (anoNasc.value.length == 0 || anoNasc.value > anoAtual){
        alert('[ERRO] Por favor, preencha os espaços corretamente!')
    }else{
        var res = document.getElementById('res')
        var idade = anoAtual - anoNasc.value
        

        if(idade <= 10 && idade > 0){
            res.innerText = `Você é um homem/mulher de ${idade} anos`
            
        }
    }


}

