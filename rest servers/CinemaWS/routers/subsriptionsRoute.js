const express = require('express')

const router = express.Router()

const utils = require('../dals/subscriptionsWsDal')


router.route('/')
    .get(async (req, res) => {
        let resp = await utils.getSubscriptions()
        return res.json(resp.data)
    })

router.route('/:id')
    .get(async (req, res) => {
        let resp = await utils.getSubscription(req.params.id)
        return res.json(resp.data)
    })

router.route('/:id')
    .post((req, res) => {
        utils.addSubscription(req.params.id, req.body.movieId)
            .then(() => res.send('Subsciption added !'))
            .catch(err => res.send(err))
    })

module.exports = router