import React from 'react'
import CocktailCard from './CocktailCard'

function Cocktails({cocktails}){
    
    function mapCocktails(){
        return cocktails.map( cocktail => {
            return <CocktailCard key={cocktail.idDrink} cocktail={cocktail}/>
        })
    }

    return (
        <div className='cocktails-container'>
            {mapCocktails()}
        </div>
    )
}

export default Cocktails