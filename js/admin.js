

function guardarProductos() {
  const productosJSON = JSON.stringify(PRODUCTOS);
  localStorage.setItem("productos", productosJSON);
}

function mostrarProductos() {
  const productosContainer = document.getElementById("productos-container");
  productosContainer.innerHTML = '';

  const productosJSON = localStorage.getItem("productos");
  productosJSON ? PRODUCTOS = JSON.parse(productosJSON) : null; 

  PRODUCTOS.forEach((producto) => {
    const productoCard = document.createElement("div");
    productoCard.classList.add("producto-card");
    productoCard.innerHTML = `
      <h6> ${producto.id} -  ${producto.nombre}</h6>
      <img src="${producto.imagen}">
      <p>Descripcion: ${producto.descripcion}</p>
      <p>Precio: $${producto.precio}</p>
      <p>Stock: ${producto.stock}</p>
      <button class="eliminar-btn" data-id="${producto.id}">Eliminar</button>
    `;
    productosContainer.appendChild(productoCard);

    const formEditar = document.getElementById("formEditar");
    formEditar.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombreExistente = document.getElementById("nombreExistente").value;
      const producto = PRODUCTOS.find(p => p.nombre === nombreExistente || p.id == nombreExistente);
      const nuevoNombre = document.getElementById("nuevoNombre").value;
      const nuevoDescripcion = document.getElementById("nuevoDescripcion").value;
      const nuevoPrecio = document.getElementById("nuevoPrecio").value;
      const nuevoStock = document.getElementById("nuevoStock").value;
      if (producto && nuevoNombre && nuevoPrecio && nuevoStock) {
        producto.nombre = nuevoNombre;
        producto.descripcion = nuevoDescripcion;
        producto.precio = Number(nuevoPrecio);
        producto.stock = Number(nuevoStock);
        guardarProductos();
        mostrarProductos();
        formEditar.reset();
      }
      Toastify({
        text: "El producto se edito correctamente",
        style:
        {background: "orange"},
        duration: 3000
        }).showToast();
    });

    const eliminarBtn = productoCard.querySelector(".eliminar-btn");
    eliminarBtn.addEventListener("click", () => {
      const id = eliminarBtn.getAttribute("data-id");
      const index = PRODUCTOS.findIndex(p => p.id == id);
      if (index !== -1) {
        PRODUCTOS.splice(index, 1);
        guardarProductos();
        mostrarProductos();
      }
      Toastify({
        text: "El producto se elimino correctamente",
        style:
        {background: "orange"},
        duration: 3000
        }).showToast();
    });
  });
}

function agregarProducto(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const descripcion = document.getElementById("descripcion").value;
  const precio = document.getElementById("precio").value;
  const stock = document.getElementById("stock").value;
  const nuevoId = PRODUCTOS.length + 1;
  PRODUCTOS.push({ id: nuevoId, nombre: nombre, descripcion: descripcion, precio: precio, stock: stock });
  guardarProductos();
  mostrarProductos();
  document.getElementById("formAgregar").reset();
  Toastify({
    text: "El producto agrego correctamente",
    style:
    {background: "orange"},
    duration: 3000
    }).showToast();
}



const form = document.getElementById("formAgregar");
form.addEventListener("submit", agregarProducto);
document.addEventListener("DOMContentLoaded", () => {
  obtenerProductos().then(() => {
    mostrarProductos();
  });
});
