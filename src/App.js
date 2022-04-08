import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import Cocktails from './components/Cocktails'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import Login from './components/Login'

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
      <NavBar />
      <Switch>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route path='/'>
          <Cocktails cocktails={cocktails} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
