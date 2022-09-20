import React from 'react'
import CocktailCard from './CocktailCard'

export default function Favorites({favorites , addToFavorites, removeFavorite, myRecipes}){

    function loadFavorites(){
        if(favorites.length > 0){
            return favorites.map(f => {
                return <CocktailCard key={f.idDrink} cocktail={f} favorites={favorites} addToFavorites={addToFavorites} removeFavorite={removeFavorite} myRecipes={myRecipes} />
            })  
        }
       
    }
        

    return(
        <div className="favorites">
            {loadFavorites()}
        </div>
    )
}