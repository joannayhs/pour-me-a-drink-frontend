import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


function CocktailCard({cocktail, addToFavorites, favorites, removeFavorite, myRecipes}){
    const [isFavorite, setIsFavorite] = useState(false)
    const cocktailId = cocktail.idDrink 

    useEffect(() => {
        checkStatus()
    }, [])

    function checkStatus(){
        if(favorites.length > 0){
            return favorites.filter(cocktail => cocktail.idDrink === cocktailId).length > 0 ? setIsFavorite(true) : false
        }
       
    }

    function handleClick(){
        if(isFavorite){
            removeFavorite(cocktail)
            setIsFavorite((isFavorite) => !isFavorite)
        }else{
            addToFavorites(cocktail)
            setIsFavorite((isFavorite) => !isFavorite)
        }
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