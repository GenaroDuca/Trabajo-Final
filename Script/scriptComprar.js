"use strict"

// Informacion sobre los productos ------------------------------------------------------------------
let productosAlmacen = ["Fideos", "Arroz", "Huevos", "Carne"]
let preciosAlmacen = [1000, 2000, 3000, 4000];
let stockAlmacen = [10];
let imagenesAlmacen = ["Media/fideos.jpeg", "Media/arroz.png"]

let productosBebidas = ["Coca Cola", "Sprite", "Fanta", "Agua"]
let preciosBebidas = [1000, 2000, 3000, 4000];
let stockBebidas = [10];
let imagenesBebidas = []

let productosLacteos = ["Leche", "Queso", "Yogurt", "Manteca"]
let preciosLacteos = [1000, 2000, 3000, 4000];
let stockLacteos = [10];
let imagenesLacteos = []

let productosPanaderia = ["Pan", "Harina", "Prepizzas", "Medialunas"]
let preciosPanaderia = [1000, 2000, 3000, 4000];
let stockPanaderia = [10];
let imagenesPanaderia = []


// Autorrellenado de informacion --------------------------------------------------------------------
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
        descripcionProducto.appendChild(textoPrecioProducto)
        contenedorSeccion.appendChild(precioProducto)

        //crea input de cantidad
        let inputCantidad = document.createElement("input")
        inputCantidad.setAttribute("type", "number")
        inputCantidad.setAttribute("placeholder", "Cantidad")
        inputCantidad.setAttribute("id", producto[i])
        contenedorSeccion.appendChild(inputCantidad)

        //crea input de agregar
        let inputAgregar = document.createElement("input")
        inputAgregar.setAttribute("type", "button")
        inputAgregar.setAttribute("value", "Agregar")
        inputAgregar.setAttribute("id", producto[i] + i)
        contenedorSeccion.appendChild(inputAgregar)

        contenedorSeccion.setAttribute("class", " contenedor-seccion")
        contenedorSeccion.setAttribute("id", " contenedor-seccion")
        seccionComprar.appendChild(contenedorSeccion)
    }
}

//Validacion de inputs ------------------------------------------------------------------------------

function accederInputs(producto,stock) {
    for (let i = 0; i < producto.length; i++) {
        let btnAgregar = document.getElementById(producto[i] + i)
        btnAgregar.addEventListener("click", () => {
            let input = document.getElementById(producto[i]).value
            console.log("Se compran " + input + " " + producto[i])
            if (input < 0) { //comprobacion cantidad no negativa
                alert("La cantidad ingresada debe ser mayor a 0")
            } else {
                if (input > stock[i]) //comprobación stock
                    alert("No puedes agregar " + input + " " + producto[i] + " ya que la cantidad excede nuestro stock"+" "+"("+stock[i]+" unidades" + ")")
            }
        })
    }

}

//LLamado de funciones ------------------------------------------------------------------------------
llenarInformacionProductos(productosAlmacen, preciosAlmacen, imagenesAlmacen, "almacen")
accederInputs(productosAlmacen,stockAlmacen)

llenarInformacionProductos(productosBebidas, preciosBebidas, imagenesBebidas, "bebidas")
accederInputs(productosBebidas, stockBebidas)

llenarInformacionProductos(productosLacteos, preciosLacteos, imagenesLacteos, "lacteos")
accederInputs(productosLacteos, stockLacteos)

llenarInformacionProductos(productosPanaderia, preciosPanaderia, imagenesPanaderia, "panaderia")
accederInputs(productosPanaderia, stockPanaderia)






//recordatorio (x si me olvido xd) REPETIR ESTO SEGUN EL ARRAY SECCIONES
/*const btn = document.getElementById("almacen0")
btn.addEventListener("click", function () {
    const input = document.querySelector(".almacen0").value
    console.log(input)
})

const btn1 = document.getElementById("almacen1")
btn1.addEventListener("click", function () {
    const input = document.querySelector(".almacen1").value
    console.log(input)
})

const btn2 = document.getElementById("almacen2")
btn2.addEventListener("click", function () {
    const input = document.querySelector(".almacen2").value
    console.log(input)
})

const btn3 = document.getElementById("almacen3")
btn3.addEventListener("click", function () {
    const input = document.querySelector(".almacen3").value
    console.log(input)
}) */












//Funcionamiento del botón que clasifica los productos ----------------------------------------------
let btnSeleccion = document.getElementsByClassName("seccion-comprar");
let btnCategorias = document.getElementsByClassName("btn-categoria");
let clasificacion = document.getElementsByClassName("categoria-productos");

for (let i = 0; i < clasificacion.length; i++) {
    clasificacion[i].addEventListener("change", function (event) {
        const opcionSeleccionada = event.target.value;

        switch (opcionSeleccionada) {
            case "Todo":
                for (i = 0; i < btnSeleccion.length; i++) {
                    btnSeleccion[i].classList.remove("ocultar")
                    btnCategorias[i].classList.remove("ocultar")
                }
                break;

            case "Almacén":
                for (i = 0; i < btnSeleccion.length; i++) {
                    btnSeleccion[i].classList.add("ocultar")
                    btnCategorias[i].classList.add("ocultar")
                }
                btnCategorias[0].classList.remove("ocultar");
                btnSeleccion[0].classList.remove("ocultar");
                break;

            case "Bebidas":
                for (i = 0; i < btnSeleccion.length; i++) {
                    btnSeleccion[i].classList.add("ocultar")
                    btnCategorias[i].classList.add("ocultar")
                }
                btnCategorias[1].classList.remove("ocultar");
                btnSeleccion[1].classList.remove("ocultar");
                break;

            case "Lácteos":
                for (i = 0; i < btnSeleccion.length; i++) {
                    btnSeleccion[i].classList.add("ocultar")
                    btnCategorias[i].classList.add("ocultar")
                }
                btnCategorias[2].classList.remove("ocultar");
                btnSeleccion[2].classList.remove("ocultar");
                break;

            case "Panadería":
                for (i = 0; i < btnSeleccion.length; i++) {
                    btnSeleccion[i].classList.add("ocultar")
                    btnCategorias[i].classList.add("ocultar")
                }
                btnCategorias[3].classList.remove("ocultar");
                btnSeleccion[3].classList.remove("ocultar");
                break;
        }
    })
}



/*
for (let i=0; i < btnSeleccion.length; i++) {
    for (let i2=0; i2 < productosAlmacen; i2++) {
        const btn = document.getElementById(btnSeleccion[i]+i2);
        btn.addEventListener("click", function () {
            let input = document.querySelector("." + btnSeleccion[i]+i2).value
            console.log(input)
        })
    }
    
}

// Corrección del manejo de eventos
for (let i = 0; i < btnCategorias.length; i++) {
    btnCategorias[i].addEventListener("click", function () {
        let inputs = document.querySelectorAll("." + btnCategorias[i].value.toLowerCase());
        inputs.forEach(input => {
            input.add
        })
    })
}

for (let i = 0; i < btnSeleccion.length; i++) {
    let seccion = btnSeleccion[i];
    let botones = seccion.getElementsByTagName("input");
    for (let j = 0; j < botones.length; j++) {
        if (botones[j].type === "button") {
            botones[j].addEventListener("click", function () {
                let input = document.querySelector("." + botones[j].id).value;
                console.log(input);
            });
        }
    }
}



*/




