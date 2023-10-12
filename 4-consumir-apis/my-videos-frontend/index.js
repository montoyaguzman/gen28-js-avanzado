const getButton = document.querySelector('#getVideos');
const registerForm = document.querySelector('#registerForm');

getButton.addEventListener('click', async () => {
    const URL = 'http://localhost:3000/videos';
    const resp = await fetch(URL);
    const videos = await resp.json();
    console.log(videos);
    /**
     * Desarrolar la vista
     * Creen el html de forma dinamica
     */
});

registerForm.addEventListener('submit', (event) => {

    event.preventDefault();
    
    const songInput = document.querySelector('#songName');
    const artistInput = document.querySelector('#artistName');
    const song = songInput.value;
    const artist = artistInput.value;
    const body = { name: song, artist: artist };

    createSong(body);

});

const createSong = async (body) => {
    const URL = 'http://localhost:3000/videos';
    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json', }
    };
    const resp = await fetch(URL, options);
    const createdElement = await resp.json();
    console.log(resp.status);
    console.log(createdElement);
    if (resp.status === 201) {
        alert(createdElement.message);
    } else {
        alert('hay un error');
    }
}

/**
 * Evento para obtener los datos del formulario y enviarlos al API
 */