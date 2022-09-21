import React, {useEffect, useState} from 'react'
import {Link, useParams, useHistory, useRouteMatch} from 'react-router-dom'

export default function CocktailDetails({ favorites, addToFavorites, removeFavorite, myRecipes, deleteRecipe }){
const params = useParams()
const history = useHistory()
const [cocktail, setCocktail] = useState('')
const [isFavorite, setIsFavorite] = useState(false)
let match = useRouteMatch()

    useEffect(() => {
        getCocktail()
        checkStatus()
    }, [cocktail])


    function getCocktail(){
        if(myRecipes.filter( drink => drink.idDrink.toString() === params.cocktailId).length > 0){
            const drink = myRecipes.find( drink => drink.idDrink.toString() === params.cocktailId)
            setCocktail(drink)
            return cocktail
        }else{
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.cocktailId}`)
                .then(r => r.json())
                .then(cocktail => {
                    setCocktail(cocktail.drinks[0])
                })
                return cocktail
        }
    }

    
    function checkStatus() {
        if (favorites.length > 0) {
            return favorites.filter(drink => drink.idDrink === cocktail.idDrink).length > 0 ? setIsFavorite(true) : false
        }

    }

    function handleOnClick(){
        if (isFavorite) {
            removeFavorite(cocktail)
            setIsFavorite((isFavorite) => !isFavorite)
        } else {
            addToFavorites(cocktail)
            setIsFavorite((isFavorite) => !isFavorite)
        }
    }

    function handleDelete(){
        deleteRecipe(cocktail)
        history.push(`/my-recipes`)
    }
   
    return(
        
        <div className="cocktail-details"> 
        {console.log(myRecipes.find( drink => drink.idDrink.toString() === params.cocktailId))}
            <button onClick={() => history.goBack()} className="close-button">X</button>
            <h3>{cocktail.strDrink}</h3>
            {myRecipes.filter(d => d.idDrink.toString() === params.cocktailId).length  > 0 ? null : <button onClick={handleOnClick}>{isFavorite ? "Remove from Favorites" : "Add to Favorites"}</button>}<br/>
            <p><b>Type of Drink:</b> {cocktail.strAlcoholic}</p>
            <img src={cocktail.strDrinkThumb} position="absolute" width="200px"/>
            <p><b>Glass type:</b> {cocktail.strGlass}</p>

            <table>
                <tr>
                   <th>Measurements</th> 
                   <th>Ingredients</th>
                </tr>

                <tr>
                    <td>{cocktail.strMeasure1}</td>
                    <td>{cocktail.strIngredient1}</td>
                </tr>
                
                <tr>
                    <td>{cocktail.strMeasure2}</td>
                    <td>{cocktail.strIngredient2}</td>
                </tr>

                <tr>
                    <td>{cocktail.strMeasure3}</td>
                    <td>{cocktail.strIngredient3}</td>
                </tr>
                <tr>
                    <td>{cocktail.strMeasure4}</td>
                    <td>{cocktail.strIngredient4}</td>
                </tr>
                <tr>
                    <td>{cocktail.strMeasure5}</td>
                    <td>{cocktail.strIngredient5}</td>
                </tr>
                <p>{cocktail.strInstructions}</p>

            </table>
          
            {myRecipes.filter(drink => drink.idDrink.toString() === params.cocktailId).length > 0 ? <Link to={`${cocktail.idDrink}/edit`}>Edit Recipe</Link> : null} <br/>
            {myRecipes.filter(drink => drink.idDrink.toString() === params.cocktailId).length > 0 ? <button className="delete-button" onClick={handleDelete}>DELETE</button> : null} <br/>

          
        </div>
    )
}