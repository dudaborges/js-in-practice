function verificar(){
    //criar as variáveis, para dar nome aos valores
    var anoNasc = document.getElementById('txtano')
    var radioSexo = document.getElementsByName('radsex')

    //para calcular o ano de nascimento, precisamos pegar o ano atual
    var diaHoje = new Date()
    var anoAtual = diaHoje.getFullYear()

    //antes de calcularmos, precisamos preparar o sistema caso alguém não preencha algo, ou coloque uma data acima do ano atual
    //.value é para pegar o valor dentro do input(o que a pessoa vai escrever dentro)

    if (anoNasc.value.length == 0 || anoNasc.value > anoAtual){
        alert('[ERRO] Por favor, preencha os espaços corretamente!')
    }else{
        var genero = ''
        var idade = anoAtual - anoNasc.value
        var res = document.getElementById('res')
        

        
        //se por acaso o radio sexo estiver selecionado na posição um, a variável gênero vai receber a string 'homem'
        if(radioSexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){

            }


        }else{
            genero = 'Mulher'
        }
    }

    res.innerText = `Detectamos ${genero} com ${idade} anos`
}

