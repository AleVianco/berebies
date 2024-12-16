let servicios = []

function onLoadEvent() {
    cargarServicios()
    let noRepreguntar = localStorage.getItem("no-repreguntar")
    if (noRepreguntar != "true") {
        mostrarNewsLetter()
    }
    actualizarInfoNewsletter()

    let botonTratamientos = document.getElementById("botonTratamientos")
    botonTratamientos.addEventListener("click", (event) => {
        mostrarTooltip('tratamientos')
    });

    let botonPodologia = document.getElementById("botonPodologia")
    botonPodologia.addEventListener("click", (event) => {
        mostrarTooltip('podologia')
    });

    let botonMasajes = document.getElementById("botonMasajes")
    botonMasajes.addEventListener("click", (event) => {
        mostrarTooltip('masajes')
    });

    let botonProductos = document.getElementById("botonProductos")
    botonProductos.addEventListener("click", (event) => {
        mostrarTooltip('productos')
    });

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
}

function cargarServicios() {
    servicios.push({
        id: 1,
        nombre: "tratamientos",
        descripcion: "Limpieza de cutis profunda - Limpieza con extracciones -  Peeling - Dermapen y otros.",
        precio: "15000"
    })
    servicios.push({
        id: 2,
        nombre: "podologia",
        descripcion: "Limpieza y exfoliación de pies y uñas. Callos, durezas, etc.",
        precio: "12000"
    })
    servicios.push({
        id: 3,
        nombre: "masajes",
        descripcion: "Descontracturantes - Relajantes -  Reflexología y otros.",
        precio: "16000"
    })
    servicios.push({
        id: 4,
        nombre: "productos",
        descripcion: "Recomendaciones según biotipo de piel.",
        precio: "15000"
    })
    console.log(servicios)
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

function mostrarTooltip(nombre) {
    let tooltip = document.getElementById("tooltip-" + nombre)
    tooltip.classList.toggle("show")
    let servicio = servicios.find((servicio) => servicio.nombre === nombre)
    tooltip.innerHTML = servicio.descripcion
}

function olvidarEmail() {
    localStorage.removeItem("e-mail");
    localStorage.setItem("no-repreguntar", true);
    actualizarInfoNewsletter()
}

window.addEventListener("load", (event) => {
    onLoadEvent()
});