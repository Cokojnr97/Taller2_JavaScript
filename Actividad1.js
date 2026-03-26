let diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
];

let numero = prompt ("Ingrese un número del 0 al 6");
let escribirDia = diasSemana[numero];

if (escribirDia) {
    alert("El día correspondiente es: " + escribirDia);
} else {
    alert("Número no válido. Ingrese un número del 0 al 6.");
}

