const dal = require('../dals/permissionsFileDal')

exports.getPermisions = async () => {
    let resp = await dal.readFile()

    return resp.permissions
}

exports.addUserPermissions = async (id, permissions) => {
    let resp = await dal.readFile()

    let allPermissions = resp.permissions

    console.log(allPermissions)

    let newUserPermissions = {
        Id: id,
        Permissions: permissions
    }

    allPermissions = [...allPermissions, newUserPermissions]

    dal.saveToFile({ permissions: allPermissions })
}

exports.getPermission = async id => {
    let resp = await dal.readFile()

    let allPerms = resp.permissions

    let permission = allPerms.filter(perm => perm.Id === id)

    if (permission.length > 0) {
        return permission[0]
    }
    else return []
}

exports.updatePermission = async (id, userPermissions) => {
    let resp = await dal.readFile()

    let allPerms = resp.permissions

    let updatedUserPerms = {
        Id: id,
        Permissions: userPermissions
    }

    //console.log(updatedUserPerms)

    allPerms = allPerms.filter(perm => perm.Id !== id)
    allPerms = [...allPerms, updatedUserPerms]

    dal.saveToFile({ permissions: allPerms })
}