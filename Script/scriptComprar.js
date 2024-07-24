"use strict"

// Informacion sobre los productos --------------------------------------------------------------------------
let productosAlmacen = ["Fideos", "Arroz", "Huevos", "Carne"]
let preciosAlmacen = [2000, 1800, 500, 10000];
let stockAlmacen = [20, 10, 12, 5];
let imagenesAlmacen = ["Media/fideos.jpeg", "Media/arroz.png", "Media/huevos.jpg", "Media/carne.jpg"]

let productosBebidas = ["Coca Cola", "Sprite", "Fanta", "Agua"]
let preciosBebidas = [3000, 1500, 1100, 1250];
let stockBebidas = [50, 15, 2, 9];
let imagenesBebidas = ["Media/coca cola.webp", "Media/sprite.jpg", "Media/fanta.jpg", "Media/agua.jpg"]

let productosLacteos = ["Leche", "Queso", "Yogurt", "Manteca"]
let preciosLacteos = [2000, 8000, 5000, 4500];
let stockLacteos = [15, 8, 20, 10];
let imagenesLacteos = ["Media/leche.jpeg", "Media/queso.jpeg", "Media/yogurt.jpg", "Media/manteca.webp"]

let productosPanaderia = ["Pan", "Harina", "Prepizzas", "Medialunas"]
let preciosPanaderia = [1000, 800, 3000, 6000];
let stockPanaderia = [10, 22, 5, 10];
let imagenesPanaderia = ["Media/pan.webp", "Media/harina.jpg", "Media/prepizza.webp", "Media/medialunas.jpeg"]

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
        let textoPrecioProducto = document.createTextNode("$" + precio[i])
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
            if (input <= 0) {
                alert("¡La cantidad ingresada no debe ser menor o igual a 0!")
            } else if (input > stock[i]) {
                alert("¡La cantidad ingresada (" + input + ") es mayor a nuestro stock (" + stock[i] + ")! Por favor ingrese una cantidad menor.")
            } else {
                console.log(input * precio[i])
                let seccionFactura = document.getElementById("productos-factura")
                let precioProducto = document.createElement("p")
                precioProducto.setAttribute("class", "precio-producto-factura")
                precioProducto.setAttribute("id", "precio-" + producto[i])
                let precioTotal = input * precio[i]
                let precioProductoValor = document.createTextNode(precioTotal)

                precioProducto.appendChild(precioProductoValor)
                seccionFactura.appendChild(precioProducto)
                precioProducto.classList.add("ocultar")

                //envia el producto con su precio a la factura
                let ProductoEnFactura = document.createElement("p")
                ProductoEnFactura.setAttribute("class", "producto-en-factura")
                let textoProductoEnFactura = document.createTextNode(producto[i] + ": $" + precioTotal)
                ProductoEnFactura.appendChild(textoProductoEnFactura)
                seccionFactura.appendChild(ProductoEnFactura)

                btnAgregar.value = "Agregado ✔"
                btnAgregar.setAttribute("disabled", "true")
            }
        })

    }

}

//Calcular precio total--------------------------------------------------------------------------------------

function calcularCosteTotal(producto) {
    let sumaPreciosSeccion = 0;
    let btnIrComprar = document.getElementById("btn-ir-comprar");
    btnIrComprar.addEventListener("click", () => {
        for (let i = 0; i < producto.length; i++) {
            let input = document.getElementById("precio-" + producto[i]);
            if (input) {
                let precioText = input.innerText;
                let precioNum = parseFloat(precioText);
                sumaPreciosSeccion += precioNum;
            }
        }
        console.log(sumaPreciosSeccion)
        
        if (sumaPreciosSeccion > 0) {
            let productosFactura = document.getElementById("productos-factura")
            let precioFinal = document.createElement("p")
            precioFinal.setAttribute("class", "total-precio")
            let precioFinalTexto = document.createTextNode("Total: $" + sumaPreciosSeccion)
            precioFinal.appendChild(precioFinalTexto)
            productosFactura.appendChild(precioFinal)


            //hacer ver factura 
            let seccionDeComprar = document.getElementById("seccion-de-compra")
            seccionDeComprar.classList.add("ocultar")
            let seccionFactura = document.getElementById("seccion-de-factura")
            seccionFactura.classList.remove("ocultar")

            //hacer ver agradecimiento
            let btnComprar = document.getElementById("btn-comprar")
            btnComprar.addEventListener("click",()=> {
                seccionFactura.classList.add ("ocultar")
                let seccionAgradecimiento = document.getElementById ("seccion-agradecimiento")
                seccionAgradecimiento.classList.remove ("ocultar")
            })  
        } else {
            alert("Su compra debe ser mayor de 0$")
        }
    });
};


//Funcionamiento del botón que clasifica los productos ------------------------------------------------------
let btnSeleccion = document.getElementsByClassName("seccion-productos");
let clasificacion = document.getElementsByClassName("categoria-productos");
let categoria = document.getElementsByClassName("categoria");
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


//Botón del método de pago de la factura
let metodoPago = document.getElementById("seccion-metodo-pago")
let selectMetodoPago = document.getElementsByClassName("select-metodo-de-pago")

for (let i = 0; i < selectMetodoPago.length; i++) {
    selectMetodoPago[i].addEventListener("change", function (event) {
        const opcionSeleccionada2 = event.target.value;

        switch (opcionSeleccionada2) {
            case "Efectivo":
                metodoPago.classList.add("ocultar");
                break;

            case "Transferencia":
                metodoPago.classList.add("ocultar");
                break;

            case "Credito":
                metodoPago.classList.remove("ocultar");
                break;

            case "Debito":
                metodoPago.classList.remove("ocultar");
                break;
        }
    }
)}



