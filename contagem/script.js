function contar(){
    var tinicio = document.getElementById('txtinicio')
    var tfim = document.getElementById('txtfim')
    var tpasso = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if(tinicio.value.length == 0 || tfim.value.length == 0 || tpasso.value.length == 0){
        alert('[ERRO] Faltam dados!')
    }else{
        alert('ok')
    }
}

