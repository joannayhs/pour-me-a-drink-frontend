import React, {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'

export default function CocktailDetails({cocktails, favorites, addToFavorites, removeFavorite}){
const params = useParams()
const history = useHistory()
const [cocktail, setCocktail] = useState('')
const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        getCocktail()
        checkStatus()
    }, [])


    function getCocktail(){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.cocktailId}`)
        .then( r => r.json())
        .then( cocktail => {
            setCocktail( cocktail.drinks[0])
        })
    }

    
    function checkStatus() {
        if (favorites.length > 0) {
            return favorites.filter(drink => drink.idDrink === cocktail.idDrink).length > 0 ? setIsFavorite(true) : false
        }

    }

    function handleOnClick(){
        if (isFavorite) {
            removeFavorite(cocktail)
            setIsFavorite((isFavorite) => !isFavorite)
        } else {
            addToFavorites(cocktail)
            setIsFavorite((isFavorite) => !isFavorite)
        }
    }

    return(
        
        <div className="cocktail-details">
            <button onClick={() => history.goBack()}>Close</button>
            <p>{cocktail.strDrink}</p>
            <p>{cocktail.strAlcoholic}</p>
            <img src={cocktail.strDrinkThumb} position="absolute" width="200px"/>
            <p>{cocktail.strGlass}</p>
            <p>{cocktail.strIngredient1}{cocktail.strMeasure1}</p>
            <p>{cocktail.strIngredient2}{cocktail.strMeasure2}</p>
            <p>{cocktail.strIngredient3}{cocktail.strMeasure3}</p>
            <p>{cocktail.strIngredient4}{cocktail.strMeasure4}</p>
            <p>{cocktail.strIngredient5}{cocktail.strMeasure5}</p>
            <p>{cocktail.strInstructions}</p>
            <button onClick={handleOnClick}>{isFavorite ? "Remove from Favorites" : "Add to Favorites"}</button>
        </div>
    )
}