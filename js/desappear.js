// Cuando hago CLICK en Line-img
// .Content se de ADD isActive

const main = document.querySelector('.Main')
const timelineImg = main.querySelectorAll('.Timeline-img')
const section = main.querySelectorAll('.Section')

console.log(timelineImg)
console.log(section)

timelineImg.forEach(( _ , index)=>{
    const time = ()=>{
        section[index].classList.toggle('isVisible')
    }
    timelineImg[index].addEventListener('click', time )
})

    