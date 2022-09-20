let numtxt = document.getElementById('numtxt')
let selectNum = document.getElementById('selectNum')
let arrayNum = []
let res = document.getElementById('res')

function adicionar(num){
    num = [Number(numtxt.value)]
    arrayNum.push(num)
    res.innerHTML = '' //para limpar o res quando add outro numero


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
    //para apagar e focar novamente no input
    numtxt.value = ''
    numtxt.focus()
}


function finalizar(){

    if(arrayNum.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        res.innerHTML = `<p>Ao todo, temos ${arrayNum.length} números cadastrados. </p> <br>`


        res.innerHTML += arrayNum
    }


}