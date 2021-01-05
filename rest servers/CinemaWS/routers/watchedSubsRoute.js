const express = require('express')

const router = express.Router()

const utils = require('../dals/subscriptionsWsDal')


router.route('/')
    .get(async (req, res) => {
        let resp = await utils.getWatchedSubs()
        return res.json(resp.data)
    })

router.route('/:id')
    .get(async (req, res) => {
        let resp = await utils.getMemberWatchedSub(req.params.id)
        return res.json(resp.data)
    })



module.exports = router