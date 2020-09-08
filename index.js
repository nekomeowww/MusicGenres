const genres = require('./gen/genres.json')

class MusicGenres {
    constructor() {
        this.genres = genres
    }

    get() {
        return this.genres
    }
}

module.exports = MusicGenres