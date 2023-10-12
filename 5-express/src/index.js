const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('server my-videos');
});

app.get('/hello', (req, res) => {
  res.send('<h1>Hola desde express chavos!</h1>');
});

const videos = [
    { id: 1, name: 'Kilometros', artist: 'Los Caligaris' },
    { id: 2, name: 'Closer', artist: 'The Chainsmokers' },
    { id: 3, name: 'Solo a Terceros', artist: 'Panda' },
];

app.use(express.json());
app.use(cors());

// GET: Obtener todos los videos
app.get('/videos', (req, res) => {
    res.json(videos);
});

// GET ONE
app.get('/videos/:id', (req, res) => {
    console.log(req.query.pageSize);
    console.log(req.query.paginationKey);
    const id = req.params.id;
    const foundedVideo = videos.find(element => element.id === parseInt(id));
    res.json(foundedVideo);
});

// POST: Crear un video recibido desde el request
app.post('/videos', (req, res) => {
    console.log('req: ', req);
    console.log('req.body: ', req.body);
    const newBody = req.body;
    videos.push(newBody);
    res.status(201).json({ message: 'todo gucci!', song: newBody.name });
});

// PUT: Modificacion del recurso completo
app.put('/videos/:id', (req, res) => {
    const id = req.params.id;
    const newBody = req.body;
    const foundedPosition = videos.findIndex(element => element.id === parseInt(id));
    videos[foundedPosition] = newBody;
    res.status(200).json({ id });
});

// PATCH: Modificacion parcial del recurso
app.patch('/videos/:id', (req, res) => {
    const id = req.params.id;
    const newBody = req.body;
    const foundedPosition = videos.findIndex(element => element.id === parseInt(id));
    videos[foundedPosition] = { ...videos[foundedPosition], ...newBody };
    res.status(200).json({ id });
});

// DELETE: Eliminar un recurso
app.delete('/videos/:id', (req, res) => {
    const id = req.params.id;
    const foundedPosition = videos.findIndex(element => element.id === parseInt(id));
    videos.splice(foundedPosition, 1);
    res.status(200).json({ id });
});


app.listen(port, () => {
  console.log(`Servidor my-videos runging in ${port}`);
});