// cuando hago CLICK a Header-button
// .Nav le hago TOGGLE a isActive

const header    = document.querySelector('.Header')
const hButton   = header.querySelector(".Header-button")
const nav       = document.querySelector(".Nav")
const nButton   = nav.querySelector(".Nav-button")

const headerBtn = ()=>{
    nav.classList.add('isActive')
}
hButton.addEventListener('click', headerBtn)

const navBtn = ()=>{
    nav.classList.remove('isActive')
}
nButton.addEventListener('click', navBtn)
    