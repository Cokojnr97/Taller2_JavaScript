let numeros = [];
let numero = "";
let i = 1; 
do {
    numero = prompt("Ingrese el número " + i + ". Escriba X para terminar.");
    if ((numero != "X") && (numero != "x")){
        let valor = Number(numero);
        if (!Number.isNaN(valor)) { // Uso !Number.isNaN() para asegurar que el valor es un número válido
            numeros.push(valor);
            i++;
        } else {
            alert("Entrada no válida. Por favor ingrese un número válido o X para terminar.");
        }
    } else {
        numero = "X";
    };
} while (numero != "X" && numero != "x");

// Version Alternativa con cualquier letra
/*
do {
    numero = prompt("Ingrese el número " + i + ". Escriba una letra para terminar.");

        if (/^[a-zA-Z]+$/.test(numero)) {
        break;
    }

    let valor = Number(numero);
    if (!Number.isNaN(valor)) {
        numeros.push(valor);
        i++;
    } else {
        alert("Entrada no válida. Ingrese un número o una letra para terminar.");
    }
} while (true);
*/

const sumatotal = function(array) {
    if (array.length === 0) {
        alert("No se ingresaron números válidos.");
        return;
    }

    let suma = 0;
    let promedio = 0;
    for (let x = 0; x < array.length; x++){
        suma += array[x];
    }
    promedio = suma / array.length;
    alert("La suma total de los números del arreglo es: " + suma + " y el promedio es: " + promedio);
};
alert("Los números ingresados son: " + numeros.join(", "));
sumatotal(numeros);


