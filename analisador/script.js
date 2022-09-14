let numtxt = document.getElementById('numtxt')
let selectNum = document.getElementById('selectNum')

function adicionar(num){

    if(numtxt.value.length == 0){
        alert('Preencha o campo!')
    }else{
        let num = Number(numtxt.value)
        if(num < 1 || num > 100){
            alert('Valor inválido!')
        }else{
            let item = document.createElement('option')
            item.text = `Valor ${num} adicionado.`
            selectNum.appendChild(item)

            let arrayNum = [num]
        }
    }

}