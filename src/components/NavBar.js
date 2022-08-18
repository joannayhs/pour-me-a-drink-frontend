import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){

    return (
        <div className="navbar">
            <Link to="/">Home </Link>
            <Link to="/favorites"> Favorites</Link>
        </div>
    )
}

export default NavBar