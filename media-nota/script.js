let num1 = document.getElementById('txtn1') 
let num2 = document.getElementById('txtn2')
let num3 = document.getElementById('txtn3')
let res = document.getElementById('res')

function gerar(){
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let n3 = Number(num3.value)
    let media = (n1 + n2 + n3) / 3
    res.innerText = `A sua média deu ${media}`
}