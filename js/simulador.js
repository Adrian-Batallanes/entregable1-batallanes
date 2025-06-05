const modelos = ["iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max"];
const precios = [1200, 1400, 1600, 1800];

let carrito = [];

// primera funcion seleccionar modelo de quipo
function elegirModelo() {
    let mensaje = "Modelos disponibles:\n";
    for (let i = 0; i < modelos.length; i++) {
    mensaje += `${i + 1}. ${modelos[i]} - $${precios[i]}\n`;
}

    let seleccion = parseInt(prompt(mensaje + "Elige un modelo (1-4):"));
    if (seleccion >= 1 && seleccion <= modelos.length) {
    return seleccion - 1; 
} else {
    alert("Selección inválida. Intenta de nuevo.");
    return elegirModelo();
}
}

// segunda funcion para elegir la cantidad y el precio 
function calcularCompra(indiceModelo) {
let cantidad = parseInt(prompt(`¿Cuántos ${modelos[indiceModelo]} deseas comprar?`));
if (isNaN(cantidad) || cantidad <= 0) {
    alert("Cantidad inválida. Intenta de nuevo.");
    return calcularCompra(indiceModelo);
}

  let subtotal = precios[indiceModelo] * cantidad;
    carrito.push({
    modelo: modelos[indiceModelo],
    cantidad,
    subtotal
});

alert(`Agregaste ${cantidad} ${modelos[indiceModelo]} al carrito. Subtotal: $${subtotal}`);
}

// tercera funcion resumen de la compra realizada
function mostrarResumen() {
    let total = 0;
    let resumen = "Resumen de tu compra:\n";
    for (let item of carrito) {
    resumen += `${item.cantidad} x ${item.modelo} = $${item.subtotal}\n`;
    total += item.subtotal;
}
    resumen += `Total a pagar: $${total}`;
alert(resumen);
}


function simulador() {
alert("¡Bienvenido al simulador de compra de iPhones!");

    let continuar = true;
    while (continuar) {
    let indice = elegirModelo();
    calcularCompra(indice);
    continuar = confirm("¿Querés agregar otro producto?");
}

    mostrarResumen();
}

simulador(); 