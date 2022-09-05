function contar(){
    var tinicio = document.getElementById('txtinicio')
    var tfim = document.getElementById('txtfim')
    var tpasso = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if(tinicio.value.length == 0 || tfim.value.length == 0 || tpasso.value.length == 0){
        alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = 'Contando: '
        var inicio = Number(tinicio.value)
        var fim = Number(tfim.value)
        var passo = Number(tpasso.value)
        //Sempre quando lidar tratamento de dados vindo de inputs, é preciso colocar .value para pegar o valor de dentro da caixinha.


        //o contador começa no número do início, o contador tem uma condição que não pode ultrapassar o fim, e o incremento no contador é adicionar o passo
        for(var contador = inicio; contador <= fim; contador += passo){
            //+= é o que ele já tem mais alguma coisa
            res.innerHTML += `${contador}`
        }
    }
}

