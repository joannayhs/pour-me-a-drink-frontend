import React from 'react'
import {Link} from 'react-router-dom'


function NavBar(){

    return (
        <div className="navbar">
            <img src={process.env.PUBLIC_URL + '/pour_logo.png'} alt="logo" width="10%" />
            <h1 className="title">Pour Me A Drink </h1>
            <h3 className="subtitle">The best place to save old recipes and try new ones</h3>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/favorites"> Favorites </Link>
                <Link to="/my-recipes"> My Recipes </Link>
            </div>
           
        </div>
    )
}

export default NavBar