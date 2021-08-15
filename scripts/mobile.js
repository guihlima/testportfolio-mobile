const btnMenu = document.getElementById('btn-menu')

function aparecerMenu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('ativo')
}

btnMenu.addEventListener('click', aparecerMenu)