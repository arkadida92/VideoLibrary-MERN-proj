const express = require('express')

const router = express.Router()

const WatchedSub = require('../models/subsWatchedModel')

router.route('/')
    .get((req, res) => {
        WatchedSub.find({}, (err, subs) => {
            if (err) {
                return res.send(err)
            }
            else {
                return res.json(subs)
            }
        })
    })

router.route('/')
    .post((req, res) => {
        const sub = new WatchedSub({
            _id: req.body.memberId,
            members: []
        })

        sub.save(err => {
            if (err) {
                return res.send(err)
            }
            else {
                return res.send('Created !')
            }
        })
    })

router.route('/:id')
    .get((req, res) => {
        WatchedSub.findById(req.params.id, (err, sub) => {
            if (err) {
                return res.send(err)
            }
            else {
                return res.json(sub)
            }
        })
    })

router.route('/:id')
    .put((req, res) => {
        WatchedSub.findById(req.params.id, (err, sub) => {
            if (err) {
                return res.send(err)
            }
            else {
                let newMember = { memberId: req.body.memberId, mname: req.body.mname, date: req.body.date }
                WatchedSub.findByIdAndUpdate(req.params.id, {
                    members: [...sub.members, newMember]
                }, err => {
                    if (err) {
                        return res.send(err)
                    }
                    else {
                        return res.send('Watched Sub updated!')
                    }
                })
            }
        })
    })

router.route('/:id')
    .delete((req, res) => {
        WatchedSub.findByIdAndDelete(req.params.id, err => {
            if (err) {
                return res.send(err)
            }
            else {
                return res.send('Watched Sub deleted!')
            }
        })
    })

router.route('/:id/:memberId')
    .delete((req, res) => {
        WatchedSub.findById(req.params.id, (err, sub) => {
            if (err) {
                res.send(err)
            }
            else {
                let newMembers = sub.members.filter(member =>
                    member.memberId.toString() !== req.params.memberId
                )
                WatchedSub.findByIdAndUpdate(req.params.id, {
                    members: newMembers
                }, err => {
                    if (err) {
                        res.send(err)
                    }
                    else {
                        res.send('member removed !')
                    }
                })


            }


        })

    })

module.exports = router