import React from 'react'
import {Link} from 'react-router-dom'

function CocktailCard({cocktail, addToFavorites, favorites}){

    const cocktailId = cocktail.idDrink

    return (
        <div className="cocktail-card">
            <span onClick={() => addToFavorites(cocktailId)} >✩</span>
            <img src={cocktail.strDrinkThumb} atl={cocktail.strDrink} width="75%" /><br/>
            <Link to={`/cocktails/${cocktailId}`}>{cocktail.strDrink}<br/></Link>
            {cocktail.strAlcoholic}<br/>
            {cocktail.strCategory}<br/>
            
          
            
        </div>

    )
}

export default CocktailCard