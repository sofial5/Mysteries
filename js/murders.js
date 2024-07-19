// Cuando hago CLICK en .Warning
// .Images ADD isVisible

const wrapper = document.querySelector('.Wrapper')
const button = wrapper.querySelector('.Warning')
const tortures = document.querySelector('.Tortures')
const images = tortures.querySelector('.Images')

console.log(button)
console.log(images)

const botones = ()=>{
    images.classList.toggle('isVisible')
    button.classList.toggle('isActive')
}
button.addEventListener('click', botones)

// Cuando hago click en .Card-svg 
// A letterlightbox le añado ADD isVisible

const carta = document.querySelector('.Card')
const card = carta.querySelector('.Card-svg')
const sylviaLetter = document.querySelector('.Letter')
const letterLightbox = sylviaLetter.querySelector('.Card-lightbox')

const letter = ()=>{
    console.log('abre carta')
    letterLightbox.classList.add('isVisible')
}
card.addEventListener('click', letter )

// CUANDO HAGO CLICK EN .Close-btn
// A letterLightbox le REMOVE isVisible

const closeBtn = document.querySelector('.Close-btn')

const closeButton = ()=>{
    letterLightbox.classList.remove('isVisible')
}
closeBtn.addEventListener('click',  closeButton)


// Cuando la página caraga se le ADD is Visible al Pop-up

const popup = document.querySelector('.Pop-up')

const aparece = ()=>{
    popup.classList.add('isVisible')
}
window.addEventListener("load",  aparece)

// Cuando hago Click a Boton se le REMOVE isVisible

const boton = document.querySelector(".Popup-button")

const botonCerrar = ()=>{
    popup.classList.remove('isVisible')
}
boton.addEventListener('click',  botonCerrar)