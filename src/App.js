import React, {useState, useEffect} from 'react'
import {Route, Switch, useParams, useRouteMatch} from 'react-router-dom'
import Cocktails from './components/Cocktails'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import Login from './components/Login'
import SearchBar from './components/SearchBar'
import CocktailDetails from './components/CocktailDetails'

function App() {
  const [cocktails, setCocktails] = useState([])
  const [searchLetter, setSearchLetter] = useState('A')
  const params = useParams()
 
  useEffect( () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchLetter}`)
    .then( r => r.json())
    .then( cocktails => {
      setCocktails(cocktails.drinks)
      console.log(cocktails.drinks)
    })
  }, [searchLetter] )
  

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/cocktails">
          <SearchBar searchLetter={searchLetter} setSearchLetter={setSearchLetter}/>
          <Cocktails cocktails={cocktails}/>
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route path='/'>
          <SearchBar searchLetter={searchLetter} setSearchLetter={setSearchLetter}/>
          <Cocktails cocktails={cocktails}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
