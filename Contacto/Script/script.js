let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let email = document.getElementById("email")
let telefono = document.getElementById("telefono")
let consulta = document.getElementById("consulta")
let datos = []
let btnEnviar = document.getElementById("btn-enviar-formulario")

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault(); //previene la acción del form de actualizar la página
    datos[0] = nombre.value;
    datos[1] = apellido.value;
    datos[2] = email.value;
    datos[3] = telefono.value;
    datos[4] = consulta.value;

    console.log("Nombre: " + datos[0] + ", Apellido: " + datos[1] + ", Email: " + datos[2] + ", Telefono: " + datos[3] + ", Consulta: " + datos[4])
    let blob = new Blob([datos], { type: "text/plain;charset-utf-8" });

    saveAs(blob, "respuesta-formulario.txt")
    cerrarFormulario();
})

function cerrarFormulario() {
    let textoFormulario = document.querySelector(".formulario");
    textoFormulario.classList.add("ocultar");

    let respuestaFormulario = document.querySelector(".texto-formulario-enviado");
    respuestaFormulario.classList.remove("ocultar");
}

