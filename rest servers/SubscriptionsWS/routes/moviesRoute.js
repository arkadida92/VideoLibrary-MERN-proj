const express = require('express')

const router = express.Router()

const axios = require('axios')

const Movie = require('../models/moviesModel')


router.route('/')
    .get((req, res) => {
        Movie.find({}, (err, movies) => {
            if (err) {
                return res.send(err)
            }
            else return res.json(movies)
        })
    })

router.route('/')
    .post((req, res) => {
        const movie = new Movie({
            Name: req.body.name,
            Genres: req.body.genres,
            Image: req.body.image,
            Premiered: req.body.premiered
        })

        movie.save(async (err, movie) => {
            if (err) {
                return res.send(err)
            }
            else {
                await axios.post('http://localhost:8000/api/watchedSubs', {
                    memberId: movie._id,
                    members: []
                })
                return res.send('Created !')
            }
        })
    })

router.route('/:id')
    .get((req, res) => {
        Movie.findById(req.params.id, (err, movie) => {
            if (err) {
                return res.send(err)
            }
            else {
                return res.json(movie)
            }
        })
    })

router.route('/:id')
    .put((req, res) => {
        Movie.findByIdAndUpdate(req.params.id, {
            Name: req.body.name,
            Genres: req.body.genres,
            Image: req.body.image,
            Premiered: req.body.premiered
        }, err => {
            if (err) {
                return res.send(err)
            }
            else {
                return res.send("Movie updated !")
            }
        })
    })

router.route('/:id')
    .delete((req, res) => {
        Movie.findByIdAndDelete(req.params.id, async err => {
            if (err) {
                return res.send(err)
            }
            else {
                let resp = await axios.get(`http://localhost:8000/api/watchedSubs/${req.params.id}`)
                let members = resp.data.members
                members.map(async member => {
                    await axios.delete(`http://localhost:8000/api/subscriptions/${member.memberId}/${req.params.id}`)
                })

                await axios.delete(`http://localhost:8000/api/watchedSubs/${req.params.id}`)
                return res.send('Movie Deleted !')
            }
        })
    })

module.exports = router