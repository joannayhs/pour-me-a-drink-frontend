import React from 'react' 

function SearchBar(){

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" placeholder="Search cocktails..." />
                <input type="submit" value="Search" />
            </form>
            <p> A B C D E F G H I J K L M N O P Q R S T U V W X Y Z </p>
        </div>
       
    )
}

export default SearchBar