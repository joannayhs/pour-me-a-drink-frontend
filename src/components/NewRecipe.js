import React, {useState} from  'react'


export default function NewRecipe({addNewRecipe}){
    const [formData, setFormData] = useState([])
    const [ingredientFields, setIngredientFields] = useState([
      {ingredient: "Ingredient", measurement: 'Measurement'}
    ])
    
    function handleSubmit(e){
        e.preventDefault()
        addNewRecipe(formData)
    }

    function handleChange(e){
        return setFormData({...formData, [e.target.name]: e.target.value}) 
    }

    function mapIngredientFields(){
       return ingredientFields.map(( field, index ) => {
       return(
           <>
               <input type="text" placeholder={`${field.ingredient} ${index + 1}`} name={`strIngredient${index + 1}`} onChange={handleChange} /> <br />
               <input type="text" placeholder={`${field.measurement} ${index + 1}`} name={`strMeasure${index + 1}`} onChange={handleChange} /> <br />
               <button onClick={(addIngredientField)}>Add Another Ingredient</button><br/>
           </>

       ) 
        })
    }

    function addIngredientField(){
        setIngredientFields([...ingredientFields, {
            ingredient: "Ingredient", measurement: "Measurement"
        }])
    }

    return (
        <>
         <form onSubmit={handleSubmit}>
            <label>Drink Name</label><br/>
            <input type="text" placeholder="Drink Name" name="strDrink" onChange={handleChange}/> <br/>
            
            <label>Drink Category</label><br />
            <select name="Category" placeholder="Category">
                <option value="cocktail">Cocktail</option>
                <option value="shot">Shot</option>
            </select><br/>
            
            <label>URL for Image:</label><br />
            <input type="text" placeholder="image URL" name="strDrinkThumb"onChange={handleChange}/> <br/>
            
            {mapIngredientFields()}
            
            <label>Instructions:</label><br />
            <textarea placeholder="Instructions" name="strInstructions" onChange={handleChange} /> <br />
            <button>Submit</button>
        </form>
        </>
    )
}