

function mostrarProductosEnLaPagina() {
    const todosLosProductos = document.getElementById("container");

    PRODUCTOS.forEach((producto) => {
        
        const div = document.createElement("div");
        div.classList = "col-12 col-sm-6 col-md-12 col-xl-6";
        div.innerHTML = `
            <div class="single-product-wrapper">
            <!-- Product Image -->
                <div class="product-img">
                <a href="${producto.href}"><img src="${producto.imagen}" alt="${producto.nombre}"></a>
            
            <!-- Hover Thumb -->
                <a href="${producto.href}"> <img class="hover-img" src="${producto.imagen2}" alt="${producto.nombre}"></a>
                </div>

            <!-- Product Description -->
                <div class="product-description d-flex align-items-center justify-content-between">
            <!-- Product Meta Data -->
                <div class="product-meta-data">
                <div class="line"></div>
                <p class="product-price">$${producto.precio}</p>
                <a href="${producto.href}">
                <h6>${producto.nombre}</h6>
                </a>
                </div>
            <!-- Ratings & Cart -->
                <div class="ratings-cart text-right">
                <div class="ratings">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>
    `;
        todosLosProductos.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    obtenerProductos().then(() => {
    mostrarProductosEnLaPagina();
    });
});
