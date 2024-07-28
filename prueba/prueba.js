// codigo antiguo -------------------------------------------------------------------------------------------

//calcularCosteTotal(productos)

//Validacion de inputs, suma de precios de una categoria ----------------------------------------------------
/*function accederInputs(producto, precio, stock) {
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

                //actualizar stock
                let cantidadStock = document.getElementById("stock-producto" +producto[i])
                let cantidadStockString= cantidadStock.innerText
                let cantidadStockNumber = parseInt(cantidadStockString)
                let stockActualizado = cantidadStockNumber-input
                stock[i]=stockActualizado
                console.log(stock)

                
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

                //feedback botón cagregar
                btnAgregar.value = "Agregado ✔"
                btnAgregar.setAttribute("disabled", "true")
            }
        })

    }

}

//Calcular precio total--------------------------------------------------------------------------------------

/function calcularCosteTotal(producto) {
    let sumaPreciosSeccion = 0;
    let btnIrComprar = document.getElementById("btn-ir-comprar");
    btnIrComprar.addEventListener("click", () => {
        for (let i = 0; i < producto.length; i++) {
            let input = document.getElementById("precio-" + producto[i]);
            if (input) {
                let precioText = input.innerText;
                let precioNum = parseInt(precioText);
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
};*/