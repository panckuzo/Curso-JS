
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



function vaciarCarrito() {
    localStorage.removeItem("carrito");
    location.reload();
  }

