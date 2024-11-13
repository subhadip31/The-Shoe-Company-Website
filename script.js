const hamburgerBtn = document.querySelector('#hamburger-btn')

const closeHamburgerBtn = document.querySelector('#close-hamburger-btn')

const sideBar = document.querySelector('#side-bar')

hamburgerBtn.addEventListener('click', ()=>{
    sideBar.classList.remove('hidden')
    sideBar.classList.add('block')
    hamburgerBtn.classList.remove('block')
    hamburgerBtn.classList.add('hidden')
    
})

closeHamburgerBtn.addEventListener('click', ()=>{
    sideBar.classList.remove('block')
    sideBar.classList.add('hidden')
    hamburgerBtn.classList.remove('hidden')
    hamburgerBtn.classList.add('block')
})