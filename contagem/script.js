function contar(){
    var tinicio = document.getElementById('txtinicio')
    var tfim = document.getElementById('txtfim')
    var tpasso = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    var inicio = Number(tinicio)
    var fim = Number(tfim)
    var passo = Number(tpasso)

    if(inicio == 0 || fim == 0){
        res.innerText = 'Impossível contar!'
    }else if(passo == 0){
        alert('Passo inválido! Considerando PASSO 1')
        for(inicio = 1; inicio >= fim; passo++){

        }
    }

}

