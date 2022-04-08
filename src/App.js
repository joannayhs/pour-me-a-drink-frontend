import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import Cocktails from './components/Cocktails'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'

function App() {
  const [cocktails, setCocktails] = useState([])
  const searchLetter = 'A'
 
  useEffect( () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchLetter}`)
    .then( r => r.json())
    .then( cocktails => {
      setCocktails(cocktails.drinks)
    })
  }, [] )
  
  return (
    <div className="App">
      <Switch>
        <Route path='/'>
          <NavBar />
        </Route>
        <Route exact path="/SignUp">
          <SignUp />
        </Route>
      </Switch>
 
      <Cocktails cocktails={cocktails}/>
    </div>
  );
}

export default App;
