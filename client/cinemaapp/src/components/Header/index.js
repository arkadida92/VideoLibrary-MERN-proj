import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logout } from '../../actions/auth.actions'

import './style.css'

/**
* @author
* @function Header
**/

const Header = (props) => {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return (
        <header className='header'>
            <div style={{ display: 'flex' }}>
                <div className='logo'>Video Library</div>

                {
                    !auth.authenticated ?
                        <ul className='leftMenu'>
                            <li><NavLink to={'/login'}>Login</NavLink></li>
                            <li><NavLink to={'/signup'}>Sign up</NavLink></li>
                        </ul> : null
                }

                {
                    auth.authenticated ?
                        <ul className='leftMenu'>
                            <li><NavLink to={'/movies'}>Movies</NavLink></li>
                            <li><NavLink to={'/subscriptions'}>Subscriptions</NavLink></li>
                            {auth.UserName === 'Admin' ? <li><NavLink to={'/usersmanagment'} >Users Managment</NavLink></li> : null}

                        </ul> : null
                }
            </div>
            <div style={{ margin: '20px 0', color: '#fff', fontWeight: 'bold' }}>
                {auth.authenticated ? `Hi ${auth.FirstName} ${auth.LastName}` : ``}
            </div>
            <ul className='menu'>
                {
                    auth.authenticated ?
                        <li>
                            <Link to={'#'} onClick={() => dispatch(logout())}>Logout</Link>
                        </li> : null
                }
            </ul>
        </header>
    )

}

export default Header