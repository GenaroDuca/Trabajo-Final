let formulario = document.getElementById("enviar-formulario");
formulario.addEventListener("click", function(e){
    let datos = document.getElementsByClassName("respuesta-formulario")
    let datosString = "";
    for (i=0; i < datos.length; i++) {
        datosString += " " + datos[i].value;
    }
    localStorage.setItem('respuestaFormulario', datosString);
    const datosFormulario = localStorage.getItem('respuestaFormulario');
    const sinEspacio = datosFormulario.trim();   
    const dataRecuperada = sinEspacio.split(" ");

    console.log(dataRecuperada);

    cerrarFormulario();
})

/*
function cerrarFormulario() {
    let textoFormulario = document.querySelector(".formulario");
    textoFormulario.classList.toggle("ocultar");

    let respuestaFormulario = document.querySelector(".texto-formulario-enviado");
    respuestaFormulario.classList.toggle("ocultar");
    
}

*/















