const PRODUCTOS = [
    { id: 1, nombre: "ESPEJO JUANA MACRAME", descripcion: "", precio: 4000, stock: 5, },
    { id: 2, nombre: "ESPEJO ALONDRA MEDIANO", descripcion: "", precio: 6000, stock: 6, },
    { id: 3, nombre: "ESPEJO SOL GRANDE", descripcion: "", precio: 5000, stock: 3, },
    { id: 4, nombre: "LAMPARA ALMA", descripcion: "", precio: 9000, stock: 4, },
    { id: 5, nombre: "LAMPARA LIBERTAD", descripcion: "", precio: 6000, stock: 2, },
    { id: 6, nombre: "CESTO DAMASCO GRANDE", descripcion: "", precio: 4000, stock: 8, },
    { id: 7, nombre: "CESTO BRISA", descripcion: "", precio: 5000, stock: 10, },
    { id: 8, nombre: "CESTO LEÑERO RENATA", descripcion: "", precio: 7000, stock: 5, },
    { id: 9, nombre: "CESTO CALA", descripcion: "", precio: 6000, stock: 4, },
    { id: 10, nombre: "CESTO BRASIL", descripcion: "", precio: 6000, stock: 6, },
    { id: 11, nombre: "CAJON LAUREL MEDIANO", descripcion: "", precio: 7000, stock: 4, },
    { id: 12, nombre: "TAPICES MACRAME JOSE", descripcion: "", precio: 4000, stock: 2, },
    { id: 13, nombre: "TAPIZ MACRAME TATI", descripcion: "", precio: 4000, stock: 3, },
    { id: 14, nombre: "TAPIZ-NOE", descripcion: "", precio: 8000, stock: 4, },
    { id: 15, nombre: "TAPIZ MACRAME PLUMA", descripcion: "", precio: 2500, stock: 4, },
    { id: 16, nombre: "FUSTA TRES VELAS AROMATICAS (Nag Champa)", descripcion: "", precio: 1500, stock: 10, },
    { id: 17, nombre: "FUSTA TRES VELAS AROMATICAS (Lavanda)", descripcion: "", precio: 1500, stock: 10, },
    { id: 18, nombre: "FUSTA TRES VELAS AROMATICAS (Jazmin)", descripcion: "", precio: 1500, stock: 10, },
    { id: 19, nombre: "VELA AROMATICA GRANDE (Nag Champa)", descripcion: "", precio: 1300, stock: 10, },
    { id: 20, nombre: "VELA AROMATICA GRANDE(Lavanda)", descripcion: "", precio: 1300, stock: 10, },
    { id: 21, nombre: "VELAS AROMATICA GRANDE (Jazmin)", descripcion: "", precio: 1300, stock: 10, },
    { id: 22, nombre: "VELA AROMATICA MEDIANA (Nag Champa)", descripcion: "", precio: 1100, stock: 10, },
    { id: 23, nombre: "VELA AROMATICA MEDIANA (Lavanda)", descripcion: "", precio: 1100, stock: 10, },
    { id: 24, nombre: "VELAS AROMATICA MEDIANA (Jazmin)", descripcion: "", precio: 1100, stock: 10, },
    { id: 25, nombre: "PANAERA TRIGAL MEDIANA", descripcion: "", precio: 2100, stock: 10, },
    { id: 26, nombre: "PANERA TRIGAL GRANDE", descripcion: "", precio: 2800, stock: 10, },
    { id: 27, nombre: "CORONA NAVIDEÑA", descripcion: "", precio: 3700, stock: 10, },
    { id: 28, nombre: "ESTRELLAS", descripcion: "", precio: 500, stock: 10, },
    { id: 29, nombre: "ARBOLITO JERUSALEM GRANDE", descripcion: "", precio: 3600, stock: 10, },
    { id: 30, nombre: "ARBOLITO JERUSALEM CHICO", descripcion: "", precio: 3200, stock: 10, },
]


function guardarProductos() {
  const productosJSON = JSON.stringify(PRODUCTOS);
  localStorage.setItem("productos", productosJSON);
}


function mostrarProductos() {
  const productosContainer = document.getElementById("productos-container");
  productosContainer.innerHTML = '';

  PRODUCTOS.forEach((producto) => {
    const productoCard = document.createElement("div");
    productoCard.classList.add("producto-card");
    productoCard.innerHTML = `
      <h6> ${producto.id} -  ${producto.nombre}</h6>
      <p>Descripcion: ${producto.descripcion}</p>
      <p>Precio: $${producto.precio}</p>
      <p>Stock: ${producto.stock}</p>
      <button class="eliminar-btn" data-id="${producto.id}">Eliminar</button>
    `;
    productosContainer.appendChild(productoCard);


    const formEditar = document.getElementById('formEditar');
formEditar.addEventListener('submit', (e) => {
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
});
/*
    const editarBtn = productoCard.querySelector('.editar-btn');
    editarBtn.addEventListener('click', () => {
      const id = editarBtn.getAttribute('data-id');
      const producto = PRODUCTOS.find(p => p.id == id);
      const nuevoNombre = document.getElementById("nuevoNombre").value;
      const nuevoDescripcion = document.getElementById("nuevoDescripcion").value;
      const nuevoPrecio = document.getElementById("nuevoPrecio").value;
      const nuevoStock = document.getElementById("nuevoStock").value;
      if (nuevoNombre && nuevoPrecio && nuevoStock) {
        producto.nombre = nuevoNombre;
        producto.descripcion = nuevoDescripcion;
        producto.precio = Number(nuevoPrecio);
        producto.stock = Number(nuevoStock);
        guardarProductos();
        mostrarProductos();
        document.getElementById('#editar').reset();
      }
    });
    */

    
    const eliminarBtn = productoCard.querySelector('.eliminar-btn');
    eliminarBtn.addEventListener('click', () => {
      const id = eliminarBtn.getAttribute('data-id');
      const index = PRODUCTOS.findIndex(p => p.id == id);
      if (index !== -1) {
        PRODUCTOS.splice(index, 1);
        guardarProductos();
        mostrarProductos();
      }
    });
  });
}

function agregarProducto(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const descripcion = document.getElementById('descripcion').value;
  const precio = document.getElementById('precio').value;
  const stock = document.getElementById('stock').value;
  const nuevoId = PRODUCTOS.length + 1;
  PRODUCTOS.push({ id: nuevoId, nombre: nombre, descripcion: descripcion, precio: precio, stock: stock });
  guardarProductos();
  mostrarProductos();
  document.getElementById('formAgregar').reset();
}


mostrarProductos();


const form = document.getElementById('formAgregar');
form.addEventListener('submit', agregarProducto);

