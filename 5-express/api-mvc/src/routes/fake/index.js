const express = require('express');
const fakeRouter = express.Router();

fakeRouter.get('/', (req, res) => {
    res.send('server my-videos');
});

fakeRouter.get('/hello', (req, res) => {
  res.send('<h1>Hola desde express chavos!</h1>');
});

module.exports = { fakeRouter };