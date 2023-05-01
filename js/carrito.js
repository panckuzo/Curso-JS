
let carrito = JSON.parse(localStorage.getItem("carrito"));


let productosHTML = "";
let subtotal = 0;
if (carrito && carrito.length > 0) {
    for (let i = 0; i < carrito.length; i++) {
    let producto = carrito[i];
    let subtotalProducto = producto.cantidad * producto.precio;
    subtotal += subtotalProducto;


    productosHTML += `
    <tr>
        <td class="cart_product_img">
            <a href="#"><img src="${producto.imagen}" alt="${producto.nombre}"></a>
        </td>
        <td class="cart_product_desc">
            <h5>${producto.nombre}</h5>
        </td>
        <td class="price">
            <span>$${producto.precio.toFixed(2)}</span>
        </td>
        <td class="qty">
            <div class="qty-btn d-flex">
            <p>${producto.cantidad}</p>
            </div>
        </td>
        </tr>
    `;
    }
}


let total = subtotal;


document.querySelector(".summary-table li:first-child span:last-child").textContent = "$" + subtotal.toFixed(2);
document.querySelector(".summary-table li:last-child span:last-child").textContent = "$" + total.toFixed(2);


document.querySelector(".cart-table tbody").innerHTML = productosHTML;


/*

const agregarAlCarrito = (opcion) => {document.getElementById ()

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
*/
