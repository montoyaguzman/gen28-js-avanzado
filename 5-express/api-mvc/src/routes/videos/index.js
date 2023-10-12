const express = require('express');
const videosRouter = express.Router();

const videos = [
    { id: 1, name: 'Kilometros', artist: 'Los Caligaris' },
    { id: 2, name: 'Closer', artist: 'The Chainsmokers' },
    { id: 3, name: 'Solo a Terceros', artist: 'Panda' },
];

// GET: Obtener todos los videos
videosRouter.get('/', (req, res) => {
    res.json(videos);
  });
  
  // GET ONE
  videosRouter.get('/:id', (req, res) => {
    console.log(req.query.pageSize);
    console.log(req.query.paginationKey);
    const id = req.params.id;
    const foundedVideo = videos.find(element => element.id === parseInt(id));
    res.json(foundedVideo);
  });
  
  // POST: Crear un video recibido desde el request
  videosRouter.post('/', (req, res) => {
    console.log('req: ', req);
    console.log('req.body: ', req.body);
    const newBody = req.body;
    videos.push(newBody);
    res.status(201).json({ message: 'todo gucci!', song: newBody.name });
  });
  
  // PUT: Modificacion del recurso completo
  videosRouter.put('/:id', (req, res) => {
    const id = req.params.id;
    const newBody = req.body;
    const foundedPosition = videos.findIndex(element => element.id === parseInt(id));
    videos[foundedPosition] = newBody;
    res.status(200).json({ id });
  });
  
  // PATCH: Modificacion parcial del recurso
  videosRouter.patch('/:id', (req, res) => {
    const id = req.params.id;
    const newBody = req.body;
    const foundedPosition = videos.findIndex(element => element.id === parseInt(id));
    videos[foundedPosition] = { ...videos[foundedPosition], ...newBody };
    res.status(200).json({ id });
  });
  
  // DELETE: Eliminar un recurso
  videosRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    const foundedPosition = videos.findIndex(element => element.id === parseInt(id));
    videos.splice(foundedPosition, 1);
    res.status(200).json({ id });
  });

  module.exports = { videosRouter };