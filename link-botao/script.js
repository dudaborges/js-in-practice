const url = "https://www.youtube.com/watch?v=vktXcI6QNe8&ab_channel=MatheusBattisti-HoradeCodar"

const btn = document.getElementById('btn')

function openPag(url) {
    const novaJanela = window.open(url, '_blank')
    novaJanela.focus()
}

btn.addEventListener('click', () =>{
    openPag(url)
})