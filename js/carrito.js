const PRODUCTOS = [
    { id: 1, nombre: "ESPEJO JUANA MACRAME", descripcion: "", precio: 4000, stock: 5, },
    { id: 2, nombre: "ESPEJO ALONDRA MEDIANO", descripcion: "", precio: 6000, stock: 6, },
    { id: 3, nombre: "ESPEJO SOL GRANDE", descripcion: "", precio: 5000, stock: 3, },
    { id: 1, nombre: "ESPEJO JUANA MACRAME", descripcion: "", precio: 4000, stock: 4, },
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
    { id: 16, nombre: "FUSTA TRES VELAS AROMATICAS (Nag Champa)", descripcion: "", precio: 1500, stock: 1010, },
    { id: 17, nombre: "FUSTA TRES VELAS AROMATICAS (Lavanda)", descripcion: "", precio: 1500, stock: 1010, },
    { id: 18, nombre: "FUSTA TRES VELAS AROMATICAS (Jazmin)", descripcion: "", precio: 1500, stock: 1010, },
    { id: 19, nombre: "VELA AROMATICA GRANDE (Nag Champa)", descripcion: "", precio: 1300, stock: 1010, },
    { id: 20, nombre: "VELA AROMATICA GRANDE(Lavanda)", descripcion: "", precio: 1300, stock: 1010, },
    { id: 21, nombre: "VELAS AROMATICA GRANDE (Jazmin)", descripcion: "", precio: 1300, stock: 1010, },
    { id: 22, nombre: "VELA AROMATICA MEDIANA (Nag Champa)", descripcion: "", precio: 1100, stock: 1010, },
    { id: 23, nombre: "VELA AROMATICA MEDIANA (Lavanda)", descripcion: "", precio: 1100, stock: 1010, },
    { id: 24, nombre: "VELAS AROMATICA MEDIANA (Jazmin)", descripcion: "", precio: 1100, stock: 1010, },
    { id: 25, nombre: "PANAERA TRIGAL MEDIANA", descripcion: "", precio: 2100, stock: 10, },
    { id: 26, nombre: "PANERA TRIGAL GRANDE", descripcion: "", precio: 2800, stock: 10, },
    { id: 27, nombre: "CORONA NAVIDEÑA", descripcion: "", precio: 3700, stock: 10, },
    { id: 28, nombre: "ESTRELLAS", descripcion: "", precio: 500, stock: 10, },
    { id: 29, nombre: "ARBOLITO JERUSALEM GRANDE", descripcion: "", precio: 3600, stock: 10, },
    { id: 30, nombre: "ARBOLITO JERUSALEM CHICO", descripcion: "", precio: 3200, stock: 10, },
]
// Definimos una constante para el nombre de la clave en localStorage
const CART_STORAGE = "carrito";

// Inicializamos el carrito vacío
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
  // Buscamos el producto correspondiente por su id en el array PRODUCTOS
  const productoEncontrado = PRODUCTOS.find((producto) => producto.id === idProducto);

  // Si el producto no existe, salimos de la función
  if (!productoEncontrado) return;

  // Buscamos si el producto ya está en el carrito
  const productoExistente = carrito.find((producto) => producto.id === idProducto);

  // Si el producto ya está en el carrito, incrementamos su cantidad
  if (productoExistente) productoExistente.cantidad++;
  // Si el producto no está en el carrito, lo agregamos con cantidad 1
  else carrito.push({ ...productoEncontrado, cantidad: 1 });

  // Actualizamos el carrito en localStorage
  guardarCarritoEnStorage();
}

// Función para remover un producto del carrito
function removerDelCarrito(idProducto) {
  // Buscamos el producto correspondiente por su id en el carrito
  const index = carrito.findIndex((producto) => producto.id === idProducto);

  // Si el producto no está en el carrito, salimos de la función
  if (index === -1) return;

  // Si el producto está en el carrito y su cantidad es mayor a 1, decrementamos su cantidad
  if (carrito[index].cantidad > 1) carrito[index].cantidad--;
  // Si el producto está en el carrito y su cantidad es 1, lo eliminamos del carrito
  else carrito.splice(index, 1);

  // Actualizamos el carrito en localStorage
  guardarCarritoEnStorage();
}

