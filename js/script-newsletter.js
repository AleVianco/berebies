function onLoadEvent() {
    let noRepreguntar = localStorage.getItem("no-repreguntar")
    if (noRepreguntar != "true") {
        mostrarNewsLetter()
    }
    actualizarInfoNewsletter()

    let botonNewsletter = document.getElementById("botonNewsletter")
    botonNewsletter.addEventListener("click", (event) => {
        mostrarNewsLetter()
    });

    let botonCerrarNewsletter = document.getElementById("botonCerrarNewsletter")
    botonCerrarNewsletter.addEventListener("click", (event) => {
        noSuscribirseNewsletter()
    });

    let botonSuscribirseNewsletter = document.getElementById("botonSuscribirseNewsletter")
    botonSuscribirseNewsletter.addEventListener("click", (event) => {
        suscribirseNewsletter()
    });
    
    let botonOlvidarEmail = document.getElementById("botonOlvidarEmail")
    botonOlvidarEmail.addEventListener("click", (event) => {
        olvidarEmail()
    });

    mostrarBandera()
}

function mostrarNewsLetter() {
    let emailSubscription = document.getElementById("email-subscription")
    emailSubscription.value = null
    let myModal = document.getElementById("myModal")
    myModal.style.display = "block";
}

function actualizarInfoNewsletter() {
    let email = localStorage.getItem("e-mail")
    let botonNewsletter = document.getElementById("botonNewsletter")
    let emailInfo = document.getElementById("email")
    let botonOlvidarEmail = document.getElementById("botonOlvidarEmail")

    if (email == null) {
        botonNewsletter.style.display = "block"
        emailInfo.style.display = "none"
        botonOlvidarEmail.style.display = "none"
    } else {
        emailInfo.innerText = email
        botonNewsletter.style.display = "none"
        emailInfo.style.display = "block"
        botonOlvidarEmail.style.display = "block"
    }
}

function cerrarNewsLetter() {
    let myModal = document.getElementById("myModal")
    myModal.style.display = "none";
    actualizarInfoNewsletter()
}

function suscribirseNewsletter() {
    let emailComponent = document.getElementById("email-subscription")
    localStorage.setItem("e-mail", emailComponent.value);
    localStorage.setItem("no-repreguntar", true);
    cerrarNewsLetter()
}

function noSuscribirseNewsletter() {
    localStorage.removeItem("e-mail");
    localStorage.setItem("no-repreguntar", true);
    cerrarNewsLetter()
}

function olvidarEmail() {
    localStorage.removeItem("e-mail");
    localStorage.setItem("no-repreguntar", true);
    actualizarInfoNewsletter()
}

window.addEventListener("load", (event) => {
    onLoadEvent()
});

async function mostrarBandera() {
    //Accede a la API y consulta datos
    let response = await fetch('https://get.geojs.io/v1/ip/country.json')
    let info = await response.json()

    //Obtengo el tag img del html
    let imageHTML = document.getElementById("flag")

    //Cargo en el src del img la bandera de un CDN con el dato devuelto por la API
    imageHTML.src = "https://flagcdn.com/60x45/" + info.country.toLowerCase() + ".png"
}