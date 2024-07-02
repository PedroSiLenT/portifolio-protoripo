const hamburguer = document.querySelector('#hamburguer')
const menu = document.querySelector('.sidebar')
const menuClose = document.querySelector('.btn-close')

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('open')
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 800) {
        menu.classList.remove('open')
    }
})

menuClose.addEventListener('click', () => {
    menu.classList.remove('open')
}) 
let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})
