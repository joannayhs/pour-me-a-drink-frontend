import React from 'react'
import CocktailCard from './CocktailCard'
import {Route, Link, useRouteMatch} from 'react-router-dom'
import CocktailDetails from './CocktailDetails'

function Cocktails({cocktails, favorites}){

const match = useRouteMatch()

    function mapCocktails(){
        return cocktails.map( cocktail => {
            const cocktailId = cocktail.idDrink
            return <Link to={`/cocktails/${cocktailId}`}><CocktailCard key={cocktail.idDrink} cocktail={cocktail} favorites={favorites}/></Link>
        })
    }

    return (
        <div className='cocktails-container'>
            {mapCocktails()}

          <Route exact path={`${match.url}/:cocktailId`}>
                <CocktailDetails cocktails={cocktails}/>
            </Route>

        </div>
    )
}

export default Cocktails