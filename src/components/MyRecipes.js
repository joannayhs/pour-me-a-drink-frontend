import React from 'react'
import {Link, Route, useRouteMatch} from 'react-router-dom'
import CocktailCard from './CocktailCard'
import NewRecipe from './NewRecipe'


export default function MyRecipes({favorites, addToFavorites, removeFavorite, myRecipes}){ 
    const match = useRouteMatch()

    function createCards(){
        return myRecipes.map( recipe => {
            const cocktailId = recipe.idDrink
            return <CocktailCard key={recipe.id} cocktail={recipe} addToFavorites={addToFavorites} favorites={favorites} myRecipes={myRecipes} removeFavorite={removeFavorite} />
        })
    }
    
    
    return (
        <>
            <Link to="/new-recipe">Add Recipe</Link><br/>
            {createCards()}

          
        </>
    )
}