import React from 'react'
import CocktailCard from './CocktailCard'
import {Route, useRouteMatch} from 'react-router-dom'
import CocktailDetails from './CocktailDetails'

function Cocktails({cocktails, favorites, addToFavorites, myRecipes, removeFavorite}){

const match = useRouteMatch()

    function mapCocktails(){
        return cocktails.map( cocktail => {
            const cocktailId = cocktail.idDrink
            return <CocktailCard key={cocktail.idDrink} cocktail={cocktail} favorites={favorites} addToFavorites={addToFavorites} removeFavorite={removeFavorite}/>
        })
    }

    return (
        <div className='cocktails-container'>
            {mapCocktails()}

          <Route exact path={`${match.url}/:cocktailId`}>
                <CocktailDetails cocktails={cocktails} favorites={favorites} myRecipes={myRecipes} addToFavorites={addToFavorites} removeFavorite={removeFavorite}/>
            </Route>

        </div>
    )
}

export default Cocktails