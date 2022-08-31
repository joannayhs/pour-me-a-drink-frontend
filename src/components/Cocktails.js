import React from 'react'
import CocktailCard from './CocktailCard'
import {Route, useRouteMatch} from 'react-router-dom'
import CocktailDetails from './CocktailDetails'
import NewRecipe from './NewRecipe'

function Cocktails({cocktails, favorites, addToFavorites, myRecipes, removeFavorite, updateRecipe}){

const match = useRouteMatch()

    function mapCocktails(){
        return cocktails.map( cocktail => {
            const cocktailId = cocktail.idDrink
            return <CocktailCard key={cocktailId} cocktail={cocktail} favorites={favorites} addToFavorites={addToFavorites} removeFavorite={removeFavorite}/>
        })
    }

    return (
        <div className='cocktails-container'>
            {mapCocktails()}

            <Route path={`new-recipe/:cocktailId/edit`}>
                <NewRecipe myRecipes={myRecipes} updateRecipe={updateRecipe}/>    
            </Route>
              
            <Route path={`${match.url}/:cocktailId`}>
                <CocktailDetails cocktails={cocktails} favorites={favorites} myRecipes={myRecipes} addToFavorites={addToFavorites} removeFavorite={removeFavorite} />
            </Route>

        </div>
    )
}

export default Cocktails