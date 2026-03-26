/* Crea un programa que: 

Permita agregar productos con prompt 

Pregunte al usuario cuántos productos desea registrar. 

Cada producto debe tener:  

nombre  

precio  

Guardarlos en un arreglo de objetos  

Mostrar:  

Todos los productos  

Productos mayores a cierto precio  

Buscar un producto por nombre */

let productos = [];
let productosMayoresA100k = [];
let cantidadProductos = prompt("¿Cuántos productos desea ingresar?");

for (i=0; i<cantidadProductos; i++){
    productos[i] = {};
    productos[i].nombre = prompt("Ingrese el nombre del producto #" + (i+1) + ".");
    productos[i].precio = prompt("Ingrese el precio del producto #" + (i+1) + ".");

    if (productos[i].precio > 100000){
        productosMayoresA100k.push(productos[i]);
    };
};

alert("Todos los productos ingresados son: " + productos.map(producto => producto.nombre + " (COP$" + producto.precio + ")").join(", "));
alert("Todos los productos mayores a 100k son: " + productosMayoresA100k.map(producto => producto.nombre + " (COP$" + producto.precio + ")").join(", "));

let productoBuscado = prompt("Ingrese el nombre del producto que desea buscar:");
let productoEncontrado = productos.find(producto => producto.nombre.toLowerCase() === productoBuscado.toLowerCase());
if (productoEncontrado) {
    alert("Producto encontrado: " + productoEncontrado.nombre + " (COP$" + productoEncontrado.precio + ")");
} else {
    alert("Producto no encontrado.");
};


