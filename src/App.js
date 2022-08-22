import React, {useState, useEffect} from 'react'
import {Route, Switch } from 'react-router-dom'
import Cocktails from './components/Cocktails'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Favorites from './components/Favorites'
import MyRecipes from './components/MyRecipes'
import NewRecipe from './components/NewRecipe'

function App() {
  const [cocktails, setCocktails] = useState([])
  const [searchLetter, setSearchLetter] = useState('A')
  const [favorites, setFavorites] = useState([])
 
  useEffect( () => {
    getCocktails()
    getFavorites()
  }, [searchLetter] )
  
  function getCocktails(){
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchLetter}`)
      .then(r => r.json())
      .then(cocktails => {
        setCocktails(cocktails.drinks)
      })
  }

  function addToFavorites(cocktail){
   if (favorites.length  > 0 && favorites.filter( drink => drink.idDrink === cocktail.idDrink).length > 0){
     return favorites
   }else{
    fetch('http://localhost:4000/favorites', {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(cocktail)
     })
     return favorites
   }
  }

  function  getFavorites() {
    fetch('http://localhost:4000/favorites')
    .then(r => r.json())
    .then(favs =>  {
      setFavorites(favs)
    })
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/cocktails">
          <SearchBar searchLetter={searchLetter} setSearchLetter={setSearchLetter}/>
          <Cocktails cocktails={cocktails} favorites={favorites} addToFavorites={addToFavorites}/>
        </Route>
        <Route path="/favorites">
          <Favorites favorites={favorites}/>
        </Route>
        <Route path="/my-recipes">
          <MyRecipes />
        </Route>
        <Route path="/new-recipe">
          <NewRecipe />
        </Route>
        <Route path='/'>
          <SearchBar searchLetter={searchLetter} setSearchLetter={setSearchLetter}/>
          <Cocktails cocktails={cocktails} favorites={favorites} addToFavorites={addToFavorites}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
