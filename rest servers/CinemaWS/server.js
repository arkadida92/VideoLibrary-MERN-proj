const express = require('express')
const cors = require('cors')

let app = express()

app.use(cors())

const bodyParser = require('body-parser')

require('./configs/database')

app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json())

app.use('/api/users', require('./routers/usersRouter'))
app.use('/api/permissions', require('./routers/permissionsRouter'))
app.use('/api/subscriptions', require('./routers/subsriptionsRoute'))
app.use('/api/members', require('./routers/membersRoute'))
app.use('/api/movies', require('./routers/moviesRoute'))
app.use('/api/watchedSubs', require('./routers/watchedSubsRoute'))
app.use('/api/auth', require('./routers/authRoute'))

console.log('Server running...')

app.listen(9000)