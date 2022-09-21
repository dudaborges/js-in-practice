let num1 = document.getElementById('txtn1') 
let num2 = document.getElementById('txtn2')
let num3 = document.getElementById('txtn3')
let res = document.getElementById('res')

function gerar(){
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let n3 = Number(num3.value)

    if (n1 < 1 || n1 > 10 || n2 < 1 || n2 > 10 || n3 < 1 || n3 > 10 ){
        alert('Preencha as notas entre 1 a 10!')
    }else{
        let media = (n1 + n2 + n3) / 3
        res.innerText = `A sua média deu ${media}`
        if (media >= 7){
            res.innerHTML += '<br> aprovado!'
        }else{
            res.innerHTML += '<br> reprovado!'
        }
    }



}