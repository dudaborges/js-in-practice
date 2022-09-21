let num = document.getElementById('txtn')

// console.log(Number.isInteger(num))

function verificar(){

    let n = Number(num.value)
    if (Number.isInteger(n)){
        alert('inteiro')
    }else{
        alert('quebrado')
    }
}

