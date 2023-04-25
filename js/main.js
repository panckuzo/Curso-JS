alert ("Bienvenid@ a Simple Deco!")

const PRODUCTOS= [
  { id:2, nombre: "ESPEJO ALONDRA MEDIANO", precio: 6000 },
  { id:3, nombre: "ESPEJO SOL GRANDE", precio: 5000 },
  { id:1, nombre: "ESPEJO JUANA MACRAME", precio: 4000 },
  { id:4, nombre: "LAMPARA ALMA", precio: 9000 },
  { id:5, nombre: "LAMPARA LIBERTAD", precio: 6000 },
  { id:6, nombre: "CESTO DAMASCO GRANDE", precio: 4000 },
  { id:7, nombre: "CESTO BRISA", precio: 5000 },
  { id:8, nombre: "CESTO LEÑERO RENATA", precio: 7000 },
  { id:9, nombre: "CESTO CALA", precio: 6000 },
  { id:10, nombre: "CESTO BRASIL", precio: 6000 },
  { id:11, nombre: "CAJON LAUREL MEDIANO", precio: 7000 },
  { id:12, nombre: "TAPICES MACRAME JOSE", precio: 4000 },
  { id:13, nombre: "TAPIZ MACRAME TATI", precio: 4000 },  
  { id:14, nombre: "TAPIZ-NOE", precio: 8000 },
  { id:15, nombre: "TAPIZ MACRAME PLUMA", precio: 2500 },
  { id:16, nombre: "FUSTA TRES VELAS AROMATICAS (Nag Champa)", precio: 1500 },
  { id:17, nombre: "FUSTA TRES VELAS AROMATICAS (Lavanda)", precio: 1500 },
  { id:18, nombre: "FUSTA TRES VELAS AROMATICAS (Jazmin)", precio: 1500 },
  { id:19, nombre: "VELA AROMATICA GRANDE (Nag Champa)", precio: 1300 },
  { id:20, nombre: "VELA AROMATICA GRANDE(Lavanda)", precio: 1300 },
  { id:21, nombre: "VELAS AROMATICA GRANDE (Jazmin)", precio: 1300 },
  { id:22, nombre: "VELA AROMATICA MEDIANA (Nag Champa)", precio: 1100 },
  { id:23, nombre: "VELA AROMATICA MEDIANA (Lavanda)", precio: 1100 },
  { id:24, nombre: "VELAS AROMATICA MEDIANA (Jazmin)", precio: 1100 },
  { id:25, nombre: "PANAERA TRIGAL MEDIANA", precio: 2100 },
  { id:26, nombre: "PANERA TRIGAL GRANDE", precio: 2800 },
  { id:27, nombre: "CORONA NAVIDEÑA", precio: 3700 },
  { id:28, nombre: "ESTRELLAS", precio: 500 },
  { id:29, nombre: "ARBOLITO JERUSALEM GRANDE", precio: 3600 },
  { id:30, nombre: "ARBOLITO JERUSALEM CHICO", precio: 3200 },
]

let tipoUsuario = prompt("Ingrese su tipo de usuario (cliente o administrador):")

	while (tipoUsuario.toLowerCase() !== "cliente" && tipoUsuario.toLowerCase() !== "administrador")
  {
  	alert("El tipo de usuario ingresado no es válido. Por favor, ingrese 'cliente' o 'administrador'.")

    tipoUsuario = prompt("Ingrese su tipo de usuario (cliente o administrador):")
	}

	alert("Bienvenido! Usted ah seleccionado el de tipo de usuario " + tipoUsuario.toLowerCase() + ".")



while (tipoUsuario.toLowerCase() === "administrador") {
  const nombreUsuario = prompt("Ingrese su nombre de usuario (para el tutor, el usuario es jose)");

  if (nombreUsuario.toLowerCase() === "jose") {
    let contraseña = prompt("Ingrese su contraseña (para el tutor, la contraseña es 1234)");

    while (contraseña !== "1234") {
      contraseña = prompt("La contraseña ingresada no es válida. Por favor, vuelva a intentarlo:");
    }

    alert("Bienvenido, usted es un usuario administrador");

    let opcion = mostrarOpciones();

    while (opcion !== "4") {
      switch (opcion) {
        case "1":
          agregarProducto();
          break;
        case "2":
          editarProducto();
          break;
        case "3":
          eliminarProducto();
          break;
        default:
          alert("Opción inválida. Por favor, seleccione una opción válida.");
      }
      opcion = mostrarOpciones();
    }
    break;
  } else {
    alert("El usuario ingresado no es válido");
  }
}

function mostrarOpciones() {
  const opcion = prompt(`Seleccione una opción:
  1. Agregar un producto
  2. Editar un producto
  3. Eliminar un producto
  4. Salir`);
  return opcion;
}

function agregarProducto() {
  const id = prompt("Ingrese el ID del nuevo producto:");
  const nombre = prompt("Ingrese el nombre del nuevo producto:");
  const precio = parseFloat(prompt("Ingrese el precio del nuevo producto:"));
  const nuevoProducto = { id, nombre, precio };
  PRODUCTOS.push(nuevoProducto);
  alert(`El producto ${nombre} ha sido agregado.`);
}

function editarProducto() {
  const idProducto = prompt("Ingrese el ID del producto que desea editar:");
  const producto = PRODUCTOS.find(p => p.id == idProducto);

  if (producto) {
    const nuevoNombre = prompt(`Ingrese el nuevo nombre para el producto ${producto.nombre}:`);
    const nuevoPrecio = parseFloat(prompt(`Ingrese el nuevo precio para el producto ${producto.nombre}:`));
    producto.nombre = nuevoNombre;
    producto.precio = nuevoPrecio;
    alert(`El producto ${producto.nombre} ha sido actualizado.`);
  } else {
    alert("El producto seleccionado no existe. Por favor, seleccione un número o ID de producto válido.");
  }
}

function eliminarProducto() {
  const idProducto = prompt("Ingrese el ID del producto que desea eliminar:");
  const index = PRODUCTOS.findIndex(p => p.id == idProducto);

  if (index !== -1) {
    const nombreProducto = PRODUCTOS[index].nombre;
    PRODUCTOS.splice(index, 1);
    alert(`El producto ${nombreProducto} ha sido eliminado.`);
  } else {
    alert("El producto seleccionado no existe. Por favor, seleccione un número o ID de producto válido.");
  }
}

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
