import React from  'react'

export default function NewRecipe(){

    
    function handleSubmit(e){
        e.preventDefault()
        console.log(e.value)
    }


    return (
        <>
         <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Drink Name"/>
            <input type="text" placeholder="Category"/>
            <input type="text" placeholder="Instructions"/>
            <input type="text" placeholder="image URL"/>
            <input type="text" placeholder="Ingredient 1"/>
            <input type="text" placeholder="Measurement 1"/>
            <input type="text" placeholder="Ingredient 2"/>
            <input type="text" placeholder="Measurement 2"/>
            <input type="text" placeholder="Ingredient 3"/>
            <input type="text" placeholder="Measurement 3"/>
            <input type="text" placeholder="Ingredient 4"/>
            <input type="text" placeholder="Measurement 4"/>
            <input type="text" placeholder="Ingredient 5"/>
            <input type="text" placeholder="Measurement 5"/>
            <button>Submit</button>
        </form>
        </>
    )
}