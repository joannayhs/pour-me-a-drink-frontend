import React from  'react'

export default function NewRecipe(){

    
    function handleSubmit(e){
        e.preventDefault()
        console.log("Form Submitted")
    }


    return (
        <>
         <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Drink Name"/>
            <button>Submit</button>
        </form>
        </>
    )
}