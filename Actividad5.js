let inventario = [
    {nombre: "Mouse", precio: 25000, stock: 3},
    {nombre: "Teclado", precio: 8000, stock: 0},
    {nombre: "USB", precio: 15000, stock: 10},
    {nombre: "Monitor", precio: 45000, stock: 2},
    
];

const productosCriticos = function(array){
    let productosCriticosArray = [];
    for (let i=0; i<array.length; i++){
        if (array[i].stock == 0){
            alert("El producto: " + array[i].nombre + " está agotado")
            productosCriticosArray.push(array[i].nombre);
        } else if ((array[i].stock > 0) && (array[i].stock < 3)){
            alert("El producto: " + array[i].nombre + " tiene pocas unidades")
            productosCriticosArray.push(array[i].nombre);
        }
    };
    return productosCriticosArray;
};
alert("Los productos en el inventario son: " + inventario.map(producto => producto.nombre).join(", "));
const productosCriticosArray = productosCriticos(inventario);
alert("Los productos en estado crítico son: " + productosCriticosArray.join(", "));