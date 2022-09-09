const url = "pag2.html"
const btn = document.getElementById('btn')

function openPag(url) {
    const novaJanela = window.open(url, '_self') //ou _blank para abrir em outra janela
    novaJanela.focus()
}

btn.addEventListener('click', () =>{
    openPag(url)
})