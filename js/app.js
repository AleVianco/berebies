/*Cuando hago CLICK en la .button, a .nav le añado y le quito la clase, lo que se llama TOGGLE que va a ser de la clase 'activo'*/
const button = document.querySelector('.button')
const nav = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})