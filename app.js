import { procesarFormulario } from './funciones.js';

const listaProductos = [];
const boton = document.querySelector("button"); 
const capturar_nombre = document.getElementById("nombre");
const capturar_precio = document.getElementById("precio");

boton.addEventListener("click", (evento) => {
  
    procesarFormulario(evento, capturar_nombre, capturar_precio);
});