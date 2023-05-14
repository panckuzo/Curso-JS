/*
const slider = document.querySelector('.slider-range-price');
const rangePrice = document.querySelector('.range-price');

slider.addEventListener('input', () => {
  const value = slider.value;
  const unit = slider.dataset.unit;
  rangePrice.innerHTML = `${unit}${value} - ${unit}30000`;
});
*/
/*

// seleccione todos los elementos .slider-range-price
document.querySelectorAll('.slider-range-price').forEach(function (slider) {
    // obtener los valores de los atributos de datos
    var min = parseInt(slider.dataset.min);
    var max = parseInt(slider.dataset.max);
    var unit = slider.dataset.unit;
    var value_min = parseInt(slider.dataset.valueMin);
    var value_max = parseInt(slider.dataset.valueMax);
    var label_result = slider.dataset.labelResult;

    // seleccione los elementos HTML relevantes
    var range = slider.querySelector('.slider-range');
    var resultElement = range.querySelector('.range-price');

    // filtrar los productos por precio
    var filteredProducts = PRODUCTOS.filter(function (product) {
        return product.precio >= min && product.precio <= max;
    });

    // crear el control deslizante utilizando la biblioteca noUiSlider
    noUiSlider.create(range, {
        start: [value_min, value_max],
        connect: true,
        step: 1,
        range: {
            'min': min,
            'max': max
        }
    });

    // actualizar el resultado en el elemento correspondiente
    range.noUiSlider.on('update', function (values, handle) {
        var result = label_result + " " + unit + parseInt(values[0]) + ' - ' + unit + parseInt(values[1]);
        resultElement.innerHTML = result;

        // filtrar los productos por precio y actualizar la lista de productos
        var filteredProducts = PRODUCTOS.filter(function (product) {
            return product.precio >= parseInt(values[0]) && product.precio <= parseInt(values[1]);
        });
        actualizarProductos(filteredProducts);
    });
});

// función para actualizar la lista de productos
function actualizarProductos(productos) {
    // seleccione el elemento HTML que contiene la lista de productos
    var listaProductos = document.getElementById('lista-productos');

    // vaciar la lista de productos
    listaProductos.innerHTML = '';

    // agregar los productos actualizados a la lista
    productos.forEach(function (producto) {
        var item = document.createElement('div');
        item.classList.add('single-product-wrapper');
        item.innerHTML = `
            <div class="product-img">
                <img src="${producto.imagen}" alt="">
                <img class="hover-img" src="${producto.imagen}" alt="">
            </div>
            <div class="product-description">
                <span>${producto.nombre}</span>
                <h6>$${producto.precio}</h6>
            </div>
        `;
        listaProductos.appendChild(item);
    });
}
*/