const express = require('express')

const router = express.Router()

const axios = require('axios')

const Member = require('../models/membersModel')


router.route('/')
    .get((req, res) => {
        Member.find({}, (err, members) => {
            if (err) {
                return res.send(err)
            }
            else return res.json(members)
        })
    })

router.route('/')
    .post((req, res) => {
        const member = new Member({
            Name: req.body.name,
            Email: req.body.email,
            City: req.body.city
        })

        member.save(async (err, member) => {
            if (err) {
                return res.send(err)
            }
            else {
                await axios.post('http://localhost:8000/api/subscriptions', {
                    memberId: member._id,
                    movies: []
                })
                return res.send('Created !')
            }
        })
    })

router.route('/:id')
    .get((req, res) => {
        Member.findById(req.params.id, (err, member) => {
            if (err) {
                return res.send(err)
            }
            else {
                return res.json(member)
            }
        })
    })

router.route('/:id')
    .put((req, res) => {
        Member.findByIdAndUpdate(req.params.id, {
            Name: req.body.name,
            Email: req.body.email,
            City: req.body.city
        }, err => {
            if (err) {
                return res.send(err)
            }
            else {
                return res.send("Member updated !")
            }
        })
    })

router.route('/:id')
    .delete((req, res) => {
        Member.findByIdAndDelete(req.params.id, async (err, member) => {
            if (err) {
                return res.send(err)
            }
            else {
                let resp = await axios.get(`http://localhost:8000/api/subscriptions/${req.params.id}`)
                let memberMovies = resp.data.Movies
                memberMovies.map(async movie => {
                    await axios.delete(`http://localhost:8000/api/watchedSubs/${movie.movieId}/${req.params.id}`)
                })


                await axios.delete(`http://localhost:8000/api/subscriptions/${req.params.id}`)
                return res.send('Member deleted !')
            }
        })
    })


module.exports = router