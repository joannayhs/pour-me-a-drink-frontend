import React, {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'

export default function CocktailDetails({cocktails, favorites, myRecipes}){
const params = useParams()
const history = useHistory()
const [cocktail, setCocktail] = useState('')

    useEffect(() => {
        getCocktail()
    }, [])


    function getCocktail(){
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.cocktailId}`)
        .then( r => r.json())
        .then( cocktail => {
            console.log(cocktail.drinks[0])
            setCocktail( cocktail.drinks[0])
        })
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
        </div>
    )
}