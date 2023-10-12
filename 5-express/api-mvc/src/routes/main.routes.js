const { fakeRouter } = require('./fake/'); // require('./fake/index.js');
const { videosRouter } = require('./videos/');

const routerApi = (app) => {
    app.use('/fake', fakeRouter);
    app.use('/videos', videosRouter);
};

module.exports = { routerApi };