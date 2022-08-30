import React, {useState} from  'react'
import {useHistory} from 'react-router-dom'


export default function NewRecipe({addNewRecipe}){
    const history = useHistory()
    const [formData, setFormData] = useState([])
    const [ingredientFields, setIngredientFields] = useState([
      {ingredient: "Ingredient", measurement: 'Measurement'}
    ])
    
    function handleSubmit(e){
        e.preventDefault()
        addNewRecipe({...formData, idDrink: Math.floor(Math.random() * 10001) })
        setFormData([])
        history.push('/my-recipes')
    }

    function handleChange(e){
        return setFormData({...formData, [e.target.name]: e.target.value}) 
    }

    function handleCheck(e){
        if(e.target.checked){
            setFormData({...formData, 
                "strAlcoholic": "Alocholic"
            })
        }else{
            setFormData({...formData,
                "strAlcoholic": "Non-Alcoholic"
            })
        }
    }

    function mapIngredientFields(){
       return ingredientFields.map(( field, index ) => {
       return(
           <div key={`${field.ingredient}${index}`}>
               <input type="text" placeholder={`${field.ingredient} ${index + 1}`} name={`strIngredient${index + 1}`} onChange={handleChange} key={`${index}${field.ingredient}`} defaultValue=""/> <br />
               <input type="text" placeholder={`${field.measurement} ${index + 1}`} name={`strMeasure${index + 1}`} onChange={handleChange} key={`${index}${field.measurement}`} defaultValue="" />
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
            <input type="text" placeholder="Drink Name" name="strDrink" onChange={handleChange} defaultValue="" /> <br/><br/>
           
            <label>Drink Category</label><br />
            <select name="strCategory" onChange={handleChange}>
                <option value="Cocktail">Cocktail</option>
                <option value="Shot">Shot</option>
            </select><br/>
            
            <label>Alcoholic?</label><input type="checkbox" onChange={handleCheck}/><br/><br/>

            <label>Type of Glass Needed</label><br/>
            <input type="text" name="strGlass" placeholder="Type of Glass" defaultValue="" /><br/><br/>

            <label>URL for Image:</label><br />
            <input type="text" placeholder="image URL" name="strDrinkThumb" onChange={handleChange} defaultValue="" /> <br/><br/>
            
            <label>Ingredients:</label><br/>
            {mapIngredientFields()}
            <button onClick={(addIngredientField)}>Add Another Ingredient</button><br /><br/>

            <label>Instructions:</label><br />
            <textarea placeholder="Instructions" name="strInstructions" onChange={handleChange} defaultValue="" /> <br /><br/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}