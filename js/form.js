emailjs.init('ctBrlAzkMU_koqJc7');

// Navegación entre páginas
function navigateTo(page) {
    window.location.href = page;
}

// Enviar formulario
document.getElementById('studentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const firstname = document.getElementById('studentName').value;
    const surname = document.getElementById('studentSurname').value;
    const note = document.getElementById('studentNote').value;
    const observation = document.getElementById('studentObservation').value;

    emailjs.send('service_ksh09hc', 'template_a42fm0a', {
        name,
        firstname,
        surname,
        note,
        observation,
    }).then(() => {
        alert(`Formulario enviado`);
    }).finally(() => {
        clearForm();
    })
});

// Limpiar formulario
function clearForm() {
    document.getElementById('studentForm').reset();
    alert('Formulario limpiado.');
}
