const express = require('express')

const router = express.Router()

const utils = require('../models/permissionsFileModel')

router.route('/')
    .get(async (req, res) => {
        return res.json(await utils.getPermisions())
    })

router.route('/:id')
    .get(async (req, res) => {
        return res.json(await utils.getPermission(req.params.id))
    })

router.route('/:id')
    .put((req, res) => {
        utils.updatePermission(req.params.id, req.body.updatedPerms)
            .then(() => res.send('User permission updated !'))
            .catch(err => res.send(err))
    })


module.exports = router