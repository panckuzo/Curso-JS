function agregarAlCarrito(evento) {
    evento.preventDefault();
    const boton = evento.target;
    const idProducto = boton.dataset.id;
    const producto = PRODUCTOS.find(p => p.id == idProducto);

    if (producto) {
        const itemCarrito = {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: parseInt(document.getElementById("quantity").value)
        };
        let carrito = JSON.parse(localStorage.getItem("carrito")) || []; 
        carrito.push(itemCarrito);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        console.log(carrito);
    } else {
        console.log("Producto no encontrado");
    }

    Toastify({
        text: "Se agrego al Carrito",
        style:
        {background: "orange"},
        duration: 3000
        }).showToast();

}

