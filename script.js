document.querySelector('.date').innerHTML = new Date().toLocaleString();

var image = document.getElementById('ic')

function changeImg(){
    if(image.src.match('https://www.xtrafondos.com/wallpapers/jean-valjean-en-les-miserables-1245.jpg')){
        image.src = 'https://i.pinimg.com/originals/87/08/18/87081851b17b59732ec5cccfda2783fc.jpg'
    }else {
        image.src = 'https://www.xtrafondos.com/wallpapers/jean-valjean-en-les-miserables-1245.jpg'
    }
}

var texto = document.getElementById('title')

function changeText(){
    if(texto.innerHTML ==  'Jean Valjean'){
        texto.innerHTML =  'Prisioneiro 24601'
        texto.style.fontSize = '4.5em'
    } else{
        texto.innerHTML = 'Jean Valjean'
        texto.style.fontSize = '10em'
    }
}