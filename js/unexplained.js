// cuando se haga click en .Pdf-file
    // A lightbox se le añade isVisible

    const pdf = document.querySelector('.Pdf')
    const pdfFile = pdf.querySelector('.Pdf-file')
    const lightbox = document.querySelector('.Pdf-lightbox')
    const imgLightbox = lightbox.querySelector('.Pdf-img')

    console.log(pdf)
    console.log(pdfFile)
    console.log(lightbox)
    console.log(imgLightbox)


    const file = ()=>{
        console.log('Aparece imagen')
        lightbox.classList.add('isVisible')
    }
    pdfFile.addEventListener('click', file)
    
    // cuando hago click en .Pdf-button
        // a lightbox se le REMOVE isVisible
    
    const button = lightbox.querySelector('.Pdf-button')
    
    console.log(button)
     const buttons = ()=>{
        lightbox.classList.remove('isVisible')
    }
    button.addEventListener('click' ,  buttons)

        