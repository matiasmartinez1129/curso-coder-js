let producto1_nombre = "Zapatillas";
const zapatillas = 80000;
let producto1_enCarrito = 0;

let producto2_nombre = "Buzo";
const buzo = 25000;
let producto2_enCarrito = 0;

let producto3_nombre = "Lentes";
const lentes = 23000;
let producto3_enCarrito = 0;

let total = 0;

for (let i = 0; i < 3; i++) { 
    let seleccion = prompt("Seleccione un producto para agregar al carrito:\n a) Zapatillas - $80000\n b) Buzo - $36000\n c) Lentes - $27000\n\nEscriba 'salir' para terminar");

    if (seleccion === "a") {
        producto1_enCarrito += 1;
        total += zapatillas;
       alert(producto1_nombre + " agregado al carrito.");
    } else if (seleccion === "b") {
        producto2_enCarrito += 1;
        total += buzo;
        alert(producto2_nombre + " agregado al carrito.");
    } else if (seleccion === "c") {
        producto3_enCarrito += 1;
        total += lentes;
        alert(producto3_nombre + " agregado al carrito.");
    } else if (seleccion.toLowerCase() === "salir") {
        break; 
    } else {
        alert("Selección no válida. Por favor, elija a, b, c o salir.");
    }
}

alert("Carrito de compras:");
if (producto1_enCarrito > 0) {
    alert(producto1_nombre + " x " + producto1_enCarrito + " = $" + (zapatillas * producto1_enCarrito));
}
    
if (producto2_enCarrito > 0){
    alert(producto2_nombre + " x " + producto2_enCarrito + " = $" + (buzo * producto2_enCarrito));
} 
    
if (producto3_enCarrito > 0){
    alert(producto3_nombre + " x " + producto3_enCarrito + " = $" + (lentes * producto3_enCarrito));
}

alert("Total: $" + total);
