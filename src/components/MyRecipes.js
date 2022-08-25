import React from 'react'
import {Link, Route, useRouteMatch} from 'react-router-dom'
import CocktailCard from './CocktailCard'
import CocktailDetails from './CocktailDetails'

export default function MyRecipes({favorites, addToFavorites, myRecipes, cocktails}){ 
    const match = useRouteMatch()

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
            
            <Route exact path={`${match.url}/:cocktailId`}>
                <CocktailDetails cocktails={cocktails} favorites={favorites} myRecipes={myRecipes} />
            </Route>
        </>
    )
}