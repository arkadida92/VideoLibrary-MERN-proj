const express = require('express')

const router = express.Router()

const utils = require('../dals/subscriptionsWsDal')


router.route('/')
    .get(async (req, res) => {
        let resp = await utils.getMembers()
        return res.json(resp.data)
    })

router.route('/')
    .post((req, res) => {
        utils.addMember(req.body.name, req.body.email, req.body.city)
            .then(() => res.send('Member added !'))
    })

router.route('/:id')
    .get(async (req, res) => {
        let resp = await utils.getMember(req.params.id)
        res.json(resp.data)
    })

router.route('/:id')
    .put((req, res) => {
        utils.updateMember(
            req.params.id,
            req.body.name,
            req.body.email,
            req.body.city
        )
            .then(() => res.send('Member updated !'))
            .catch(err => res.send(err))
    })

router.route('/:id')
    .delete((req, res) => {
        utils.deleteMember(req.params.id)
            .then(() => res.send('Member deleted !'))
            .catch(err => res.send(err))
    })


module.exports = router