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
    { name: 'Kilometros', artist: 'Los Caligaris' },
    { name: 'Closer', artist: 'The Chainsmokers' },
    { name: 'Solo a Terceros', artist: 'Panda' },
]

app.use(express.json());
app.use(cors());

// GET: Obtener todos los videos
app.get('/videos', (req, res) => {
    res.json(videos);
});

// POST: Crear un video recibido desde el request
app.post('/videos', (req, res) => {
    console.log('req: ', req);
    console.log('req.body: ', req.body);
    const newBody = req.body;
    videos.push(newBody);
    res.status(404).json({ message: 'todo gucci!' });
});

app.listen(port, () => {
  console.log(`Servidor my-videos runging in ${port}`);
});