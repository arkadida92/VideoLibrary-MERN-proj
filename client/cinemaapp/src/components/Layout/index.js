import React from 'react'
import Header from '../Header'

/**
* @author
* @function Layout
**/

const Layout = (props) => {
    return (
        <div style={{ backgroundColor: '#e76f51', height: '100vh' }}>
            <Header />
            {props.children}
        </div>
    )

}

export default Layout