const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MovieSchema = new Schema({
    Name: String,
    Genres: [String],
    Image: String,
    Premiered: Date
})

module.exports = mongoose.model('movies', MovieSchema)