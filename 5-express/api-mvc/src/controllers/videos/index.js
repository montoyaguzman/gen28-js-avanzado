const videos = [
    { id: 1, name: 'Kilometros', artist: 'Los Caligaris' },
    { id: 2, name: 'Closer', artist: 'The Chainsmokers' },
    { id: 3, name: 'Solo a Terceros', artist: 'Panda' },
];

const getAllVideos = (req, res) => {
    res.json(videos);
};

const getOneVideo = (req, res) => {
    console.log(req.query.pageSize);
    console.log(req.query.paginationKey);
    try {
        const id = req.params.id;
        const foundedVideo = videos.find(element => element.id === parseInt(id));
        res.json(foundedVideo);
    } catch(error) {
        res.status(500).json({ error: 'ha ocurrido un error'});
    }
};

const createVideo = (req, res) => {
    console.log('req: ', req);
    console.log('req.body: ', req.body);
    const newBody = req.body;
    videos.push(newBody);
    res.status(201).json({ message: 'todo gucci!', song: newBody.name });
}

const modifyAllVideo = (req, res) => {
    const id = req.params.id;
    const newBody = req.body;
    const foundedPosition = videos.findIndex(element => element.id === parseInt(id));
    videos[foundedPosition] = newBody;
    res.status(200).json({ id });
};

const modifyPartialVideo = (req, res) => {
    const id = req.params.id;
    const newBody = req.body;
    const foundedPosition = videos.findIndex(element => element.id === parseInt(id));
    videos[foundedPosition] = { ...videos[foundedPosition], ...newBody };
    res.status(200).json({ id });
};

const deleteVideo = (req, res) => {
    const id = req.params.id;
    const foundedPosition = videos.findIndex(element => element.id === parseInt(id));
    videos.splice(foundedPosition, 1);
    res.status(200).json({ id });
};

module.exports = {
    getAllVideos,
    getOneVideo,
    createVideo,
    modifyAllVideo,
    modifyPartialVideo,
    deleteVideo,
}