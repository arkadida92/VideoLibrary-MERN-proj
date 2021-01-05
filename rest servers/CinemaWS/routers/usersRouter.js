const express = require('express')

const router = express.Router()

const utils = require('../models/usersFileModel')
const permsUtils = require('../models/permissionsFileModel')
const User = require('../models/usersModel')


router.route('/')
    .get(async (req, res) => {
        return res.json(await utils.getUsers())
    })

router.route('/')
    .post((req, res) => {
        const user = new User({
            UserName: req.body.uname,
            Password: ''
        })

        user.save((err, usr) => {
            if (err) return res.send(err)
            else {

                utils.addUser(usr._id, req.body.fname, req.body.lname, req.body.uname, new Date(), req.body.sessTimeOut)
                    .then(() => res.json('User Created !'))
                    .catch((err) => res.send(err))
                permsUtils.addUserPermissions(usr._id, req.body.perms)
            }
        })


    })

router.route('/:id')
    .get(async (req, res) => {
        utils.getUser(req.params.id)
            .then((user) => {
                // let userMongo = await User.findById(req.params.id).exec()
                // console.log(userMongo)
                // let usr = { ...user, password: userMongo.Password }
                return res.json(user)
            })
            .catch((err) => res.send(err))
    })

// router.route('/:id')
//     .put((req, res) => {
//         if (req.body.password !== '') {
//             console.log(req.body.password)
//             User.findByIdAndUpdate(req.params.id,
//                 {
//                     UserName: req.body.uname,
//                     Password: req.body.password
//                 },
//                 err => {
//                     if (err) {
//                         return res.send(err)
//                     }
//                     else {
//                         utils.updateUser(req.params.id, req.body.fname, req.body.lname, req.body.uname, req.body.sessTimeOut)
//                             .catch((err) => res.send(err))
//                         return res.send('User updated successfully !')
//                     }
//                 }
//             )
//         }
//         else {
//             utils.updateUser(req.params.id, req.body.fname, req.body.lname, req.body.uname, req.body.sessTimeOut)
//                 .catch((err) => res.send(err))
//         }

//     })

router.route('/:id')
    .put(async (req, res) => {
        if (req.body.password === '') {
            await utils.updateUser(req.params.id, req.body.fname, req.body.lname, req.body.uname, req.body.sessTimeOut)
                .then(() => res.send('User updated!'))
                .catch(err => res.send(err))
        }
        else {
            User.findByIdAndUpdate(req.params.id, {
                UserName: req.body.uname,
                Password: req.body.password
            }).then(async () => {
                await utils.updateUser(req.params.id, req.body.fname, req.body.lname, req.body.uname, req.body.sessTimeOut)
                    .then(() => res.send('User updated!'))
                    .catch(err => res.send(err))
            })
                .catch(err => res.send(err))
        }
    })

router.route('/:id')
    .delete((req, res) => {
        utils.deleteUser(req.params.id)
            .then(() => {
                User.findByIdAndDelete(req.params.id, err => {
                    if (err) res.send(err)
                    else {
                        res.send('User deleted !')
                    }
                })
            })
    })


module.exports = router