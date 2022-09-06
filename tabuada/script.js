function tabuada(){
    let n = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (n.value.length == 0){
        alert('Por favor, digite um número!')
    }else{
        let num = Number(n.value)

        tab.innerHTML = '' //para limpar a área de tabuada antes de calcular um novo número
        for(let c = 1; c <= 10; c++){
            let conta = c * num
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${conta}`
            tab.appendChild(item)
        }
    }
}

//let item = document.createElement('option')
//item.text = `isso * isso = da isso`
//tab.appendChild(item)
//appendChile significa adicionar um elemento filho