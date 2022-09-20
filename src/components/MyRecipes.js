import React from 'react'
import {Link, useRouteMatch, Route, Switch} from 'react-router-dom'
import CocktailCard from './CocktailCard'
import NewRecipe from './NewRecipe'
import CocktailDetails from './CocktailDetails'

export default function MyRecipes({favorites, addToFavorites, removeFavorite, myRecipes, addNewRecipe, updateRecipe, deleteRecipe}){ 
    const match = useRouteMatch()

    function createCards(){
        return myRecipes.map( recipe => {
            return <CocktailCard key={recipe.id} cocktail={recipe} addToFavorites={addToFavorites} favorites={favorites} myRecipes={myRecipes} removeFavorite={removeFavorite} deleteRecipe={deleteRecipe} />
        })
    }
    
    
    return (
        <div className="my-recipes">
            <Link to={`${match.url}/new`}>Add Recipe</Link><br/>
            {createCards()}
       
           
          <Switch>
                <Route exact path={`${match.url}/new`}>
                    <NewRecipe addNewRecipe={addNewRecipe} myRecipes={myRecipes} updateRecipe={updateRecipe} deleteRecipe={deleteRecipe}/>
                </Route>
                <Route path={`${match.url}/:cocktailId/edit`}>
                    <NewRecipe addNewRecipe={addNewRecipe} myRecipes={myRecipes} updateRecipe={updateRecipe} deleteRecipe={deleteRecipe}/>
                </Route>
                <Route path={`${match.url}/:cocktailId`}>
                    <CocktailDetails favorites={favorites} addToFavorites={addToFavorites} removeFavorite={removeFavorite} myRecipes={myRecipes} deleteRecipe={deleteRecipe}/>
                </Route>
                
              
          </Switch>
            
        </div>
    )
}