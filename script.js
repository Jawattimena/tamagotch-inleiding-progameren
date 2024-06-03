
// Bron Afbeeldingen:
// Free Vector | Organic flat element animation frames. (2021, 28 april). Freepik. https://www.freepik.com/free-vector/organic-flat-element-animation-frames_13818850.htm#fromView=search&page=1&position=19&uuid=97e9c95c-f240-493c-a7a3-1cd5b7988e59

console.log("test")

const knopAansteken = document.querySelector("#aansteken")
const knopHout = document.querySelector("#hout")
const knopBlazen = document.querySelector("#blazen")

const houtImage = document.querySelector("#imghout")
const vuurImage = document.querySelector("#imgvuur")

const hout = ["img/hout4.svg", "img/hout5.svg", "img/hout6.svg", "img/hout7.svg", "img/hout8.svg"]
const doven = ["img/water.svg", "img/rook.svg"]
const vuur = ["img/vuur1.svg", "img/vuur2.svg", "img/vuur3.svg"]

const vlamBar = document.querySelector("#progresbarvlam")
const houtBar = document.querySelector("#progresbarhout")

let vlamvalue = 0
let houtvalue = 0

let aantalHout = 0
let vlamGrote = 0

knopHout.style.display = 'none'
knopBlazen.style.display = 'none'
vuurImage.style.display = 'none'

// Bron voor audio: https://stackoverflow.com/questions/68784021/how-to-play-sound-in-javascript-without-external-audio-file-html-file

function vuurAansteken (){
    console.log("yes")
    knopAansteken.style.display = 'none'
    vuurImage.style.display = 'block'
    vuurImage.src = vuur[0]
    knopHout.style.display = 'block'
    knopBlazen.style.display = 'block'
    document.querySelector('h1').textContent = "Hou het vuurtje in leven."
    vlamBar.value += 40
    const audio = new Audio();
    audio.src = ("audio/aansteken.m4a")
    audio.play()
}

knopAansteken.addEventListener('click', vuurAansteken)

// toevoegen van vlam value -------------------------------------------

// Bron voor value's: https://www.youtube.com/shorts/uwnL4khzDKo

// vuur progress stijgen
function blazen (){
    if(vlamBar.value < 100){
    vlamBar.value += 10
    const audio = new Audio();
    audio.src = ("audio/blazen.m4a")
    audio.play()
    }
}

knopBlazen.addEventListener('click', blazen)

// vuur progress dalen
function vlamProgress () {
    if(vlamBar.value > 0){
        vlamBar.value -= 1
    }

    if(vlamBar.value > 5 && houtBar.value < 20){
            vlamBar.value -= 10     
    }

    if (vlamBar.value == 0  ){
        vuurImage.src = doven[1]
        document.querySelector('h1').textContent = "Steek het kampvuur aan door op de knop te klikken!"
        knopBlazen.style.display = 'none'
        knopAansteken.style.display = 'block'
    } else if (vlamBar.value > 1 && vlamBar.value < 33 ){
        vlamGrote = 0
        vuurImage.src = vuur[vlamGrote]
    }else if (vlamBar.value >= 33 && vlamBar.value < 66 ){
        vlamGrote = 1
        vuurImage.src = vuur[vlamGrote]
    }else if (vlamBar.value >= 66 && vlamBar.value < 100 ){
        vlamGrote = 2
        vuurImage.src = vuur[vlamGrote]
    }
}

setInterval(vlamProgress, 200)

// toevoegen van hout value -------------------------------------------

// hout progress stijgen
function houtBijgooien (){
    if(aantalHout < 4){
    aantalHout += 1
    houtBar.value = aantalHout * 25 
    houtImage.src = hout[aantalHout]
    const audio = new Audio();
    audio.src = ("audio/hout.m4a")
    audio.play()
    }
}

knopHout.addEventListener('click', houtBijgooien)

// hout progress dalen
function houtProgress () {
    houtBar.value -= 1+vlamGrote
    
    if (houtBar.value < 20 ){
        aantalHout = 0
        houtImage.src = hout[aantalHout]
    }else if (houtBar.value >= 20 && houtBar.value < 40 ){
        aantalHout = 1
        houtImage.src = hout[aantalHout]
    }else if (houtBar.value >= 40 && houtBar.value < 60 ){
        aantalHout = 2
        houtImage.src = hout[aantalHout]
    }else if (houtBar.value >= 60 && houtBar.value < 80 ){
        aantalHout = 3
        houtImage.src = hout[aantalHout]
    }else if (houtBar.value >= 80 && houtBar.value <= 100 ){
        aantalHout = 4
        houtImage.src = hout[aantalHout]
    }
}

setInterval(houtProgress, 200)