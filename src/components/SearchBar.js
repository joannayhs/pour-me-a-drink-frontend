import React from 'react' 

function SearchBar({setSearchLetter}){


    function alphabet(){
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        return alphabet.split('').map((l) => <span onClick={(e) => handleOnClick(e)} key={l}>{l} </span>)
    }

    function handleOnClick(e)  {
        setSearchLetter(e.target.innerText)
    }


    return (
        <div className="search-bar">
            Click a letter to search for drinks.<br/>
            {alphabet()}<br/>
            
        </div>
       
    )
}

export default SearchBar