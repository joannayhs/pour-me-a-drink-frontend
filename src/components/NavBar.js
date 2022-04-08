import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){

    return (
        <div className="navbar">
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default NavBar