class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class ItemCarrito {
    constructor(producto, unidades) {
        this.producto = producto;
        this.unidades = unidades;
    }


    calcularTotal() {
        return this.unidades * this.producto.precio;
    }
}

const productos = [
    new Producto("collar perlita", 2500),
    new Producto("collar otoño", 2000),
    new Producto("collar corazones", 2500),
    new Producto("collar caracoles", 4500),
    new Producto("collar perlita dije", 5000),
    new Producto("collar loló", 4500),
    new Producto("tobillera caracoles", 4500),
    new Producto("collar flores", 4500),
];

let carrito = [];

let seleccion = prompt("¿Deseas comprar algo? (si/no)");

while (seleccion !== "no" && seleccion !== "si") {
    alert("Por favor, ingresa 'si' o 'no'");
    seleccion = prompt("¿Deseas comprar algo? (si/no)");
}

if (seleccion === "si") {
    alert("Bienvenido/a a LOLÓ, tu tienda de collares y pulseras");
    let todosLosProductos = productos.map((producto) => `${producto.nombre}: $${producto.precio}`);
    alert("Los productos disponibles son: " + todosLosProductos.join(" - "));
} else if (seleccion === "no") {
    alert("Gracias por visitarnos");
}

while (seleccion !== "no") {
    let productoIngresado = prompt("Ingresa el nombre del producto que deseas comprar").toLowerCase();
    let productoEncontrado = productos.find((p) => p.nombre.toLowerCase() === productoIngresado);

    if (productoEncontrado) {
        let unidades = parseInt(prompt("Ingresa la cantidad de unidades que deseas comprar"));

        if (isNaN(unidades) || unidades <= 0) {
            alert("Por favor, ingresa un número válido de unidades");
            continue;
        }

    
        carrito.push(new ItemCarrito(productoEncontrado, unidades));
        console.log(`Producto agregado: ${productoEncontrado.nombre}, Unidades: ${unidades}`);
    } else {
        alert("Producto no encontrado");
    }

    seleccion = prompt("¿Deseas comprar algo más? (si/no)");

    if (seleccion === "no") {
        if (carrito.length === 0) {
            alert("No tienes productos en el carrito. Gracias por visitarnos.");
            break;
        }

        alert("Gracias por tu compra. Estos son los productos de tu carrito:");
        carrito.forEach((item) => {
            alert(
                `Producto: ${item.producto.nombre}, Unidades: ${item.unidades}, Total: $${item.calcularTotal()}`
            );
        });

        const total = carrito.reduce((acumulador, item) => acumulador + item.calcularTotal(), 0);
        console.log(`El total de tu compra es: $${total}`);
        alert(`El total de tu compra es: $${total}. ¡Gracias por elegir LOLÓ!`);
        break;
    }
}
