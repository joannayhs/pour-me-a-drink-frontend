import React, {useState, useEffect} from 'react'
import Cocktails from './components/Cocktails'


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
      <Cocktails cocktails={cocktails}/>
    </div>
  );
}

export default App;
