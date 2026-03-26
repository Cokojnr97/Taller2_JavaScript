const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
];

const activityContent = document.getElementById("activityContent");
const navButtons = Array.from(document.querySelectorAll("[data-activity]"));

const setActiveButton = (activityId) => {
    navButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.activity === String(activityId));
    });
};

const renderResult = (html) => {
    const result = activityContent.querySelector(".result-box");
    if (result) {
        result.innerHTML = html;
    }
};

const renderActivity = (activityId) => {
    setActiveButton(activityId);

    if (activityId === 1) {
        activityContent.innerHTML = `
            <h2 class="activity-title">Actividad 1</h2>
            <p class="activity-subtitle">Mostrar el dia de la semana segun un numero de 0 a 6.</p>
            <form id="formA1" class="form-grid">
                <label>
                    Numero (0 a 6)
                    <input id="a1Number" type="number" min="0" max="6" required>
                </label>
                <div class="action-row">
                    <button type="submit" class="mac-button">Ejecutar actividad</button>
                </div>
            </form>
            <div class="result-box"><h3>Resultado</h3><p>Ingresa un numero para comenzar.</p></div>
        `;

        document.getElementById("formA1").addEventListener("submit", (event) => {
            event.preventDefault();
            const value = Number(document.getElementById("a1Number").value);
            if (!Number.isInteger(value) || value < 0 || value > 6) {
                renderResult('<h3>Resultado</h3><p class="error">Numero no valido. Debe estar entre 0 y 6.</p>');
                return;
            }
            renderResult(`<h3>Resultado</h3><p>El dia correspondiente es: <strong>${days[value]}</strong>.</p>`);
        });
        return;
    }

    if (activityId === 2) {
        activityContent.innerHTML = `
            <h2 class="activity-title">Actividad 2</h2>
            <p class="activity-subtitle">Encontrar nombre mas largo y mas corto en una lista.</p>
            <form id="formA2" class="form-grid">
                <label>
                    Nombres (uno por linea)
                    <textarea id="a2Names" placeholder="Ana\nCarlos\nMaria"></textarea>
                </label>
                <div class="action-row">
                    <button type="submit" class="mac-button">Analizar nombres</button>
                </div>
            </form>
            <div class="result-box"><h3>Resultado</h3><p>Escribe al menos un nombre.</p></div>
        `;

        document.getElementById("formA2").addEventListener("submit", (event) => {
            event.preventDefault();
            const names = document
                .getElementById("a2Names")
                .value
                .split("\n")
                .map((name) => name.trim())
                .filter(Boolean);

            if (names.length === 0) {
                renderResult('<h3>Resultado</h3><p class="error">Debes ingresar al menos un nombre.</p>');
                return;
            }

            let longest = names[0];
            let shortest = names[0];

            for (let i = 1; i < names.length; i += 1) {
                if (names[i].length > longest.length) longest = names[i];
                if (names[i].length < shortest.length) shortest = names[i];
            }

            const tags = names.map((name) => `<span class="tag">${name}</span>`).join("");
            renderResult(`
                <h3>Resultado</h3>
                <p><strong>Nombres ingresados:</strong></p>
                <p>${tags}</p>
                <p><strong>Nombre mas largo:</strong> ${longest}</p>
                <p><strong>Nombre mas corto:</strong> ${shortest}</p>
            `);
        });
        return;
    }

    if (activityId === 3) {
        activityContent.innerHTML = `
            <h2 class="activity-title">Actividad 3</h2>
            <p class="activity-subtitle">Calcular suma y promedio de numeros. Puedes finalizar con X.</p>
            <form id="formA3" class="form-grid">
                <label>
                    Datos separados por coma o linea (ejemplo: 4, 9, 2, X)
                    <textarea id="a3Values" placeholder="4\n10\n20\nX"></textarea>
                </label>
                <div class="action-row">
                    <button type="submit" class="mac-button">Calcular</button>
                </div>
            </form>
            <div class="result-box"><h3>Resultado</h3><p>Ingresa numeros para continuar.</p></div>
        `;

        document.getElementById("formA3").addEventListener("submit", (event) => {
            event.preventDefault();
            const tokens = document
                .getElementById("a3Values")
                .value
                .split(/[\n,]+/)
                .map((item) => item.trim())
                .filter(Boolean);

            const values = [];
            for (let i = 0; i < tokens.length; i += 1) {
                const current = tokens[i].toLowerCase();
                if (current === "x") break;
                const num = Number(tokens[i]);
                if (!Number.isNaN(num)) {
                    values.push(num);
                }
            }

            if (values.length === 0) {
                renderResult('<h3>Resultado</h3><p class="error">No se ingresaron numeros validos.</p>');
                return;
            }

            const sum = values.reduce((acc, num) => acc + num, 0);
            const avg = sum / values.length;

            renderResult(`
                <h3>Resultado</h3>
                <p><strong>Numeros validos:</strong> ${values.join(", ")}</p>
                <p><strong>Suma total:</strong> ${sum}</p>
                <p><strong>Promedio:</strong> ${avg.toFixed(2)}</p>
            `);
        });
        return;
    }

    if (activityId === 4) {
        activityContent.innerHTML = `
            <h2 class="activity-title">Actividad 4</h2>
            <p class="activity-subtitle">Manipulacion de arreglos de amigos y enemigos.</p>
            <form id="formA4" class="form-grid">
                <div class="action-row">
                    <button type="submit" class="mac-button">Ejecutar pasos del ejercicio</button>
                </div>
            </form>
            <div class="result-box"><h3>Resultado</h3><p>Presiona el boton para mostrar el proceso.</p></div>
        `;

        document.getElementById("formA4").addEventListener("submit", (event) => {
            event.preventDefault();

            const amigos = ["Pedro", "Maria", "Joan", "Pili"];
            const enemigosBuena = ["Scipion", "Scorpio", "Black"];
            const cantidadAmigos = amigos.length;

            const frase = `Mis amigos son ${amigos[1]} y ${amigos[2]}`;
            amigos.unshift("Aitana");
            amigos.splice(0, 1, "Nacho");
            enemigosBuena.push("Thor");

            renderResult(`
                <h3>Resultado</h3>
                <p><strong>Frase pedida:</strong> ${frase}</p>
                <p><strong>Cantidad de amigos inicial:</strong> ${cantidadAmigos}</p>
                <p><strong>Lista final de amigos:</strong> ${amigos.join(", ")}</p>
                <p><strong>Lista final de enemigos:</strong> ${enemigosBuena.join(", ")}</p>
            `);
        });
        return;
    }

    if (activityId === 5) {
        activityContent.innerHTML = `
            <h2 class="activity-title">Actividad 5</h2>
            <p class="activity-subtitle">Detectar productos en estado critico de inventario.</p>
            <form id="formA5" class="form-grid">
                <div class="action-row">
                    <button type="submit" class="mac-button">Analizar inventario</button>
                </div>
            </form>
            <div class="result-box"><h3>Resultado</h3><p>Ejecuta para ver el estado del inventario.</p></div>
        `;

        document.getElementById("formA5").addEventListener("submit", (event) => {
            event.preventDefault();

            const inventory = [
                { name: "Mouse", price: 25000, stock: 3 },
                { name: "Teclado", price: 8000, stock: 0 },
                { name: "USB", price: 15000, stock: 10 },
                { name: "Monitor", price: 45000, stock: 2 }
            ];

            const criticalProducts = inventory
                .filter((item) => item.stock === 0 || (item.stock > 0 && item.stock < 3))
                .map((item) => ({
                    name: item.name,
                    status: item.stock === 0 ? "Agotado" : "Pocas unidades"
                }));

            const inventoryTags = inventory.map((item) => `<span class="tag">${item.name}</span>`).join("");
            const criticalList = criticalProducts.length
                ? `<ul>${criticalProducts.map((item) => `<li><strong>${item.name}</strong>: ${item.status}</li>`).join("")}</ul>`
                : "<p>No hay productos criticos.</p>";

            renderResult(`
                <h3>Resultado</h3>
                <p><strong>Productos registrados:</strong></p>
                <p>${inventoryTags}</p>
                <p><strong>Estado critico:</strong></p>
                ${criticalList}
            `);
        });
        return;
    }

    if (activityId === 6) {
        activityContent.innerHTML = `
            <h2 class="activity-title">Actividad 6</h2>
            <p class="activity-subtitle">Resumen de ventas, dias altos y dias bajos.</p>
            <form id="formA6" class="form-grid">
                <div class="action-row">
                    <button type="submit" class="mac-button">Calcular estadisticas</button>
                </div>
            </form>
            <div class="result-box"><h3>Resultado</h3><p>Ejecuta para mostrar el analisis de ventas.</p></div>
        `;

        document.getElementById("formA6").addEventListener("submit", (event) => {
            event.preventDefault();

            const sales = [
                { day: "Marzo 23", amount: 45000 },
                { day: "Marzo 24", amount: 60000 },
                { day: "Marzo 25", amount: 30000 },
                { day: "Marzo 26", amount: 8000 },
                { day: "Marzo 27", amount: 120000 },
                { day: "Marzo 28", amount: 20000 },
                { day: "Marzo 29", amount: 7000 },
                { day: "Marzo 30", amount: 90000 },
                { day: "Marzo 31", amount: 40000 },
                { day: "Abril 1", amount: 15000 },
                { day: "Abril 2", amount: 5000 },
                { day: "Abril 3", amount: 110000 }
            ];

            let highDays = 0;
            let lowDays = 0;
            let total = 0;

            sales.forEach((sale) => {
                total += sale.amount;
                if (sale.amount > 50000) highDays += 1;
                if (sale.amount < 10000) lowDays += 1;
            });

            let earningsType = "ganancias altas";
            if (total < 100000) earningsType = "perdidas";
            else if (total < 200000) earningsType = "ganancias moderadas";

            renderResult(`
                <h3>Resultado</h3>
                <p><strong>Dias con ventas sobre 50.000:</strong> ${highDays}</p>
                <p><strong>Dias con ventas bajo 10.000:</strong> ${lowDays}</p>
                <p><strong>Total acumulado:</strong> ${total}</p>
                <p><strong>Estado general:</strong> ${earningsType}</p>
            `);
        });
        return;
    }

    if (activityId === 7) {
        activityContent.innerHTML = `
            <h2 class="activity-title">Actividad 7</h2>
            <p class="activity-subtitle">Registrar productos, filtrar por precio y buscar por nombre.</p>
            <form id="formA7" class="form-grid">
                <label>
                    Cantidad esperada de productos
                    <input id="a7Count" type="number" min="1" value="3" required>
                </label>
                <label>
                    Productos (uno por linea con formato: nombre,precio)
                    <textarea id="a7Products" placeholder="Laptop, 2500000\nMouse, 70000\nTeclado, 120000"></textarea>
                </label>
                <label>
                    Precio minimo para filtrar
                    <input id="a7Threshold" type="number" min="0" value="100000" required>
                </label>
                <label>
                    Producto a buscar por nombre
                    <input id="a7Search" type="text" placeholder="Mouse" required>
                </label>
                <div class="action-row">
                    <button type="submit" class="mac-button">Procesar actividad</button>
                </div>
            </form>
            <div class="result-box"><h3>Resultado</h3><p>Ingresa los datos para ejecutar la actividad.</p></div>
        `;

        document.getElementById("formA7").addEventListener("submit", (event) => {
            event.preventDefault();

            const expectedCount = Number(document.getElementById("a7Count").value);
            const threshold = Number(document.getElementById("a7Threshold").value);
            const searchName = document.getElementById("a7Search").value.trim().toLowerCase();
            const lines = document
                .getElementById("a7Products")
                .value
                .split("\n")
                .map((line) => line.trim())
                .filter(Boolean);

            if (!Number.isInteger(expectedCount) || expectedCount <= 0) {
                renderResult('<h3>Resultado</h3><p class="error">La cantidad esperada debe ser un entero mayor que 0.</p>');
                return;
            }

            const products = [];
            for (let i = 0; i < lines.length; i += 1) {
                const parts = lines[i].split(",");
                if (parts.length < 2) continue;

                const name = parts[0].trim();
                const price = Number(parts.slice(1).join(",").trim());
                if (!name || Number.isNaN(price)) continue;

                products.push({ name, price });
            }

            if (products.length === 0) {
                renderResult('<h3>Resultado</h3><p class="error">Debes ingresar al menos un producto valido con formato nombre,precio.</p>');
                return;
            }

            const higherThanThreshold = products.filter((product) => product.price > threshold);
            const foundProduct = products.find((product) => product.name.toLowerCase() === searchName);

            const expectedMessage = products.length === expectedCount
                ? `Coincide la cantidad esperada (${expectedCount}) con la cantidad procesada.`
                : `Se esperaban ${expectedCount} productos, pero se procesaron ${products.length}.`;

            const allProductsList = `<ul>${products
                .map((product) => `<li><strong>${product.name}</strong>: COP$ ${product.price.toLocaleString("es-CO")}</li>`)
                .join("")}</ul>`;

            const higherList = higherThanThreshold.length
                ? `<ul>${higherThanThreshold
                    .map((product) => `<li><strong>${product.name}</strong>: COP$ ${product.price.toLocaleString("es-CO")}</li>`)
                    .join("")}</ul>`
                : `<p>No hay productos con precio mayor a COP$ ${threshold.toLocaleString("es-CO")}.</p>`;

            const foundMessage = foundProduct
                ? `<p><strong>Producto encontrado:</strong> ${foundProduct.name} (COP$ ${foundProduct.price.toLocaleString("es-CO")})</p>`
                : "<p><strong>Producto buscado:</strong> No encontrado.</p>";

            renderResult(`
                <h3>Resultado</h3>
                <p>${expectedMessage}</p>
                <p><strong>Todos los productos:</strong></p>
                ${allProductsList}
                <p><strong>Productos mayores a COP$ ${threshold.toLocaleString("es-CO")}:</strong></p>
                ${higherList}
                ${foundMessage}
            `);
        });
        return;
    }

    activityContent.innerHTML = `
        <h2 class="activity-title">Actividad no disponible</h2>
        <p class="activity-subtitle">Selecciona una actividad valida del menu.</p>
    `;
};

navButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const activityId = Number(button.dataset.activity);
        renderActivity(activityId);
    });
});

renderActivity(1);
