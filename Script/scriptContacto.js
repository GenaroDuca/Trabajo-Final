<<<<<<< HEAD
let formulario = document.getElementById("btn-enviar-formulario").addEventListener("click", function (e) {
    let datos = document.getElementsByClassName("respuesta-formulario")
    let datosString = "";
    for (i = 0; i < datos.length; i++) {
        datosString += " " + datos[i].value;
    }
    localStorage.setItem('respuestaFormulario', datosString);
    const datosFormulario = localStorage.getItem('respuestaFormulario');
    const sinEspacio = datosFormulario.trim();
    const dataRecuperada = sinEspacio.split(" ");
=======
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let email = document.getElementById("email")
let telefono = document.getElementById("telefono")
let consulta = document.getElementById("consulta")
let datos = []
let btnEnviar = document.getElementById("enviar-formulario")

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
>>>>>>> c15048e94bc537ddcc2ca05ed7aa15b9841eb42e

    cerrarFormulario();
})

function cerrarFormulario() {
    let textoFormulario = document.querySelector(".formulario");
    textoFormulario.classList.toggle("ocultar");

    let respuestaFormulario = document.querySelector(".texto-formulario-enviado");
    respuestaFormulario.classList.toggle("ocultar");

    let btnEnviar = document.querySelector(".btn-enviar");
    btnEnviar.classList.toggle("ocultar");

    let btnConForm = document.querySelector(".form-y-boton"); 
    btnConForm.classList.toggle("ocultar");
}