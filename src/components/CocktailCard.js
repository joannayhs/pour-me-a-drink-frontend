import React from 'react'

function CocktailCard({cocktail, addToFavorites, favorites}){

    const cocktailId = cocktail.idDrink

    return (
        <div className="cocktail-card">
            <span onClick={addToFavorites} >✩</span>
            <img src={cocktail.strDrinkThumb} atl={cocktail.strDrink} width="75%" /><br/>
            {cocktail.strDrink}<br/>
            {cocktail.strAlcoholic}<br/>
            {cocktail.strCategory}<br/>
            
          
            
        </div>

    )
}

export default CocktailCard