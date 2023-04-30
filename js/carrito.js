const carrito = [];

const mostrarProductos = () => {
    const listaProductos = PRODUCTOS.map(p => `${p.id}. ${p.nombre} - $${p.precio}`).join("\n");
    const opcion = prompt(`Ingrese el número o ID del producto que desea agregar al carrito:\n${listaProductos}`);
    return opcion;
}

const agregarAlCarrito = (opcion) => {
    const producto = PRODUCTOS.find(p => p.id == opcion);

    if (producto) {
        carrito.push(producto);
        alert(`El producto ${producto.nombre} ha sido agregado al carrito.`);
    } else {
        alert("El producto seleccionado no existe. Por favor, seleccione un número o ID de producto válido.");
    }
}

let continuar = true;
while (continuar) {
    const opcion = mostrarProductos();
    if (opcion) {
        agregarAlCarrito(opcion);
    }
    continuar = confirm("¿Desea agregar otro producto al carrito?\n\nAceptar = Agregar otro producto\nCancelar = Finalizar compra");
}

let total = 0;
if (carrito.length > 0) {
    const listaCarrito = carrito.map(p => `${p.nombre} - $${p.precio}`).join("\n");
    total = carrito.reduce((acc, p) => acc + p.precio, 0);
    alert(`Los siguientes productos han sido agregados al carrito:\n\n${listaCarrito}\n\nTotal: $${total} \n\nGracias por su compra!`);
} else {
    alert("El carrito está vacío.");
}
