import React, {useState, useEffect} from 'react'


function App() {
  const [cocktails, setCocktails] = useState([])
  const searchLetter = 'A'
  useEffect( () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchLetter}`)
    .then( r => r.json())
    .then( cocktails => {
      setCocktails(cocktails)
    })
  }, [] )
  
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
