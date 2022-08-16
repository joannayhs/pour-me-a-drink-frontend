import React from 'react'
import {Link}  from  'react-router-dom'

function CocktailCard({cocktail}){

    return (
        <div className="cocktail-card">
            <img src={cocktail.strDrinkThumb} atl={cocktail.strDrink} width="75%" /><br/>
            <Link to={`/cocktails/${cocktail.idDrink}`}>{cocktail.strDrink}</Link><br/>
            {cocktail.strAlcoholic}<br/>
            {cocktail.strCategory}<br/>
        </div>

    )
}

export default CocktailCard