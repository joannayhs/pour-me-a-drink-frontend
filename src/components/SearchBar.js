import React from 'react' 

function SearchBar({searchLetter, setSearchLetter}){


    function handleSubmit(e){
        e.preventDefault()
    }

    function alphabet(){
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        return alphabet.split('').map((l) => <span onClick={(e) => handleOnClick(e)} key={l}>{l} </span>)
    }

    function handleOnClick(e)  {
        setSearchLetter(e.target.innerText)
    }


    return (
        <div className="search-bar">
            {alphabet()}
        </div>
       
    )
}

export default SearchBar