"use strict"

// Informacion sobre los productos --------------------------------------------------------------------------
let secciones = ["almacen", "bebidas", "lacteos", "panaderia"]

let productosAlmacen = ["Fideos", "Arroz", "Huevos", "Carne"]
let preciosAlmacen = [1000, 2000, 3000, 4000];
let stockAlmacen = [10, 10, 10, 10];
let imagenesAlmacen = ["Media/fideos.jpeg", "Media/arroz.png"]

let productosBebidas = ["Coca Cola", "Sprite", "Fanta", "Agua"]
let preciosBebidas = [1000, 2000, 3000, 4000];
let stockBebidas = [10, 10, 10, 10];
let imagenesBebidas = []

let productosLacteos = ["Leche", "Queso", "Yogurt", "Manteca"]
let preciosLacteos = [1000, 2000, 3000, 4000];
let stockLacteos = [10, 10, 10, 10];
let imagenesLacteos = []

let productosPanaderia = ["Pan", "Harina", "Prepizzas", "Medialunas"]
let preciosPanaderia = [1000, 2000, 3000, 4000];
let stockPanaderia = [10, 10, 10, 10];
let imagenesPanaderia = []

let productos = productosAlmacen.concat(productosBebidas, productosLacteos, productosPanaderia);


//Llamado de funciones --------------------------------------------------------------------------------------
llenarInformacionProductos(productosAlmacen, preciosAlmacen, imagenesAlmacen, "almacen")
accederInputs(productosAlmacen, preciosAlmacen, stockAlmacen)

llenarInformacionProductos(productosBebidas, preciosBebidas, imagenesBebidas, "bebidas")
accederInputs(productosBebidas, preciosBebidas, stockBebidas)

llenarInformacionProductos(productosLacteos, preciosLacteos, imagenesLacteos, "lacteos")
accederInputs(productosLacteos, preciosLacteos, stockLacteos)

llenarInformacionProductos(productosPanaderia, preciosPanaderia, imagenesPanaderia, "panaderia")
accederInputs(productosPanaderia, preciosPanaderia, stockPanaderia)

calcularCosteTotal(productos)

// Autorrellenado de informacion ----------------------------------------------------------------------------
function llenarInformacionProductos(producto, precio, imagen, seccion) {
    for (let i = 0; i < producto.length; i++) {
        let seccionComprar = document.getElementById(seccion)
        //crea contenedor
        let contenedorSeccion = document.createElement("div")

        //crea imagen
        let imagenProducto = document.createElement("img")
        imagenProducto.setAttribute("src", imagen[i])
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
        precioProducto.appendChild(textoPrecioProducto)
        contenedorSeccion.appendChild(precioProducto)

        //crea input de cantidad
        let inputCantidad = document.createElement("input")
        inputCantidad.setAttribute("type", "number")
        inputCantidad.setAttribute("placeholder", "Cantidad")
        inputCantidad.setAttribute("value", "0")
        inputCantidad.setAttribute("class", "input-cantidad")
        inputCantidad.setAttribute("id", "input-cantidad-" + producto[i])
        contenedorSeccion.appendChild(inputCantidad)

        //crea input de agregar
        let inputAgregar = document.createElement("input")
        inputAgregar.setAttribute("type", "button")
        inputAgregar.setAttribute("value", "Agregar")
        inputAgregar.setAttribute("class", "btn-agregar")
        inputAgregar.setAttribute("id", "btn-agregar-" + producto[i])
        contenedorSeccion.appendChild(inputAgregar)

        contenedorSeccion.setAttribute("class", "contenedor-seccion")
        contenedorSeccion.setAttribute("id", "contenedor-seccion")
        seccionComprar.appendChild(contenedorSeccion)
    }
}


//Validacion de inputs, suma de precios de una categoria ----------------------------------------------------
function accederInputs(producto, precio, stock) {
    for (let i = 0; i < producto.length; i++) {
        let btnAgregar = document.getElementById("btn-agregar-" + producto[i])
        btnAgregar.addEventListener("click", () => {
            let input = document.getElementById("input-cantidad-" + producto[i]).value
            if (input < 0) {
                alert("¡La cantidad ingresada no debe ser menor a 0!")
            } else if (input > stock[i]) {
                alert("¡La cantidad ingresada (" + input + ") es mayor a nuestro stock (" + stock[i] + ")! por favor ingrese una cantidad menor.")
            } else {
                console.log(input * precio[i])
                let almacenPrecios = document.getElementById("carrito")
                let precioProducto = document.createElement("p")
                precioProducto.setAttribute("id", "precio-" + producto[i])
                precioProducto.setAttribute("class", "ocultar")
                let precioProductoValor = document.createTextNode(input * precio[i])
                precioProducto.appendChild(precioProductoValor)
                almacenPrecios.appendChild(precioProducto)
            }
        })

    }

}

//Calcular precio total--------------------------------------------------------------------------------------

function calcularCosteTotal(producto) {
    let sumaPreciosSeccion = 0;
    let btnComprar = document.getElementById("btn-comprar");
    btnComprar.addEventListener("click", () => {
        for (let i = 0; i < producto.length; i++) {
            let input = document.getElementById("precio-" + producto[i]);
            if (input) {
                let precioText = input.innerText;
                let precioNum = parseFloat(precioText);
                sumaPreciosSeccion += precioNum;
            }
        }
        let carrito = document.getElementById("carrito")
        let precioFinal = document.createElement ("p")
        let precioFinalTexto = document.createTextNode (sumaPreciosSeccion + "$")
        precioFinal.appendChild(precioFinalTexto)
        carrito.appendChild (precioFinal)
            
    });
};


//Funcionamiento del botón que clasifica los productos ------------------------------------------------------
let btnSeleccion = document.getElementsByClassName("seccion-productos");
let clasificacion = document.getElementsByClassName("categoria-productos");

for (let i = 0; i < clasificacion.length; i++) {
    clasificacion[i].addEventListener("change", function (event) {
        const opcionSeleccionada = event.target.value;

        switch (opcionSeleccionada) {
            case "Todo":
                for (i = 0; i < btnSeleccion.length; i++) {
                    btnSeleccion[i].classList.remove("ocultar")
                }
                break;

            case "Almacén":
                for (i = 0; i < btnSeleccion.length; i++) {
                    btnSeleccion[i].classList.add("ocultar")

                }
                btnSeleccion[0].classList.remove("ocultar");

                break;
            case "Bebidas":
                for (i = 0; i < btnSeleccion.length; i++) {
                    btnSeleccion[i].classList.add("ocultar")
                }
                btnSeleccion[1].classList.remove("ocultar");

                break;
            case "Lácteos":
                for (i = 0; i < btnSeleccion.length; i++) {
                    btnSeleccion[i].classList.add("ocultar")

                }
                btnSeleccion[2].classList.remove("ocultar");

                break;
            case "Panadería":
                for (i = 0; i < btnSeleccion.length; i++) {
                    btnSeleccion[i].classList.add("ocultar")
                }
                btnSeleccion[3].classList.remove("ocultar");

                break;
        }
    })
}



