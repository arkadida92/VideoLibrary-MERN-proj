const dal = require('../dals/usersFileDal')

exports.getUsers = async () => {
    let resp = await dal.readFile()

    return resp.users
}

exports.addUser = async (id, fname, lname, uname, createdDate, sessionTimeOut) => {
    let resp = await dal.readFile()

    let allUsers = resp.users
    let newUser = {
        Id: id,
        FirstName: fname,
        LastName: lname,
        UserName: uname,
        CreatedDate: createdDate,
        SessionTimeOut: sessionTimeOut
    }

    allUsers = [...allUsers, newUser]
    dal.saveToFile({ users: allUsers })
}

exports.getUser = async (id) => {
    let resp = await dal.readFile()

    let allUsers = resp.users

    let user = allUsers.filter(usr => usr.Id === id)

    if (user.length > 0) return user[0]
    return null
}

exports.updateUser = async (id, fname, lname, uname, sessTimeout) => {
    let resp = await dal.readFile()

    let allUsers = resp.users

    let user = allUsers.filter(usr => usr.Id === id)[0]

    let newUser = {
        "Id": id,
        "FirstName": fname,
        "LastName": lname,
        "UserName": uname,
        "CreatedDate": user.CreatedDate,
        "SessionTimeOut": sessTimeout
    }

    allUsers = allUsers.filter(usr => usr.Id !== newUser.Id)
    allUsers = [...allUsers, newUser]

    dal.saveToFile({ users: allUsers })
}

exports.deleteUser = async id => {
    let resp = await dal.readFile()

    let allUsers = resp.users

    let newUsers = allUsers.filter(user => user.Id !== id)

    dal.saveToFile({ users: newUsers })
}