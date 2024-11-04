//Crear codigo para que yo completo el nombre pero no el apellido, me diga ingrese su apellido.
alert("Actividad 1: Pedir que el usuario igrese su apellido");
const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");

if(apellido != ""){
    alert("Bienvenido: " + nombre + " " + apellido);
    
}else{
    alert("Error: Ingrese su apellido.");
}

//Crear codigo para que yo completo el apellido pero no el nombre, me diga ingrese su nombre.
alert("Actividad 2: Pedir que el usuario ingrese su nombre.");
const nombreActividad2 = prompt("Ingrese su nombre");
const apellidoActividad2 = prompt("Ingrese su apellido");
if(nombreActividad2 != ""){
    alert("Bienvenido: " + nombreActividad2 + " " + apellidoActividad2);
    
}else{
    alert("Error: Ingrese su nombre.");
}
//Crear codigo para validar que el usuario no me escriba un numero.
alert("Validar que el usuario no me escriba un number")
const nombreActividad3 = prompt("Ingrese su nombre");
const apellidoActividad3 = prompt("Ingrese su apellido");

if (isNaN(nombreActividad3) || nombreActividad3.trim() === "") {
    alert("El valor ingresado no es un número");
} else {
    alert("Error: El valor ingresado es un número");
}


