const express = require('express')

const router = express.Router()

const utils = require('../dals/subscriptionsWsDal')


router.route('/')
    .get(async (req, res) => {
        let resp = await utils.getMovies()
        res.json(resp.data)
    })

router.route('/:id')
    .get(async (req, res) => {
        let resp = await utils.getMovie(req.params.id)
        res.json(resp.data)
    })

router.route('/')
    .post((req, res) => {
        utils.addMovie(
            req.body.name,
            req.body.genres,
            req.body.image,
            req.body.premiered
        )
            .then(() => res.send('Movie added !'))
            .catch(err => res.send(err))
    })

router.route('/:id')
    .put((req, res) => {
        utils.updateMovie(
            req.params.id,
            req.body.name,
            req.body.genres,
            req.body.image,
            req.body.premiered
        )
            .then(() => res.send('Movie updated !'))
            .catch(err => res.send(err))
    })

router.route('/:id')
    .delete((req, res) => {
        utils.deleteMovie(req.params.id)
            .then(() => res.send('Movie deleted !'))
            .catch(err => res.send(err))
    })


module.exports = router