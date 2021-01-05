const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SubscriptionSchema = new Schema({
    _id: Schema.Types.ObjectId,
    // MemberId: Schema.Types.ObjectId,
    Movies: [new Schema({ movieId: Schema.Types.ObjectId, date: Date }, { _id: false })],
})

module.exports = mongoose.model('subscriptions', SubscriptionSchema)