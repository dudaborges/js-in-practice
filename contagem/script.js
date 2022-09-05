function contar(){
    let tinicio = document.getElementById('txtinicio')
    let tfim = document.getElementById('txtfim')
    let tpasso = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if(tinicio.value.length == 0 || tfim.value.length == 0 || tpasso.value.length == 0){
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = 'Contando: '
        let inicio = Number(tinicio.value)
        let fim = Number(tfim.value)
        let passo = Number(tpasso.value)
        //Sempre quando lidar tratamento de dados vindo de inputs, é preciso colocar .value para pegar o valor de dentro da caixinha.

        if(inicio < fim){
        
        //o contador começa no número do início, o contador tem uma condição que não pode ultrapassar o fim, e o incremento no contador é adicionar o passo
        for(let contador = inicio; contador <= fim; contador += passo){
            //+= é o que ele já tem mais alguma coisa
            res.innerHTML += `${contador} \u{1F449}`
        }
        
        }else{
            //fazer do menor pro maior
            for(let contador = inicio; contador >= fim; contador -= passo){
                res.innerHTML += `${contador} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}

