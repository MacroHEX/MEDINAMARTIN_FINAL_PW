emailjs.init('ctBrlAzkMU_koqJc7');

// Login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'USER' && password === 'PASS') { // Simulación de contraseña correcta
        alert('Ingreso correcto');
        sendLoginEmail(username);
    } else {
        alert('Usuario o Contraseña incorrecta');
        document.getElementById('message').textContent = 'Contraseña incorrecta';
    }
});

// Enviar correo al ingresar
function sendLoginEmail(username) {
    emailjs.send('service_ksh09hc', 'template_u55xy58', {
        username
    }).then(() => {
        console.log('Correo enviado exitosamente');
        window.location.href = 'main.html';
    }).catch(console.error);
}
