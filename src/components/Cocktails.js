import React from 'react'
import CocktailCard from './CocktailCard'
import {Route, useRouteMatch} from 'react-router-dom'
import CocktailDetails from './CocktailDetails'

function Cocktails({cocktails, favorites, addToFavorites, myRecipes}){

const match = useRouteMatch()

    function mapCocktails(){
        console.log(cocktails)
        return cocktails.map( cocktail => {
            const cocktailId = cocktail.idDrink
            return <CocktailCard key={cocktail.idDrink} cocktail={cocktail} favorites={favorites} addToFavorites={addToFavorites}/>
        })
    }

    return (
        <div className='cocktails-container'>
            {mapCocktails()}

          <Route exact path={`${match.url}/:cocktailId`}>
                <CocktailDetails cocktails={cocktails} favorites={favorites} myRecipes={myRecipes}/>
            </Route>

        </div>
    )
}

export default Cocktails