import React from 'react'

function Cocktails({cocktails}){
    
    function mapCocktails(){
        return cocktails.map( cocktail => {
            return <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
        })
    }

    return (
        <div className='Cocktails-Container'>
            <h3>This is where the main cocktails list will go</h3>
            <ul>
                {mapCocktails()}
            </ul>
        </div>
    )
}

export default Cocktails