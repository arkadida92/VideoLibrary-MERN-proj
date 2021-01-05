const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SubsWatchedSchema = new Schema({
    _id: Schema.Types.ObjectId,
    members: [new Schema({ memberId: Schema.Types.ObjectId, mname: String, date: Date }, { _id: false })]
})

module.exports = mongoose.model('watchedSubs', SubsWatchedSchema)