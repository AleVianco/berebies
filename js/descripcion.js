let servicios = []

function onLoadEvent() {
    cargarServicios()
    mostrarNewsLetter()
}

function mostrarNewsLetter() {
    //let newsLetter = document.getElementById("newsletter")
    //newsLetter.classList.toggle("show")
    let myModal = document.getElementById("myModal")
    myModal.style.display = "block";
}

function cerrarNewsLetter() {
    let myModal = document.getElementById("myModal")
    myModal.style.display = "none";
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

function suscribirseNewsletter() {
    let emailComponent = document.getElementById("email-subscription")
    sessionStorage.setItem("e-mail", emailComponent.value);
    cerrarNewsLetter()
}

function mostrarTooltip(nombre) {
    let tooltip = document.getElementById("tooltip-" + nombre)
    tooltip.classList.toggle("show")
    let servicio = servicios.find((servicio) => servicio.nombre === nombre)
    tooltip.innerHTML = servicio.descripcion
}

window.addEventListener("load", (event) => {
    onLoadEvent()
  });
  