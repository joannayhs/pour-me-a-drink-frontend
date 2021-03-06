import React from 'react'

function CocktailCard({cocktail}){

    return (
        <div className="cocktail-card">
            <img src={cocktail.strDrinkThumb} atl={cocktail.strDrink} width="10%" /><br/>
            {cocktail.strDrink}<br/>
            {cocktail.strAlcoholic}<br/>
            {cocktail.strCategory}<br/>
        </div>

    )
}

export default CocktailCard