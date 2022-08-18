import React, {useState} from 'react' 

function SearchBar(){

    const [searchLetter, setSearchLetter] = useState('')

    function handleSubmit(e){
        e.preventDefault()
    }

    function alphabet(){
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        return alphabet.split('').map((l) => <span onClick={(e) => handleOnClick(e)} key={l}>{l} </span>)
    }

    function handleOnClick(e)  {
        setSearchLetter(e.target.innerText)
        console.log(searchLetter)
    }


    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" placeholder="Search cocktails..." />
                <input type="submit" value="Search" />
            </form>
            {alphabet()}
        </div>
       
    )
}

export default SearchBar