// Función para vaciar el carrito por completo
function vaciarCarrito() {
  // Vaciamos el carrito
  carrito = [];

  // Actualizamos el carrito en localStorage
  guardarCarritoEnStorage();
}

// Función para guardar el carrito en localStorage
function guardarCarritoEnStorage() {
  // Guardamos el carrito en localStorage
  localStorage.setItem(CART_STORAGE, JSON.stringify(carrito));
}

// Función para recuperar el carrito desde localStorage
function recuperarCarritoDesdeStorage() {
  // Obtenemos el carrito desde localStorage
  const carritoJson = localStorage.getItem(CART_STORAGE);

  // Si el carrito no existe en localStorage, salimos de la función
  if (!carritoJson) return;

  // Convertimos el carrito desde formato JSON
  carrito = JSON.parse(carritoJson);
}

// Llamamos a la función para recuperar el carrito desde localStorage
recuperarCarritoDesdeStorage();



/*
const botonesAgregar = document.querySelectorAll(".btn.amado-btn");
botonesAgregar.forEach((boton, index) => {
  boton.setAttribute("id", "btn-amado-btn" + index);
  boton.addEventListener("click", () => {
    const producto = PRODUCTOS[index];
    agregarAlCarrito(producto);
  });
});

/*
// Definir los botones de agregar al carrito y asignarles un ID único
const botonesAgregar = document.querySelectorAll(".btn amado-btn");
botonesAgregar.forEach((boton, index) => {
  boton.setAttribute("id", "btn amado-btn" + index);
  boton.addEventListener("click", agregarAlCarrito);
});


// Función para agregar un producto al carrito
function agregarAlCarrito(evento) {
  const boton = evento.target;
  const id = boton.getAttribute("id").split("-")[2];
  const producto = PRODUCTOS[id];*/
