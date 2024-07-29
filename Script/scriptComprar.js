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
console.log(productos)
let stocks = stockAlmacen.concat(stockBebidas, stockLacteos, stockPanaderia)
console.log(stocks)
let precios = preciosAlmacen.concat(preciosBebidas, preciosLacteos, preciosPanaderia)
console.log(precios)

// Llamado de funciones ---------------------------------------------------------------------------------------
llenarInformacionProductos(productosAlmacen, preciosAlmacen, imagenesAlmacen, stockAlmacen, "almacen")
llenarInformacionProductos(productosBebidas, preciosBebidas, imagenesBebidas, stockBebidas, "bebidas")
llenarInformacionProductos(productosLacteos, preciosLacteos, imagenesLacteos, stockLacteos, "lacteos")
llenarInformacionProductos(productosPanaderia, preciosPanaderia, imagenesPanaderia, stockPanaderia, "panaderia")

// Autorrellenado de informacion -----------------------------------------------------------------------------
function llenarInformacionProductos(producto, precio, imagen, stock, seccion) {
    for (let i = 0; i < producto.length; i++) {
        let seccionComprar = document.getElementById(seccion)
        // Crea contenedor
        let contenedorSeccion = document.createElement("div")
        contenedorSeccion.setAttribute("class", "contenedor-producto")

        // Crea imagen
        let imagenProducto = document.createElement("img")
        imagenProducto.setAttribute("src", imagen[i])
        imagenProducto.setAttribute("alt", producto[i])
        imagenProducto.setAttribute("class", "imagen-producto")
        imagenProducto.setAttribute("id", "imagen-producto")
        contenedorSeccion.appendChild(imagenProducto)

        // Crea descripcion de producto
        let descripcionProducto = document.createElement("p")
        descripcionProducto.setAttribute("class", "descripcion-producto")
        descripcionProducto.setAttribute("id", "descripcion-producto")
        let textoDescripcionProducto = document.createTextNode(producto[i])
        descripcionProducto.appendChild(textoDescripcionProducto)
        contenedorSeccion.appendChild(descripcionProducto)

        // Crea precio de producto
        let precioProducto = document.createElement("p")
        precioProducto.setAttribute("class", "precio-producto")
        precioProducto.setAttribute("id", "precio-producto")
        let textoPrecioProducto = document.createTextNode("$" + precio[i])
        precioProducto.appendChild(textoPrecioProducto)
        contenedorSeccion.appendChild(precioProducto)

        // Crea input de cantidad
        let inputCantidad = document.createElement("input")
        inputCantidad.setAttribute("type", "number")
        inputCantidad.setAttribute("placeholder", "Cantidad")
        inputCantidad.setAttribute("value", "0")
        inputCantidad.setAttribute("class", "input-cantidad")
        contenedorSeccion.appendChild(inputCantidad)

        /*
        // Crear stock
        let textoStock = document.createElement("p")
        textoStock.setAttribute("class", "stock-producto")
        let textoCantidadStock = document.createTextNode("Stock: ")
        textoStock.appendChild(textoCantidadStock)
        contenedorSeccion.appendChild(textoStock)

        // Crear cantidad stock
        let numeroStock = document.createElement("p")
        numeroStock.setAttribute("class", "stock-producto-cantidad")
        let numeroStockTexto = document.createTextNode(stock[i])
        numeroStock.appendChild(numeroStockTexto)
        contenedorSeccion.appendChild(numeroStock)
        */
       
        // Crea input de agregar
        let inputAgregar = document.createElement("input")
        inputAgregar.setAttribute("type", "button")
        inputAgregar.setAttribute("value", "Agregar")
        inputAgregar.setAttribute("class", "btn-agregar")
        contenedorSeccion.appendChild(inputAgregar)

        contenedorSeccion.setAttribute("class", "contenedor-seccion")
        contenedorSeccion.setAttribute("id", "contenedor-seccion")
        seccionComprar.appendChild(contenedorSeccion)
    }
}

// Acceder inputs cantidad -----------------------------------------------------------------------------------
let sumaPrecios = 0
for (let i = 0; i < productos.length; i++) {
    let btnAgregar = document.getElementsByClassName("btn-agregar")[i]
    let inputCantidad = document.getElementsByClassName("input-cantidad")[i]
    btnAgregar.addEventListener("click", () => {
        let cantidad = inputCantidad.value
        if (cantidad <= 0) {
            // Feedback error
            alert("¡La cantidad ingresada no debe ser menor o igual a 0!")
        } else if (cantidad > stocks[i]) {
            // Feedback error
            alert("¡La cantidad ingresada (" + cantidad + ") es mayor a nuestro stock (" + stocks[i] + ")! Por favor ingrese una cantidad menor.")
        } else {
            let precioProducto = cantidad * precios[i]
            sumaPrecios += precioProducto
            console.log(precioProducto)

            // Feedback agregado
            btnAgregar.value = "Agregado ✔"
            btnAgregar.setAttribute("disabled", "true")

            // Actualizacion de stock (HACER)
            
            // Agregar productos en factura
            let seccionFactura = document.getElementById("productos-factura")
            let productoEnFactura = document.createElement("p")
            productoEnFactura.setAttribute("class", "producto-en-factura")
            let textoProductoEnFactura = document.createTextNode(productos[i] + " x" + cantidad + ": $" + precioProducto)
            productoEnFactura.appendChild(textoProductoEnFactura)
            seccionFactura.appendChild(productoEnFactura)
        }
    })
}

// Funcionamiento botón ir a comprar y mostrar precio total --------------------------------------------------
let btnIrComprar = document.getElementById("btn-ir-comprar")
btnIrComprar.addEventListener("click", () => {
    if (sumaPrecios > 0) {
        let seccionDeComprar = document.getElementById("seccion-de-compra")
        seccionDeComprar.classList.add("ocultar")
        let seccionDeFactura = document.getElementById("seccion-de-factura")
        seccionDeFactura.classList.remove("ocultar")

        // Mostrar precio total en factura
        let seccionFactura = document.getElementById("productos-factura")
        let precioFinal = document.createElement("p")
        precioFinal.setAttribute("class", "total-precio")
        let precioFinalTexto = document.createTextNode("Total: $" + sumaPrecios)
        precioFinal.appendChild(precioFinalTexto)
        seccionFactura.appendChild(precioFinal)
    } else {
        alert("¡La cantidad de productos ingresada no debe ser menor o igual a 0!")
    }
})

// Hacer ver agradecimiento ----------------------------------------------------------------------------------
let btnComprar = document.getElementById("btn-comprar")
btnComprar.addEventListener("click", () => {
    let factura = document.getElementById("factura")
    factura.classList.add("ocultar")
    let agradecimiento = document.getElementById("agradecimiento")
    agradecimiento.classList.remove("ocultar")
})

// Funcionamiento del botón que clasifica los productos ------------------------------------------------------
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


// Botón del método de pago de la factura --------------------------------------------------------------------
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
    )
}