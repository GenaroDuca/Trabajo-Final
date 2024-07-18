for (i=0;i<4; i++) {
    let container=document.createElement("div")
    

    let producto=document.createElement("p")
    let productoTexto=document.createTextNode("Fideo")
    producto.appendChild(productoTexto)
    container.appendChild(productoTexto)

    let imagen=document.createElement("img");
    imagen.setAttribute("url", "Media/fideos.jpeg");
    imagen.setAttribute("alt", "arrayProductos[0]");
    imagen.setAttribute("class", "imagen-producto");
    container.appendChild(imagen);

    container.setAttribute("class", "container")
    container.setAttribute("id", "container")
    section.appendChild(container)
}
