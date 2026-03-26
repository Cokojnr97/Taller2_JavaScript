let VentasDiarias = [
    {dia: "Marzo 23", ventas: 45000},
    {dia: "Marzo 24", ventas: 60000},
    {dia: "Marzo 25", ventas: 30000},
    {dia: "Marzo 26", ventas: 8000},
    {dia: "Marzo 27", ventas: 120000},
    {dia: "Marzo 28", ventas: 20000},
    {dia: "Marzo 29", ventas: 7000},
    {dia: "Marzo 30", ventas: 90000},
    {dia: "Marzo 31", ventas: 40000},
    {dia: "Abril 1", ventas: 15000},
    {dia: "Abril 2", ventas: 5000},
    {dia: "Abril 3", ventas: 110000},
]

let diasVentasAltas = 0;
let diasVentasBajas = 0;
let totalVentas = 0;

for (let i = 0; i < VentasDiarias.length; i++) {
    totalVentas += VentasDiarias[i].ventas;
    if (VentasDiarias[i].ventas > 50000) {
        diasVentasAltas++;
    }
    if (VentasDiarias[i].ventas < 10000) {
        diasVentasBajas++;
    }
}

let tipoGanancias = "";
if (totalVentas < 100000) {
    tipoGanancias = "pérdidas";
} else if (totalVentas < 200000) {
    tipoGanancias = "ganancias moderadas";
} else {
    tipoGanancias = "ganancias altas";
}

alert("Días con ventas superiores a 50.000: " + diasVentasAltas);
alert("Días con ventas por debajo de 10.000: " + diasVentasBajas);
alert("Total acumulado: " + totalVentas);
alert("La tienda tuvo: " + tipoGanancias);