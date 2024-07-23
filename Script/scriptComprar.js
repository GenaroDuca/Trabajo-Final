"use strict"

// Informacion sobre los productos --------------------------------------------------------------------------
let productosAlmacen = ["Fideos", "Arroz", "Huevos", "Carne"]
let preciosAlmacen = [1000, 2000, 3000, 4000];
let stockAlmacen = [10, 10, 10, 10];
let imagenesAlmacen = ["Media/fideos.jpeg","Media/arroz.png","Media/huevos.jpg","Media/carne.jpg"]

let productosBebidas = ["Coca Cola", "Sprite", "Fanta", "Agua"]
let preciosBebidas = [1000, 2000, 3000, 4000];
let stockBebidas = [10, 10, 10, 10];
let imagenesBebidas = ["Media/coca cola.webp","Media/sprite.jpg","Media/fanta.jpg","Media/agua.jpg"]

let productosLacteos = ["Leche", "Queso", "Yogurt", "Manteca"]
let preciosLacteos = [1000, 2000, 3000, 4000];
let stockLacteos = [10, 10, 10, 10];
let imagenesLacteos = ["Media/leche.jpeg","Media/queso.jpeg","Media/yogurt.jpg","Media/manteca.webp"]

let productosPanaderia = ["Pan", "Harina", "Prepizzas", "Medialunas"]
let preciosPanaderia = [1000, 2000, 3000, 4000];
let stockPanaderia = [10, 10, 10, 10];
let imagenesPanaderia = ["Media/pan.webp","Media/harina.jpg","Media/prepizza.webp","Media/medialunas.jpeg"]

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
                alert("¡La cantidad ingresada (" + input + ") es mayor a nuestro stock (" + stock[i] + ")! Por favor ingrese una cantidad menor.")
            } else {
                console.log(input * precio[i])
                let seccionFactura = document.getElementById("seccion-factura")
                let precioProducto = document.createElement("p")
                precioProducto.setAttribute("class", "precio-producto-factura")
                precioProducto.setAttribute("id", "precio-" + producto[i])
                let precioTotal = input * precio[i]
                let precioProductoValor = document.createTextNode(precioTotal)

                //Cambiar value de agregar a agregado 

                precioProducto.appendChild(precioProductoValor)
                seccionFactura.appendChild(precioProducto)
                precioProducto.classList.add("ocultar")

                //envia el producto con su precio a la factura
                let ProductoEnFactura = document.createElement("p")
                ProductoEnFactura.setAttribute("class", "producto-en-factura")
                let textoProductoEnFactura = document.createTextNode("" + producto[i] + ": $" + precioTotal)
                ProductoEnFactura.appendChild(textoProductoEnFactura)
                seccionFactura.appendChild(ProductoEnFactura)

                btnAgregar.value ="Agregado ✔"
                btnAgregar.setAttribute("disabled", "true")
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
        console.log(sumaPreciosSeccion)
        let seccionFactura = document.getElementById("seccion-factura")
        let precioFinal = document.createElement("p")
        precioFinal.setAttribute("id", "total-precio")
        let precioFinalTexto = document.createTextNode("Total: $" + sumaPreciosSeccion)
        precioFinal.appendChild(precioFinalTexto)
        seccionFactura.appendChild(precioFinal)

        //hacer ver factura 
        let seccionOcultar = document.getElementById ("select-categorias")
        seccionOcultar.classList.add("ocultar")
        seccionOcultar = document.getElementById ("seccion-categoria-productos")
        seccionOcultar.classList.add("ocultar")
        let seccionMostrar = document.getElementById ("seccion-factura")
        seccionMostrar.classList.remove("ocultar")

        //hacer ver btn de agradecimiento
        let seccionAgradecimiento = document.getElementById("seccion-agradecimiento")
        let btnFinal = document.createElement("input")
        btnFinal.setAttribute("type", "button")
        btnFinal.setAttribute("value", "Comprar")
        btnFinal.setAttribute("class", "btn-final")
        seccionMostrar.appendChild(btnFinal)
        btnFinal.addEventListener("click", () => {
            seccionMostrar.classList.add("ocultar")
            seccionAgradecimiento.classList.remove("ocultar")
        })
    });
};


//Funcionamiento del botón que clasifica los productos ------------------------------------------------------
let btnSeleccion = document.getElementsByClassName("seccion-productos");
let clasificacion = document.getElementsByClassName("categoria-productos");
let categoria = document.getElementsByClassName ("categoria");
for (let i = 0; i < clasificacion.length; i++) {
    clasificacion[i].addEventListener("change", function (event) {
        const opcionSeleccionada = event.target.value;

        switch (opcionSeleccionada) {
            case "Todo":
                for (i = 0; i < btnSeleccion.length; i++) {
                    btnSeleccion[i].classList.remove("ocultar")
                    categoria[i].classList.remove("ocultar")
                }
                break;

            case "Almacén":
                for (i = 0; i < btnSeleccion.length; i++) {
                    btnSeleccion[i].classList.add("ocultar")
                    categoria[i].classList.add("ocultar")
                }
                btnSeleccion[0].classList.remove("ocultar");
                categoria[0].classList.remove("ocultar")
                break;
                
            case "Bebidas":
                for (i = 0; i < btnSeleccion.length; i++) {
                    btnSeleccion[i].classList.add("ocultar")
                    categoria[i].classList.add("ocultar")
                }
                btnSeleccion[1].classList.remove("ocultar");
                categoria[1].classList.remove("ocultar")
                break;

            case "Lácteos":
                for (i = 0; i < btnSeleccion.length; i++) {
                    btnSeleccion[i].classList.add("ocultar")
                    categoria[i].classList.add("ocultar")
                }
                btnSeleccion[2].classList.remove("ocultar");
                categoria[2].classList.remove("ocultar")
                break;

            case "Panadería":
                for (i = 0; i < btnSeleccion.length; i++) {
                    btnSeleccion[i].classList.add("ocultar")
                    categoria[i].classList.add("ocultar")
                }
                btnSeleccion[3].classList.remove("ocultar");
                categoria[3].classList.remove("ocultar") 
                break;
        }
    })
}



