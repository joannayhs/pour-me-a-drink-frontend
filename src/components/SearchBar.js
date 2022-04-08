import React from 'react' 

function SearchBar(){

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="search" placeholder="Search cocktails..."/>
            <input type="submit" value="Search"/>
        </form>
    )
}

export default SearchBar