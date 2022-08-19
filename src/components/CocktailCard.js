import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function CocktailCard({cocktail, addToFavorites, favorites}){
    const [isFavorite, setIsFavorite] = useState(false)
    const cocktailId = cocktail.idDrink

    function handleClick(){
        addToFavorites(cocktailId)
        setIsFavorite((isFavorite) => !isFavorite)
    }

    return (
        <div className="cocktail-card">
            <span className="star" onClick={handleClick} style={{ color: isFavorite ? "yellow" : "black" }}>☆</span>
            <img src={cocktail.strDrinkThumb} atl={cocktail.strDrink} width="75%" /><br/>
            <Link to={`/cocktails/${cocktailId}`}>{cocktail.strDrink}<br/></Link>
            {cocktail.strAlcoholic}<br/>
            {cocktail.strCategory}<br/>
            
          
            
        </div>

    )
}

export default CocktailCard