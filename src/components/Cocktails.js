import React from 'react'
import CocktailCard from './CocktailCard'
import {Route, useRouteMatch} from 'react-router-dom'
import CocktailDetails from './CocktailDetails'

function Cocktails({cocktails, favorites, addToFavorites, myRecipes, removeFavorite}){

    function mapCocktails(){
        return cocktails.map( cocktail => {
            const cocktailId = cocktail.idDrink
            return <CocktailCard key={cocktailId} cocktail={cocktail} favorites={favorites} addToFavorites={addToFavorites} removeFavorite={removeFavorite} myRecipes={myRecipes}/>
        })
    }

    return (
        <div className='cocktails-container'>
            {mapCocktails()}

            <Route path={'/cocktails/:cocktailId'}>
                <CocktailDetails favorites={favorites} addToFavorites={addToFavorites} removeFavorite={removeFavorite} myRecipes={myRecipes}/>
            </Route>
        </div>
    )
}

export default Cocktails