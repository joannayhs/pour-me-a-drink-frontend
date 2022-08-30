import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import CocktailCard from './CocktailCard'

export default function MyRecipes({favorites, addToFavorites}){ 
    const [myRecipes, setMyRecipes] = useState([])

    useEffect(() => {
        getMyRecipes()
    }, [])
    
    function getMyRecipes() {
        fetch('http://localhost:4000/cocktails')
            .then(r => r.json())
            .then(rec => {
                setMyRecipes(rec)
            })
    }

    function createCards(){
        return myRecipes.map( recipe => {
            const cocktailId = recipe.id
            return <CocktailCard key={recipe.id} cocktail={recipe} addToFavorites={addToFavorites} favorites={favorites} myRecipes={myRecipes}/>
        })
    }
    
    
    return (
        <>
            <Link to="/new-recipe">Add Recipe</Link><br/>
            {createCards()}
     
        </>
    )
}