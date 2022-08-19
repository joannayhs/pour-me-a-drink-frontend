import React from 'react'
import {Link} from 'react-router-dom'

export default function MyRecipes(){ 

    return (
        <>
            <Link to="/new-recipe">Add Recipe</Link>
            My Recipes! 
        </>
    )
}