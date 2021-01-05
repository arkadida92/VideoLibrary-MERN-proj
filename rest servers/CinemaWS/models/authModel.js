const User = require('../models/usersModel')

exports.isUserExist = async (uname, password) => {
    let ans = await User.exists({ UserName: uname, Password: password })
    return ans
}