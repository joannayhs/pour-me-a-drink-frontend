import React from 'react'
import CocktailCard from './CocktailCard'

export default function Favorites({favorites , addToFavorites, removeFavorite, myRecipes}){

    function loadFavorites(){
        if(favorites.length > 0){
            return favorites.map(f => {
                return <CocktailCard key={f.idDrink} cocktail={f} favorites={favorites} addToFavorites={addToFavorites} removeFavorite={removeFavorite} myRecipes={myRecipes} />
            })  
        }else{
            return <h3>Browse recipes to start finding new favorites!</h3>
        }
       
    }
        

    return(
        <>
            <h2>Favorites</h2>
            <div className="favorites">
                {loadFavorites()}
            </div>
        </>
    )
}