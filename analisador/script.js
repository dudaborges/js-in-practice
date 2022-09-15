let numtxt = document.getElementById('numtxt')
let selectNum = document.getElementById('selectNum')
let arrayNum = []
let res = document.getElementById('res')

function adicionar(num){
    num = [Number(numtxt.value)]
    arrayNum.push(num)
    arrayNum.sort()

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

    // let indiceMaior = arrayNum.length - 1
    // res.innerHTML += `O maior valor informado foi ${arrayNum[indiceMaior]} <br>`


    res.innerHTML += arrayNum

}