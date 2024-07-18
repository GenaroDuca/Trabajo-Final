let productosAlmacen = ["Fideos", "Arroz", "Atún", "Carne"]
let preciosAlmacen = [1000, 2000, 3000, 4000];
let stockAlmacen = [10];
let imagenesAlmacen = ["Script/fideos.jpeg"]

let productosBebidas = ["Coca Cola", "Sprite", "Fanta", "Agua"]
let preciosBebidas = [1000, 2000, 3000, 4000];
let stockBebidas = [10];
let imagenesBebidas = ["Script/fideos.jpeg"]

let productosLacteos = ["Leche", "Queso", "Yogurt", "Queso Crema"]
let preciosLacteos = [1000, 2000, 3000, 4000];
let stockLacteos = [10];
let imagenesLacteos = ["Script/fideos.jpeg"]

let productosPanaderia = ["Pan", "Harina", "Pan Integral", "Pan Lactal"]
let preciosPanaderia = [1000, 2000, 3000, 4000];
let stockPanaderia = [10];
let imagenesPanaderia = ["Script/fideos.jpeg"]

function llenarInformacionProductos(productos, precios, imagenes) {
    let input = document.getElementById("seccion-comprar")
    for (i = 0; i < productos.length; i++) {
        let subseccion = document.getElementById("subseccion") 

        //CREA CONTENEDOR
        let contenedor = document.createElement("div")

        //CREAR IMAGEN
        let imagen = document.createElement("img")
        imagen.setAttribute("url", imagenes[i])
        imagen.setAttribute("alt", productos[i])
        contenedor.appendChild(imagen)

        //CREAR NOMBRE DEL PRODUCTO
        let producto = document.createElement("p")
        let textoProducto = document.createTextNode(productos[i])
        producto.setAttribute("class", "descripcion-producto");
        producto.appendChild(textoProducto)
        contenedor.appendChild(producto)

        //CREAR PRECIO DEL PRODUCTO
        let precio = document.createElement("p")
        let textoPrecio = document.createTextNode(precios[i] + "$")
        precio.setAttribute("class", "precio-producto")
        producto.appendChild(textoPrecio)
        contenedor.appendChild(precio)

        //CREAR INPUT DE CANTIDAD
        let inputCantidad = document.createElement("input")
        inputCantidad.setAttribute("class", "cant-producto")
        inputCantidad.setAttribute("type", "number")
        inputCantidad.setAttribute("placeholder", "Cantidad")
        contenedor.appendChild(inputCantidad)

        //CREAR INPUT DE AGREGAR
        let inputAgregar = document.createElement("input")
        inputAgregar.setAttribute("class", "btn-comprar")
        inputAgregar.setAttribute("type", "button")
        inputAgregar.setAttribute("value", "Agregar")
        contenedor.appendChild(inputAgregar)

        contenedor.setAttribute("class", "contenedor")
        contenedor.setAttribute("id", "contenedor")
        subseccion.appendChild(contenedor)
    } 
}

for (i = 0; i < productosAlmacen.length; i++) {
    let seccion = document.getElementById("seccion-almacen")
    llenarInformacionProductos(productosAlmacen, preciosAlmacen, imagenesAlmacen)
}

for (i = 0; i < productosBebidas.length; i++) {
    let seccion = document.getElementById("seccion-lacteos") 
    llenarInformacionProductos(productosBebidas, preciosBebidas, imagenesBebidas)
}


for (i = 0; i < productosLacteos.length; i++) {
    let seccion = document.getElementById("seccion-lacteos") 
    llenarInformacionProductos(productosLacteos, preciosLacteos, imagenesLacteos)
}

for (i = 0; i < productosPanaderia.length; i++) {
    let seccion = document.getElementById("seccion-panaderia") 
    llenarInformacionProductos(productosPanaderia, preciosPanaderia, imagenesPanaderia)
}



