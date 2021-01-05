const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const bodyParser = require('body-parser')

require('./configs/database')

// configure the body-parser
// to accept urlencoded bodies
// and json data
app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json())

app.use('/api/members', require('./routes/membersRoute'))
app.use('/api/movies', require('./routes/moviesRoute'))
app.use('/api/subscriptions', require('./routes/subscriptionsRoute'))
app.use('/api/watchedSubs', require('./routes/subsWatchedRoute'))

app.listen(8000)

require('./starterScript')