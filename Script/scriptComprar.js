"use strict"

// Informacion sobre los productos ------------------------------------------------------------------------------
let productosAlmacen = ["Fideos", "Arroz", "Huevos", "Carne"]
let preciosAlmacen = [1000, 2000, 3000, 4000];
let stockAlmacen = [10];
let imagenesAlmacen = ["Script/fideos.jpeg"]

let productosBebidas = ["Coca Cola", "Sprite", "Fanta", "Agua"]
let preciosBebidas = [1000, 2000, 3000, 4000];
let stockBebidas = [10];
let imagenesBebidas = ["Script/fideos.jpeg"]

let productosLacteos = ["Leche", "Queso", "Yogurt", "Manteca"]
let preciosLacteos = [1000, 2000, 3000, 4000];
let stockLacteos = [10];
let imagenesLacteos = ["Script/fideos.jpeg"]

let productosPanaderia = ["Pan", "Harina", "Prepizzas", "Medialunas"]
let preciosPanaderia = [1000, 2000, 3000, 4000];
let stockPanaderia = [10];
let imagenesPanaderia = ["Script/fideos.jpeg"]

// Autorrellenado de informacion ------------------------------------------------------------------------------
function llenarInformacionProductos(producto, precio, imagen, seccion) {
    for (let i = 0; i < producto.length; i++) {
        let seccionComprar = document.getElementById(seccion)
        //crea contenedor
        let contenedorSeccion = document.createElement("div")

        //crea imagen
        let imagenProducto = document.createElement("img")
        imagenProducto.setAttribute("url", imagen[i])
        imagenProducto.setAttribute("alt", producto[i])
        imagenProducto.setAttribute("class", "imagen-producto")
        imagenProducto.setAttribute("id", "imagen-producto")
        contenedorSeccion.appendChild(imagenProducto)

        //crea descripcion de producto
        let descripcionProducto = document.createElement("p")
        descripcionProducto.setAttribute("class", "descripcion-producto")
        descripcionProducto.setAttribute("id", "descripcion-producto")
        let textoDescripcionProducto = document.createTextNode(producto[i])
        descripcionProducto.appendChild(textoDescripcionProducto)
        contenedorSeccion.appendChild(descripcionProducto)

        //crea precio de producto
        let precioProducto = document.createElement("p")
        precioProducto.setAttribute("class", "precio-producto")
        precioProducto.setAttribute("id", "precio-producto")
        let textoPrecioProducto = document.createTextNode(precio[i] + "$")
        descripcionProducto.appendChild(textoPrecioProducto)
        contenedorSeccion.appendChild(precioProducto)

        //crea input de cantidad
        let inputCantidad = document.createElement("input")
        inputCantidad.setAttribute("type", "number")
        inputCantidad.setAttribute("placeholder", "Cantidad")
        inputCantidad.setAttribute("class", seccion + i)
        contenedorSeccion.appendChild(inputCantidad)

        //crea input de agregar
        let inputAgregar = document.createElement("input")
        inputAgregar.setAttribute("type", "button")
        inputAgregar.setAttribute("value", "Agregar")
        inputAgregar.setAttribute("id", seccion + i)
        contenedorSeccion.appendChild(inputAgregar)

        contenedorSeccion.setAttribute("class", " contenedor-seccion")
        contenedorSeccion.setAttribute("id", " contenedor-seccion")
        seccionComprar.appendChild(contenedorSeccion)
    }
}

llenarInformacionProductos(productosAlmacen, preciosAlmacen, imagenesAlmacen, "almacen")
llenarInformacionProductos(productosBebidas, preciosBebidas, imagenesBebidas, "bebidas")
llenarInformacionProductos(productosLacteos, preciosLacteos, imagenesLacteos, "lacteos")
llenarInformacionProductos(productosPanaderia, preciosPanaderia, imagenesPanaderia, "panaderia")



//Validacion de inputs ------------------------------------------------------------------------------

let secciones = ["almacen", "bebidas", "lacteos", "panaderia"]

//recordatorio (x si me olvido xd) REPETIR ESTO SEGUN EL ARRAY SECCIONES
const btn = document.getElementById("almacen0")
btn.addEventListener("click", function () {
    const input = document.getElementsByClassName("almacen0")[0].value
    console.log(input)
})

const btn1 = document.getElementById("almacen1")
btn1.addEventListener("click", function () {
    const input = document.getElementsByClassName("almacen1")[0].value
    console.log(input)
})

const btn2 = document.getElementById("almacen2")
btn2.addEventListener("click", function () {
    const input = document.getElementsByClassName("almacen2")[0].value
    console.log(input)
})

const btn3 = document.getElementById("almacen3")
btn3.addEventListener("click", function () {
    const input = document.getElementsByClassName("almacen3")[0].value
    console.log(input)
})















//Funcionamiento del botón que clasifica los productos ----------------------------------------------
let clasificacion = document.getElementsByClassName("categoria-productos");

for (let i = 0; i < clasificacion.length; i++) {
    clasificacion[i].addEventListener("change", function (event) {
        const opcionSeleccionada = event.target.value;

        switch (opcionSeleccionada) {
            case "Todo":
                seccionAlmacen.classList.remove("ocultar");
                seccionBebidas.classList.remove("ocultar");
                seccionLacteos.classList.remove("ocultar");
                seccionPanaderia.classList.remove("ocultar");
                break;

            case "Almacén":
                seccionAlmacen.classList.remove("ocultar");
                seccionBebidas.classList.add("ocultar");
                seccionLacteos.classList.add("ocultar");
                seccionPanaderia.classList.add("ocultar");
                break;

            case "Bebidas":
                seccionAlmacen.classList.add("ocultar");
                seccionBebidas.classList.remove("ocultar");
                seccionLacteos.classList.add("ocultar");
                seccionPanaderia.classList.add("ocultar");
                break;

            case "Lácteos":
                seccionAlmacen.classList.add("ocultar");
                seccionBebidas.classList.add("ocultar");
                seccionLacteos.classList.remove("ocultar");
                seccionPanaderia.classList.add("ocultar");
                break;

            case "Panadería":
                seccionAlmacen.classList.add("ocultar");
                seccionBebidas.classList.add("ocultar");
                seccionLacteos.classList.add("ocultar");
                seccionPanaderia.classList.remove("ocultar");
                break;
        }
    })
}
