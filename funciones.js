// Arreglo donde se van acumulando los productos
const listaProductos = [];

export function procesarFormulario(evento, inputNombre, inputPrecio) {
    evento.preventDefault();

    // 1. Validar que no envíen campos vacíos
    if (inputNombre.value.trim() === "" || inputPrecio.value.trim() === "") {
        alert("Por favor completa ambos campos");
        return;
    }

    // 2. Guardar el nuevo producto en el arreglo
    const producto = {
        nombre: inputNombre.value,
        precio: inputPrecio.value
    };
    listaProductos.push(producto);

    // 3. Obtener y limpiar la tabla
    const tbody = document.getElementById("cuerpo-tabla");
    tbody.replaceChildren();

    // 4. Dibujar todas las filas con un ciclo tradicional y nodos del DOM
    for (let i = 0; i < listaProductos.length; i++) {
        const item = listaProductos[i];

        const fila = document.createElement("tr");

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = item.nombre;

        const celdaPrecio = document.createElement("td");
        celdaPrecio.textContent = "$" + item.precio;

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);

        tbody.appendChild(fila);
    }

    // 5. Vaciar los inputs y dejar el cursor listo para escribir
    inputNombre.value = "";
    inputPrecio.value = "";
    inputNombre.focus();
}