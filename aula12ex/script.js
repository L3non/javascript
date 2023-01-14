var hour = new Date()
var h = hour.getHours()
var r = document.querySelector('p#res')

r.innerHTML = `Agora são ${h} horas.`

if(h >= 5 && h <12){
   document.body.style.background = '#FFCE82'
   document.querySelector('img#img').src = "manha.jpg"
} else if(h >= 12 && h <19){
   document.body.style.background = '#AE6737'
   document.querySelector('img#img').src = "tarde.jpg"
} else if(h <= 24){
   document.body.style.background = '#484A49'
   document.querySelector('img#img').src = "noite.jpg"
} else {
   r.innerHTML = '[ERROR] Invalid Hour!'
   i.src = null
}