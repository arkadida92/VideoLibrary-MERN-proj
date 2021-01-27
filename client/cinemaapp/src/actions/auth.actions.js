import authUtils from '../utils/authUtils'

import userUtils from '../utils/usersUtils'
import permsUtils from '../utils/permissionsUtils'

export const signIn = (uname, password) => {
    return async dispatch => {
        authUtils.isUserExists(uname, password).then(async ans => {
            if (ans) {
                let selectedUser = await userUtils.getUserByUname(uname)
                let selectedPerms = await permsUtils.getUserPermissions(selectedUser.Id)

                localStorage.setItem('user', JSON.stringify(selectedUser))
                localStorage.setItem('permissions', JSON.stringify(selectedPerms))

                dispatch({
                    type: 'USER_LOGIN',
                    payload: { user: selectedUser, userPermissions: selectedPerms.Permissions }
                })
            }
        })

    }
}

export const signUp = (uname, password) => {
    return async dispatch => {
        authUtils.isUserExists(uname, '').then(async ans => {
            if (ans) {
                let selectedUser = await userUtils.getUserByUname(uname)
                let selectedPerms = await permsUtils.getUserPermissions(selectedUser.Id)

                await userUtils.updateUser(
                    selectedUser.Id,
                    selectedUser.FirstName,
                    selectedUser.LastName,
                    selectedUser.UserName,
                    selectedUser.SessionTimeOut,
                    password)

                dispatch({
                    type: 'USER_LOGIN',
                    payload: { user: selectedUser, userPermissions: selectedPerms.Permissions }
                })
            }
        })
    }
}

export const logout = () => {
    return async dispatch => {
        dispatch({
            type: 'USER_LOGOUT'
        })
    }
}