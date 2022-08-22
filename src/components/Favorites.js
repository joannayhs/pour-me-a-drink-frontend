import React from 'react'
import CocktailCard from './CocktailCard'

export default function Favorites(favorites){
    const favs = favorites.favorites

    function loadFavorites(){
       return favs.map( f => { 
            console.log(f)
            return <CocktailCard key={f.idDrink} cocktail={f} favorites={favorites}/>
        })
    }
        

    return(
        <>
            {loadFavorites()}
        </>
    )
}