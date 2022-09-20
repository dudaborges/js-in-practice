let numtxt = document.getElementById('numtxt')
let selectNum = document.getElementById('selectNum')
let arrayNum = []
let res = document.getElementById('res')

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}




function adicionar(num){
    num = [Number(numtxt.value)]
    arrayNum.push(num)

    if(isNumero(num.value) && inLista(num.value, valores)){
        alert('tudo ok')
    }else{
        alert('Valor inválido ou já encontrado na lista.')
    }

    if(numtxt.value.length == 0){
        alert('Preencha o campo!')
    }else{
        if(num < 1 || num > 100){
            alert('Valor inválido!')
        }else{
            let item = document.createElement('option')
            item.text = `Valor ${num} adicionado.`
            selectNum.appendChild(item)
        }
    }

}


function finalizar(){


    res.innerHTML = `Ao todo, temos ${arrayNum.length} números cadastrados. <br>`

    res.innerHTML = `Ao todo, temos ${arrayNum.length} números cadastrados. <br>`


    res.innerHTML += arrayNum

}