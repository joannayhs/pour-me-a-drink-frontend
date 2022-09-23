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
        <div className="cocktail-card" >
            
            <img src={cocktail.strDrinkThumb} atl={cocktail.strDrink} className="drink-image"/><br/>
            {myRecipes.filter(d => d.idDrink === cocktailId).length > 0 ? null : <span className="star" onClick={handleClick} style={{ color: isFavorite ? '#5C2F93' : "#F6EFDF" }}>☆</span>}
            {myRecipes.filter( drink => drink.idDrink === cocktailId).length > 0 ? <Link to={`/my-recipes/${cocktailId}`}>{cocktail.strDrink} <br/> </Link> : <Link to={`/cocktails/${cocktailId}`}>{cocktail.strDrink}<br/></Link>}
            Type of Drink: {cocktail.strAlcoholic}<br/>
            Category: {cocktail.strCategory}<br/>
            
        
            
        </div>

    )
}

export default CocktailCard