/*
  function agregarAlCarrito(producto) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const productoEnCarrito = carrito.find((p) => p.id === producto.id);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  // Verificar si el producto ya está en el carrito
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const indice = carrito.findIndex((prod) => prod.id === id);

  if (indice === -1) {
    // Si el producto no está en el carrito, agregarlo
    carrito.push({
      id: id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1,
    });
  } else {
    // Si el producto ya está en el carrito, aumentar su cantidad
    carrito[indice].cantidad++;
  }

  // Guardar el carrito en localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));


// Definimos una constante para el nombre de la clave en localStorage
const CART_STORAGE = "carrito";

// Inicializamos el carrito vacío
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
  // Buscamos el producto correspondiente por su id en el array PRODUCTOS
  const productoEncontrado = PRODUCTOS.find(producto => producto.id === idProducto);

  // Si el producto no existe, salimos de la función
  if (!productoEncontrado) {
    return;
  }

  // Buscamos si el producto ya está en el carrito
  const productoExistente = carrito.find(producto => producto.id === idProducto);

  // Si el producto ya está en el carrito, incrementamos su cantidad
  if (productoExistente) {
    productoExistente.cantidad++;
  }
  // Si el producto no está en el carrito, lo agregamos con cantidad 1
  else {
    carrito.push({
      id: productoEncontrado.id,
      nombre: productoEncontrado.nombre,
      precio: productoEncontrado.precio,
      cantidad: 1
    });
  }

  // Actualizamos el carrito en localStorage
  guardarCarritoEnStorage();
}

// Función para remover un producto del carrito
function removerDelCarrito(idProducto) {
  // Buscamos el producto correspondiente por su id en el carrito
  const index = carrito.findIndex(producto => producto.id === idProducto);

  // Si el producto no está en el carrito, salimos de la función
  if (index === -1) {
    return;
  }

  // Si el producto está en el carrito y su cantidad es mayor a 1, decrementamos su cantidad
  if (carrito[index].cantidad > 1) {
    carrito[index].cantidad--;
  }
  // Si el producto está en el carrito y su cantidad es 1, lo eliminamos del carrito
  else {
    carrito.splice(index, 1);
  }

  // Actualizamos el carrito en localStorage
  guardarCarritoEnStorage();
}

// Función para vaciar el carrito por completo
function vaciarCarrito() {
  // Vaciamos el carrito
  carrito = [];

  // Actualizamos el carrito en localStorage
  guardarCarritoEnStorage();
}

// Función para guardar el carrito en localStorage
function guardarCarritoEnStorage() {
  // Convertimos el carrito a formato JSON
  const carritoJson = JSON.stringify(carrito);

  // Guardamos el carrito en localStorage
  localStorage.setItem(CART_STORAGE, carritoJson);
}

// Función para recuperar el carrito desde localStorage
function recuperarCarritoDesdeStorage() {
  // Obtenemos el carrito desde localStorage
  const carritoJson = localStorage.getItem(CART_STORAGE);

  // Si el carrito no existe en localStorage, salimos de la función
  if (!carritoJson) {
    return;
  }

  // Convertimos el carrito desde formato JSON
  carrito = JSON.parse(carritoJson);
}

// Llamamos a la función para recuperar el carrito desde localStorage
recuperarCarritoDesdeStorage();

function actualizarCarrito() {
  // obtener la tabla y el tbody
  const tabla = document.querySelector('.cart-table');
  const tbody = tabla.querySelector('tbody');

  // limpiar la tabla
  tbody.innerHTML = '';

  // variables para subtotal y total
  let subtotal = 0;
  let total = 0;

  // iterar sobre los productos en el carrito
  for (let producto of carrito) {
    // crear una nueva fila en la tabla
    const fila = document.createElement('tr');
/*
    // agregar la imagen del producto
    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
    const tdImagen = document.createElement('td');
    tdImagen.classList.add('cart_product_img');
    tdImagen.appendChild(imagen);
    fila.appendChild(tdImagen);
*/
/*    
// agregar el nombre del producto
    const nombre = document.createElement('h5');
    nombre.textContent = producto.nombre;
    const tdNombre = document.createElement('td');
    tdNombre.classList.add('cart_product_desc');
    tdNombre.appendChild(nombre);
    fila.appendChild(tdNombre);

    // agregar el precio del producto
    const precio = document.createElement('span');
    precio.textContent = `$${producto.precio}`;
    const tdPrecio = document.createElement('td');
    tdPrecio.classList.add('price');
    tdPrecio.appendChild(precio);
    fila.appendChild(tdPrecio);

    // agregar la cantidad del producto
    const cantidad = document.createElement('input');
    cantidad.type = 'number';
    cantidad.min = 1;
    cantidad.value = producto.cantidad;
    cantidad.addEventListener('change', (event) => {
      const nuevaCantidad = parseInt(event.target.value);
      if (nuevaCantidad < 1) {
        eliminarDelCarrito(producto.id);
      } else {
        modificarCantidadDelCarrito(producto.id, nuevaCantidad);
      }
      actualizarCarrito();
    });
    const divCantidad = document.createElement('div');
    divCantidad.classList.add('qty-btn', 'd-flex');
    divCantidad.appendChild(cantidad);
    const tdCantidad = document.createElement('td');
    tdCantidad.classList.add('qty');
    tdCantidad.appendChild(divCantidad);
    fila.appendChild(tdCantidad);

    // agregar el botón de eliminar producto
    const botonEliminar = document.createElement('button');
    botonEliminar.classList.add('btn', 'btn-danger');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
      eliminarDelCarrito(producto.id);
      actualizarCarrito();
    });
    const tdEliminar = document.createElement('td');
    tdEliminar.appendChild(botonEliminar);
    fila.appendChild(tdEliminar);

    // agregar la fila a la tabla
    tbody.appendChild
    // actualizar el subtotal y el total
    subtotal += producto.precio * producto.cantidad;
  }
  total = subtotal;
  
  // actualizar la tabla de resumen
const subtotalElemento = document.querySelector('.summary-table li:first-child span:last-child');
const totalElemento = document.querySelector('.summary-table li:last-child span:last-child');
subtotalElemento.textContent = `$${subtotal}`;
totalElemento.textContent = `$${total}`;

  
  // función para eliminar un producto del carrito
  function eliminarDelCarrito(id) {
  carrito = carrito.filter((producto) => producto.id !== id);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  }
  
  // función para modificar la cantidad de un producto en el carrito
  function modificarCantidadDelCarrito(id, nuevaCantidad) {
  for (let producto of carrito) {
  if (producto.id === id) {
  producto.cantidad = nuevaCantidad;
  break;
  }
  }
  localStorage.setItem('carrito', JSON.stringify(carrito));
  }
  }
  // actualizar el carrito al cargar la página
  actualizarCarrito();

*/


/*
const carrito = [];



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
