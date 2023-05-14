PRODUCTOS = [];

const obtenerProductos = async () => {
    try {
    const response = await fetch("js/productos.json");
    const data = await response.json();
    PRODUCTOS = data;
    } 
    catch (error) {
    console.log("Error al cargar los productos", error);
    }
}
obtenerProductos()

