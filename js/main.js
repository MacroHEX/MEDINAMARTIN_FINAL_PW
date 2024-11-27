window.onload = function () {
    alert("¡Bienvenido a nuestra página principal!");
    const userName = prompt("¿Cómo te llamas?");

    if (userName) {
        document.getElementById("mensaje-bienvenida").innerText = `Hola, ${userName}, gracias por visitarnos.`;
    }
};

// Navegación entre páginas
function navigateTo(page) {
    window.location.href = page;
}
