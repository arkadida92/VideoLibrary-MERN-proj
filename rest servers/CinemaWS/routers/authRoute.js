const express = require('express')

const router = express.Router()

const utils = require('../models/authModel')

router.route('/:uname/:password')
    .get(async (req, res) => {
        let ans = await utils.isUserExist(req.params.uname, req.params.password)

        res.json(ans)
    })

router.route('/').post(async (req, res) => {
    let ans = await utils.isUserExist(req.body.uname, req.body.password)

    res.json(ans)
})


module.exports = router