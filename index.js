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

let btnTopo = document.querySelector('#btnTopo')

window.onscroll = function () {
    scrollFunction()
}

function scrollFunction () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTopo.style.display = 'block'
    } else {
        btnTopo.style.display = 'none'
    }
}


function backTop () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}