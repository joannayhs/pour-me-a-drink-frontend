import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import CocktailCard from './CocktailCard'

export default function MyRecipes({cocktails, favorites, addToFavorites}){ 
    const [myRecipes, setMyRecipes] = useState([])

    useEffect(() => {
       getRecipes()
    }, [])

    function  getRecipes(){
        fetch('http://localhost:4000/my-drinks')
        .then(r => r.json())
        .then( drinks => setMyRecipes(drinks))
        return myRecipes
    }

    function createCards(){
        return myRecipes.map( recipe => {
            return <CocktailCard cocktail={recipe} addToFavorites={addToFavorites} favorites={favorites}/>
        })
    }

    return (
        <>
            <Link to="/new-recipe">Add Recipe</Link><br/>
            {createCards()}
        </>
    )
}