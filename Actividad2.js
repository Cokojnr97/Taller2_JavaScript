let nombres = [];
let cantidadNombres = prompt ("¿Cuántos nombres desea ingresar?");
for (let i = 0; i < cantidadNombres; i++){
    nombres.push (prompt ("Escriba el nombre # " + (i + 1)));
};

let nombreMasLargo = nombres[0];
let nombreMasCorto = nombres[0];
for (let i = 1; i < nombres.length; i++){
    if (nombres[i].length > nombreMasLargo.length){
        nombreMasLargo = nombres[i];
    }
    if (nombres[i].length < nombreMasCorto.length){
        nombreMasCorto = nombres[i];
    }
}
alert (nombres.join(", "));
alert("Nombre más largo: " + nombreMasLargo);
alert("Nombre más corto: " + nombreMasCorto);

