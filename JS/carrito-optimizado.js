const productos = [
    { nombre: "zapatillas", precio: 80000, cantidad: 0 },
    { nombre: "buzo", precio: 25000, cantidad: 0 },
    { nombre: "lentes", precio: 23000, cantidad: 0 }
];

let total = 0;

function agregarCarrito(opcion){
    if(opcion === "a"){
        productos[0].cantidad += 1;
        total += productos[0].precio;
    }else if(opcion === "b"){
        productos[1].cantidad += 1;
        total += productos[1].precio;
    }else if(opcion === "c"){
        productos[2].cantidad += 1;
        total += productos[2].precio;
    }else{
        alert("Error: por favor elija entre a, b, c o salir");
    }
}

function mostrarCarrito() {
    alert("Carrito de compras:");
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].cantidad > 0) {
            alert(productos[i].nombre + " x " + productos[i].cantidad + " = $" + (productos[i].precio * productos[i].cantidad));
        }
    }
    alert("Total: $" + total);
}

for(let i = 0; i < 3; i++){
    let seleccion = prompt("Seleccione un producto para agregar al carrito:\n a) zapatillas - $80000\n b) buzo - $36000\n c) lentes - $27000\n\nEscriba 'salir' para terminar");
    if(seleccion.toLowerCase === "salir"){
        break;
    }else{
        agregarCarrito(seleccion);
    }
}

mostrarCarrito();