import React, {useEffect, useState} from  'react'
import {useHistory, useParams} from 'react-router-dom'
import Cocktails from './Cocktails'


export default function NewRecipe({addNewRecipe, myRecipes, updateRecipe, deleteRecipe}){
    const history = useHistory()
    const params = useParams()
    const [formData, setFormData] = useState([])
    const [ingredientFields, setIngredientFields] = useState([
      {ingredient: "Ingredient", measurement: 'Measurement'}
    ])
    const [cocktail, setCocktail] = useState(undefined)

    useEffect(() => {
        getCocktail()
        cocktailIngredientFields()
    }, [cocktail])
    
    function getCocktail(){
        if(params.cocktailId){
           return setCocktail(myRecipes.find( drink => drink.idDrink.toString() === params.cocktailId))
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        if(cocktail){
            updateRecipe(cocktail, formData)
            setFormData([])
            history.push(`/my-recipes/${cocktail.idDrink}`)
        }else{
            addNewRecipe({ ...formData, idDrink: Math.floor(Math.random() * 10001) })
            setFormData([])
            history.push(`/my-recipes`)
        }
    }

    function handleChange(e){
        return setFormData({...formData, [e.target.name]: e.target.value}) 
    }

    function handleCheck(e){
        if(e.target.checked){
            setFormData({...formData, 
                "strAlcoholic": "Alcoholic"
            })
        }else{
            setFormData({...formData,
                "strAlcoholic": "Non-Alcoholic"
            })
        }
    }

    function  cocktailIngredientFields(){
        if(cocktail){
            let count = 1
            while(cocktail[`strIngredient${count}`] != undefined){
                setIngredientFields([...ingredientFields, {
                    ingredient: "Ingredient", measurement: "Measurement"
                }])
                count++
            }
            return ingredientFields
        }
    }

    function mapIngredientFields(){

       return ingredientFields.map(( field, index ) => {
        let ingNum = `strIngredient${index +1}`
        let measNum = `strMeasure${index+1}`
        return(
            <div key={`${field.ingredient}${index}`}>
                <input type="text" placeholder={`${field.ingredient} ${index + 1}`} name={`strIngredient${index + 1}`} onChange={handleChange} key={`${index}${field.ingredient}`} defaultValue={cocktail ? cocktail[ingNum] : ''}/> <br />
                <input type="text" placeholder={`${field.measurement} ${index + 1}`} name={`strMeasure${index + 1}`} onChange={handleChange} key={`${index}${field.measurement}`} defaultValue={cocktail ? cocktail[measNum] : ''} />
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

    function handleDelete(){
        deleteRecipe(cocktail)
        history.push(`/my-recipes`)
    }

    return (
        <div className="drink-form">
            {console.log(cocktail)}
            <button onClick={() => history.push(`/my-recipes`)}>Close</button>
         <form onSubmit={handleSubmit}>
            <label>Drink Name</label><br/>
            <input type="text" placeholder="Drink Name" name="strDrink" onChange={handleChange} defaultValue={cocktail ? cocktail.strDrink : ''}/> <br/><br/>
           
            <label>Drink Category</label><br />
            <select name="strCategory" onChange={handleChange}>
                <option value="Cocktail">Cocktail</option>
                <option value="Shot">Shot</option>
            </select><br/>
            
            <label>Alcoholic?</label>
            {cocktail && cocktail.strAlcoholic === "Alcoholic" ? <input type="checkbox" onChange={handleCheck} checked/> : <input type="checkbox" onChange={handleCheck} />} <br/><br/>
           

            <label>Type of Glass Needed</label><br/>
            <input type="text" onChange={handleChange} name="strGlass" placeholder="Type of Glass" defaultValue={cocktail ? cocktail.strGlass : ''} /><br/><br/>

            <label>URL for Image:</label><br />
            <input type="text" placeholder="image URL" name="strDrinkThumb" onChange={handleChange} defaultValue={cocktail ? cocktail.strDrinkThumb : ''} /> <br/><br/>
            
            <label>Ingredients:</label><br/>
            {mapIngredientFields()}
            <button onClick={(addIngredientField)}>Add Another Ingredient</button><br /><br/>

            <label>Instructions:</label><br />
            <textarea placeholder="Instructions" name="strInstructions" onChange={handleChange} defaultValue={cocktail ? cocktail.strInstructions : ''} /> <br /><br/>
            <button type="submit">Submit</button>
        </form>

        {cocktail ? <button onClick={handleDelete}>DELETE</button> : null}
        </div>
    )
}