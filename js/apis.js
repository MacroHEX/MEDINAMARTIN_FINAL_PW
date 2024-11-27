emailjs.init('ctBrlAzkMU_koqJc7');

// Navegación entre páginas
function navigateTo(page) {
    window.location.href = page;
}

// Página principal: API 1 - Enviar correo
document.getElementById('emailForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    emailjs.send('service_ksh09hc', 'template_a42fm0a', {
        email,
        subject,
        name,
        message,
    }).then(() => {
        document.getElementById('emailResponse').textContent = 'Correo enviado correctamente';
    }).catch(console.error);
});

// API 2 - Imágenes aleatorias
document.getElementById('fetchImages').addEventListener('click', function () {
    fetch('https://picsum.photos/1000/400') // API de Picsum Photos
        .then((response) => {
            const img = document.createElement('img');
            img.src = response.url;
            img.alt = 'Imagen aleatoria';
            img.style.width = '100%';
            document.getElementById('imageContainer').innerHTML = '';
            document.getElementById('imageContainer').appendChild(img);
        })
        .catch((error) => console.error('Error al obtener la imagen:', error));
});

// API 3 - Frases motivacionales
document.getElementById('fetchQuotes').addEventListener('click', function () {
    const url = 'https://es.wikiquote.org/w/api.php?action=parse&format=json&page=Plantilla:Frase-martes&origin=*';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Extraemos el HTML que contiene la frase y el autor
            const parser = new DOMParser();
            const doc = parser.parseFromString(data.parse.text['*'], 'text/html');

            // Localizamos la frase y el autor en el HTML
            const phraseElement = doc.querySelector('div[style*="text-align:center"]');
            const authorElement = doc.querySelector('div[style*="text-align:right"]');

            const phrase = phraseElement ? phraseElement.textContent.trim() : 'Frase no disponible';
            const author = authorElement ? authorElement.textContent.trim() : 'Autor desconocido';

            // Mostramos la frase y el autor en el HTML
            document.getElementById('quote').textContent = `"${phrase}" - ${author}`;
        })
        .catch(error => console.error('Error al obtener la frase:', error));
});