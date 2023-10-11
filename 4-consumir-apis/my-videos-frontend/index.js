const getButton = document.querySelector('#getVideos');

getButton.addEventListener('click', async () => {
    const URL = 'http://localhost:3000/videos';
    const resp = await fetch(URL);
    const videos = await resp.json();
    console.log(videos);
});

/**
 * Evento para obtener los datos del formulario y enviarlos al API
 */