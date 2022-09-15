let numtxt = document.getElementById('numtxt')
let selectNum = document.getElementById('selectNum')
let arrayNum = []
let res = document.getElementById('res')

function adicionar(num){
    num = [Number(numtxt.value)]
    arrayNum.push(num)

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
    res.innerHTML = arrayNum

}


function finalizar(){

}