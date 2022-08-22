import React from 'react'
import CocktailCard from './CocktailCard'

export default function Favorites(favorites){

    function loadFavorites(){
        console.log(favorites)
        for(let i=0; i < favorites.length; i++){
            console.log(favorites[i])
        }
    }

    return(
        <>
            {loadFavorites()}
        </>
    )
}