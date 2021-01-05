const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MemberSchema = new Schema({
    Name: String,
    Email: String,
    City: String
})

module.exports = mongoose.model('members', MemberSchema)