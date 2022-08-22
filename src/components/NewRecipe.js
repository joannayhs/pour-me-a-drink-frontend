import React from  'react'

export default function NewRecipe(){

    
    function handleSubmit(e){
        e.preventDefault()
        console.log(e.value)
    }


    return (
        <>
         <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Drink Name" name="strDrink"/> <br/>
            <input type="text" placeholder="Category" name="strCategory"/> <br/>
            <input type="text" placeholder="Instructions" name="strInstructions"/> <br/>
            <input type="text" placeholder="image URL" name="strDrinkThumb"/> <br/>
            <input type="text" placeholder="Ingredient 1" name="strIngredient1"/> <br/>
            <input type="text" placeholder="Measurement 1" name="strMeasure1"/> <br/>
            <input type="text" placeholder="Ingredient 2" name="strIngredient2"/> <br/>
            <input type="text" placeholder="Measurement 2" name="strMeasure2" /> <br/>
            <input type="text" placeholder="Ingredient 3" name="strMeasure3" /> <br/>
            <input type="text" placeholder="Measurement 3" name="strMeasure3" /> <br/>
            <input type="text" placeholder="Ingredient 4" name="strMeasure4" /> <br/>
            <input type="text" placeholder="Measurement 4" name="strMeasure4" /> <br/>
            <input type="text" placeholder="Ingredient 5" name="strMeasure5" /> <br/>
            <input type="text" placeholder="Measurement 5" name="strMeasure5" /> <br/>
            <button>Submit</button>
        </form>
        </>
    )
}