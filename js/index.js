// CODIGO SLIDER O CARRUSEL

const slider = document.querySelector('.Slider')
const sliderBlock = slider.querySelector('.Slider-block')
const right = slider.querySelector('.Right')
const left = slider.querySelector('.Left')

console.log(right)
console.log(left)

let imagenes = 100 / 4 // DIVIDO ENTRE LAS 4 IMAGENES PUESTAS EN EL SLIDER
let contador = 0

const sliderTranslate = ()=>{
    sliderBlock.style.transform = `translateX(-${imagenes * contador}%)`
}

const sliderRight= ()=>{
    contador++
    if(contador >= 4){  // HACEMOS UN CONTADOR PARA QUE LA IMAGEN AL LLEGAR A LA 4 VUELVA ALA 1
        contador = 0
    }
    sliderTranslate()
}

const sliderLeft= ()=>{
    contador--
    if( contador < 0){ // ASI MISMO ACA CUANDO SE HAGA CLICK ESTANDO EN LA 1 SE DEVUELEVE AL ULTIMA 
        contador = 3
    }
    sliderTranslate()
}

right.addEventListener('click', sliderRight)
left.addEventListener('click', sliderLeft)

// CÓDIGO DE LAS TABS 

const wanted = document.querySelector('.Section')
const imagen = wanted.querySelectorAll('.Section-img')
const paragraph = wanted.querySelectorAll('.Section-p')

console.log(wanted)
console.log(imagen)
console.log(paragraph)

// CUANDO HAGO CLICK EN .Imagen
// paragraph LE RECORRO EN SU INDEX CADA IMAGEN 
// AL HACER CLICK paragrpah REMOVE EL RESTO
// Y LE AÑADO isVisible A LA SELECCIONADA

imagen.forEach((_ , index)=>{  // LEH HAGO UN FOREACH A CADA IMAGEN 
    const imagenes = ()=>{
        paragraph.forEach((_ , index)=>{
            paragraph[index].classList.remove('isVisible')
        })
        paragraph[index].classList.add('isVisible')
    }
    imagen[index].addEventListener('click', imagenes)
})

// Cuando la pantalla cargue aparece Main-p

const mainP = document.querySelector('.Main-p')

const loadingP = ()=>{
    mainP.classList.add('isLoad')
}
window.addEventListener('load',loadingP)