const express = require('express')

const router = express.Router()

const axios = require('axios')

const Subscription = require('../models/subscriptionsModel')


router.route('/')
    .get((req, res) => {
        Subscription.find({}, (err, subs) => {
            if (err) return res.send(err)
            else return res.json(subs)
        })
    })

router.route('/')
    .post((req, res) => {
        const sub = new Subscription({
            _id: req.body.memberId,
            Movies: req.body.movies
        })

        sub.save(err => {
            if (err) return res.send(err)
            else return res.send('Created !')
        })
    })

router.route('/:id')
    .get((req, res) => {
        Subscription.findById(req.params.id, (err, sub) => {
            if (err) return res.send(err)
            else return res.json(sub)
        })
    })

router.route('/:id')
    .put((req, res) => {
        Subscription.findById(req.params.id, async (err, sub) => {
            if (err) return res.send(err)
            else {
                let date = new Date()

                let newMovie = { movieId: req.body.movieId, date }
                let resp = await axios.get(`http://localhost:8000/api/members/${req.params.id}`)
                let member = resp.data
                let newMember = { memberId: sub._id, mname: member.Name, date }
                Subscription.findByIdAndUpdate(req.params.id, {
                    Movies: [...sub.Movies, newMovie]
                }, async (err) => {
                    if (err) return res.send(err)
                    else {
                        await axios.put(`http://localhost:8000/api/watchedSubs/${req.body.movieId}`, newMember)
                        return res.send('Subscription updated !')
                    }
                })
            }
        })

    })

router.route('/:id')
    .delete((req, res) => {
        Subscription.findByIdAndDelete(req.params.id, err => {
            if (err) return res.send(err)
            else return res.send('Subscription Deleted !')
        })
    })

router.route('/:id/:movieId')
    .delete((req, res) => {
        Subscription.findById(req.params.id, (err, sub) => {
            if (err) {
                return res.send(err)
            }
            else {
                let newMovies = sub.Movies.filter(movie => movie.movieId.toString() !== req.params.movieId)
                Subscription.findByIdAndUpdate(req.params.id, {
                    Movies: newMovies
                }, err => {
                    if (err) {
                        return res.send(err)
                    }
                    else {
                        return res.send('Movie deleted from sub !')
                    }
                })
            }

        })
    })


module.exports = router