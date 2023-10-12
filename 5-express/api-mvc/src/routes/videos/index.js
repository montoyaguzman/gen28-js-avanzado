const express = require('express');
const videosRouter = express.Router();
const {
  getAllVideos,
  getOneVideo,
  createVideo,
  modifyAllVideo,
  modifyPartialVideo,
  deleteVideo,
} = require('../../controllers/videos/');

const videos = [
    { id: 1, name: 'Kilometros', artist: 'Los Caligaris' },
    { id: 2, name: 'Closer', artist: 'The Chainsmokers' },
    { id: 3, name: 'Solo a Terceros', artist: 'Panda' },
];

// GET: Obtener todos los videos
videosRouter.get('/', getAllVideos);
  
// GET ONE
videosRouter.get('/:id', getOneVideo);

// POST: Crear un video recibido desde el request
videosRouter.post('/', createVideo);

// PUT: Modificacion del recurso completo
videosRouter.put('/:id', modifyAllVideo);

// PATCH: Modificacion parcial del recurso
videosRouter.patch('/:id', modifyPartialVideo);

// DELETE: Eliminar un recurso
videosRouter.delete('/:id', deleteVideo);

module.exports = { videosRouter };