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
           <div key={`${field.ingredient}${index}`}>
               <input type="text" placeholder={`${field.ingredient} ${index + 1}`} name={`strIngredient${index + 1}`} onChange={handleChange} key={`${index}${field.ingredient}`}/> <br />
               <input type="text" placeholder={`${field.measurement} ${index + 1}`} name={`strMeasure${index + 1}`} onChange={handleChange} key={`${index}${field.measurement}`}/>
               <button key={index} onClick={e => removeIngredientField(e, index)}>X</button><br/>
           </div>

       ) 
        })
    }

    function addIngredientField(e){
        e.preventDefault()
        setIngredientFields([...ingredientFields, {
            ingredient: "Ingredient", measurement: "Measurement"
        }])
    }

    function removeIngredientField(e, index){
        e.preventDefault()
       let fields = [...ingredientFields]
       fields.splice(index, 1) 
       return setIngredientFields(fields)
    }

    return (
        <>
         <form onSubmit={handleSubmit}>
            <label>Drink Name</label><br/>
            <input type="text" placeholder="Drink Name" name="strDrink" onChange={handleChange}/> <br/><br/>
           
            <label>Drink Category</label><br />
            <select name="strCategory" placeholder="Category">
                <option value="cocktail">Cocktail</option>
                <option value="shot">Shot</option>
            </select><br/>
            
            <label>Type of Glass Needed</label><br/>
            <input type="text" name="strGlass" placeholder="Type of Glass"/><br/><br/>

            <label>URL for Image:</label><br />
            <input type="text" placeholder="image URL" name="strDrinkThumb"onChange={handleChange}/> <br/><br/>
            
            <label>Ingredients:</label><br/>
            {mapIngredientFields()}
            <button onClick={(addIngredientField)}>Add Another Ingredient</button><br /><br/>

            <label>Instructions:</label><br />
            <textarea placeholder="Instructions" name="strInstructions" onChange={handleChange} /> <br /><br/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}