let productosAlmacen = ["Fideos"];
let preciosAlmacen = [1500];
let imagenesAlmacen = ["Script/fideos.jpeg"]
let stockAlmacen = [10];

let seccion=document.getElementById("seccion")
function crearContenedor () {
    let contenedor=document.createElement("div")
    contenedor.setAttribute("class", "contenedor")
    contenedor.setAttribute("id", "contenedor")
    seccion.appendChild(contenedor)
}

function crearImagen (arrayImagenes, arrayProductos){
    let imagen=document.createElement("img")
    imagen.setAttribute("url", arrayImagenes[0])
    imagen.setAttribute("alt", arrayProductos[0])
    imagen.setAttribute("class", "imagen-producto")
    contenedor.appendChild(imagen)
}

function crearDescripcion (arrayProductos) {
    let descripcion = document.createElement("p");
    let textoDescripcion = document.createTextNode(arrayProductos[0]);
    descripcion.appendChild(textoDescripcion);
    descripcion.setAttribute("class", "descripcion");
    contenedor.appendChild(descripcion);
}

function crearPrecio (arrayPecios) {
    let precio = document.createElement("p");
    let textoPrecio = document.createTextNode(arrayPecios[0] + "$");
    precio.appendChild(textoPrecio);
    precio.setAttribute("class", "precio");
    contenedor.appendChild(precio);  
}

function crearInputCantidad() {
    let inputCantidad=document.createElement("input")
    inputCantidad.setAttribute("class", "cantidad-productos")
    inputCantidad.setAttribute("type", "number")
    inputCantidad.setAttribute("placeholder", "Cantidad")
    contenedor.appendChild(inputCantidad)
}

function crearInputAgregar() {
    let inputAgregar=document.createElement("input")
    inputAgregar.setAttribute("class", "btn-comprar")
    inputAgregar.setAttribute("type", "button")
    inputAgregar.setAttribute("value", "Agregar")
    contenedor.appendChild(inputAgregar)
}

crearContenedor()
crearImagen (imagenesAlmacen, productosAlmacen);
crearDescripcion (productosAlmacen);
crearPrecio (preciosAlmacen);
crearInputCantidad();
crearInputAgregar();
