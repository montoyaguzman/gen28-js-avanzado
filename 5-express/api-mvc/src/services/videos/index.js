class VideosServices {
    
    constructor() {
        this.videos = [
            { id: 1, name: 'Kilometros', artist: 'Los Caligaris' },
            { id: 2, name: 'Closer', artist: 'The Chainsmokers' },
            { id: 3, name: 'Solo a Terceros', artist: 'Panda' },
        ];
    }

    getById(id) {
        const foundedVideo = this.videos.find(element => element.id === parseInt(id));
        return foundedVideo;
    }

}

module.exports = { VideosServices };