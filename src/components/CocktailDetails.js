import React from 'react'
import {useParams} from 'react-router-dom'

export default function CocktailDetails({cocktails}){
const params = useParams()
console.log(params)

const cocktail = cocktails.find( cocktail => cocktail.idDrink === params.cocktailId)
console.log(cocktail)
    return(
        <div className="cocktail-details">
            <p>{cocktail.strAlcoholic}</p>
            <img src={cocktail.strDrinkThumb}/>
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