import React from 'react'
import {Link, useRouteMatch, Route, Switch} from 'react-router-dom'
import CocktailCard from './CocktailCard'
import RecipeForm from './RecipeForm'
import CocktailDetails from './CocktailDetails'

export default function MyRecipes({favorites, addToFavorites, removeFavorite, myRecipes, addNewRecipe, updateRecipe, deleteRecipe}){ 
    const match = useRouteMatch()

    function createCards(){
        if(myRecipes.length > 0){
            return myRecipes.map(recipe => {
                return <CocktailCard key={recipe.id} cocktail={recipe} addToFavorites={addToFavorites} favorites={favorites} myRecipes={myRecipes} removeFavorite={removeFavorite} deleteRecipe={deleteRecipe} />
            })
        }else{
            return <h3>Begin adding new recipes to see them here.</h3>
        }
        
    }
    
    
    return (
       <>
            <h2>My Recipes</h2><br/>
            <Link to={`${match.url}/new`}>Add Recipe</Link><br/><br/>
             <div className="my-recipes">
                {createCards()}
             </div>
           
          <Switch>
                <Route exact path={`${match.url}/new`}>
                    <RecipeForm addNewRecipe={addNewRecipe} myRecipes={myRecipes} updateRecipe={updateRecipe} deleteRecipe={deleteRecipe}/>
                </Route>
                <Route path={`${match.url}/:cocktailId/edit`}>
                    <RecipeForm addNewRecipe={addNewRecipe} myRecipes={myRecipes} updateRecipe={updateRecipe} deleteRecipe={deleteRecipe}/>
                </Route>
                <Route path={`${match.url}/:cocktailId`}>
                    <CocktailDetails favorites={favorites} addToFavorites={addToFavorites} removeFavorite={removeFavorite} myRecipes={myRecipes} deleteRecipe={deleteRecipe}/>
                </Route>
                
              
          </Switch>
            
        </>
    )
}