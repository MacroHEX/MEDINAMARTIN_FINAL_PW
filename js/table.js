// Navegación entre páginas
function navigateTo(page) {
    window.location.href = page;
}

function calculateTotal() {
    let total = 0; // Declaración inicial
    const price = parseFloat(prompt('Ingrese el precio:')); // Convertimos el input a número
    const quantity = parseInt(prompt('Ingrese la cantidad:'), 10); // Convertimos el input a entero

    if (!isNaN(price) && !isNaN(quantity)) { // Verificamos que los valores sean números válidos
        total = price * quantity; // Calculamos el total
        alert(`El precio total es: ${total}`);
    } else {
        alert('Por favor, ingrese valores válidos.');
    }
}

function calculatePercentage() {
    const point = prompt('Ingrese el precio:');
    if (point) {
        const percentage = point * 0.30;
        alert(`El 30% del precio es: ${percentage}`);
    } else {
        alert('Por favor, ingrese un valor válido.');
    }
}

// Función para calcular el porcentaje
function calculateDiscount() {
    const price = parseFloat(prompt('Ingrese el precio:')); // Convertimos el input del precio a número
    const quantity = parseInt(prompt('Ingrese la cantidad:'), 10); // Convertimos el input de la cantidad a entero

    if (!isNaN(price) && !isNaN(quantity)) { // Verificamos que los valores sean números válidos
        const total = price * quantity; // Calculamos el precio total
        const discount = total * 0.25; // Calculamos el descuento del 25%
        const finalPrice = total - discount; // Calculamos el precio final con el descuento
        alert(`El precio total con un 25% de descuento es: ${finalPrice}`);
    } else {
        alert('Por favor, ingrese valores válidos.');
    }
}