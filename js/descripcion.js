let servicios = []

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

function mostrarPopup(nombre) {
    let popup = document.getElementById("popup-" + nombre)
    popup.classList.toggle("show")
    let servicio = servicios.find((servicio) => servicio.nombre === nombre)
    popup.innerHTML = servicio.descripcion
}