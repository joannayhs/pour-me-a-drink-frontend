import React from 'react'

export default function CocktailDetails({cocktail}){
    return(
        <div>
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