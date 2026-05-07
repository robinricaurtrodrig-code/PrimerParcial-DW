"use strict";

const producto = {
 nombreProducto: "Monitor de 20 pulgadas",
 precio: 200,
 disponibilidad: true,
 catgoria: "Monitores"
};

// los onbjetos por defectos si se pueden modificar a pesar que sea const

Object.freeze(producto); // con esto el onjet ya no puede ser modificado
//con freeze no se puede agregar ni eliminar propiedades
// con freeze tampoco se puede cambiar valores

console.log(Object.isFrozen(producto));

object.seal(producto);
producto.precio = 400;
console.log(producto.precio);