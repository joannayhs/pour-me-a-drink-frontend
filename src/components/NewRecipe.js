import React, {useState} from  'react'


export default function NewRecipe({addNewRecipe}){
    const [formData, setFormData] = useState([])
    
    function handleSubmit(e){
        e.preventDefault()
        addNewRecipe(formData)
    }

    function handleChange(e){
        return setFormData({...formData, [e.target.name]: e.target.value}) 
    }


    return (
        <>
         <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Drink Name" name="strDrink" onChange={handleChange}/> <br/>
            
            <select name="Category" placeholder="Category">
                <option value="cocktail">Cocktail</option>
                <option value="shot">Shot</option>
            </select><br/>
            
            <input type="text" placeholder="Instructions" name="strInstructions"onChange={handleChange}/> <br/>
            <input type="text" placeholder="image URL" name="strDrinkThumb"onChange={handleChange}/> <br/>
            <input type="text" placeholder="Ingredient 1" name="strIngredient1"onChange={handleChange}/> <br/>
            <input type="text" placeholder="Measurement 1" name="strMeasure1"onChange={handleChange}/> <br/>
            <input type="text" placeholder="Ingredient 2" name="strIngredient2"onChange={handleChange}/> <br/>
            <input type="text" placeholder="Measurement 2" name="strMeasure2" onChange={handleChange}/> <br/>
            <input type="text" placeholder="Ingredient 3" name="strMeasure3" onChange={handleChange}/> <br/>
            <input type="text" placeholder="Measurement 3" name="strMeasure3" onChange={handleChange}/> <br/>
            <input type="text" placeholder="Ingredient 4" name="strMeasure4" onChange={handleChange}/> <br/>
            <input type="text" placeholder="Measurement 4" name="strMeasure4" onChange={handleChange}/> <br/>
            <input type="text" placeholder="Ingredient 5" name="strMeasure5" onChange={handleChange}/> <br/>
            <input type="text" placeholder="Measurement 5" name="strMeasure5" onChange={handleChange}/> <br/>
            <button>Submit</button>
        </form>
        </>
    )
}