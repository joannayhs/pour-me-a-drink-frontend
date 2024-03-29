import React, {useEffect, useState} from  'react'
import {useHistory, useParams} from 'react-router-dom'


export default function RecipeForm({addNewRecipe, myRecipes, updateRecipe, deleteRecipe}){
    const history = useHistory()
    const params = useParams()
    const [formData, setFormData] = useState([])
    const [ingredientFields, setIngredientFields] = useState([
      {ingredient: "", measurement: ''}
    ])
    const [cocktail, setCocktail] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        getCocktail()
        addCocktailIngredients()
        checkForChecked()
    }, [cocktail])
    
    function getCocktail(){
        if(params.cocktailId){
           return setCocktail(myRecipes.find( drink => drink.idDrink.toString() === params.cocktailId))
        }
    }

    function addCocktailIngredients(){
        if(cocktail){
            let count = 1
            let allFields = []
            while(cocktail[`strIngredient${count}`]){
                allFields.push({
                    ingredient: cocktail[`strIngredient${count}`], measurement: cocktail[`strMeasure${count}`]
                })
                count++
            }
            setIngredientFields([...allFields, {
                ingredient: '', measurement: ''
            }])
        }
    }

    function checkForChecked(){
        if(cocktail && cocktail.strAlcoholic === "Alcoholic"){
            setIsChecked(true)
        }
    }


    function handleSubmit(e){
        e.preventDefault()
        if(cocktail){
            updateRecipe(cocktail, formData)
            setFormData([])
            history.push(`/my-recipes`)
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
            setIsChecked(!isChecked)
        }else{
            setFormData({...formData,
                "strAlcoholic": "Non-Alcoholic"
            })
            setIsChecked(!isChecked)
        }
    }


    function mapIngredientFields(){
        if(!cocktail){
            return ingredientFields.map((field, index) => {
                return (
                    <div key={`${field.ingredient}${index}`}>
                        <input type="text" placeholder={`Ingredient ${index + 1}`} name={`strIngredient${index+1}`} onChange={handleChange} key={`${index}Ingredient`} defaultValue={''} />
                        <input type="text" placeholder={`Measurement ${index + 1}`} name={`strMeasure${index+1}`} onChange={handleChange} key={`${index}Measurement`} defaultValue={''} />
                        <button key={index} onClick={e => removeIngredientField(e, index)}>X</button><br />
                    </div>

                )
            })
        }else{
            return ingredientFields.map((field, index) => {
                console.log(formData)
                return (
                    <div key={`${field.ingredient}${index}`}>
                        <input type="text"  name={`strIngredient${index+1}`} onChange={handleChange} key={`${index}Ingredient`} defaultValue={field.ingredient ? field.ingredient : ""} />
                        <input type="text"  name={`strMeasure${index+1}`} onChange={handleChange} key={`${index}Measurement`} defaultValue={field.measurement ? field.measurement : ""} />
                        <button key={index} onClick={e => removeIngredientField(e, index)}>X</button><br />
                    </div>

                )
            })
        }

          
    }
       

    function addIngredientField(e){
        e.preventDefault()
        setIngredientFields([...ingredientFields, {
            ingredient: "", measurement: ""
        }])
    }

    function removeIngredientField(e, index){
        if(!cocktail){
            e.preventDefault()
            let fields = [...ingredientFields]
            fields.splice(index, 1)
            return setIngredientFields(fields)
        }else{
            e.preventDefault()
            let fields = [...ingredientFields]
            fields.splice(index, 1)
            let data = {...formData}
            for(let i = 0; i < fields.length; i++){
                data[`strIngredient${i+1}`] = fields[i].ingredient
                data[`strMeasure${i+1}`] = fields[i].measurement
            }
            setFormData(data)
            return setIngredientFields(fields)
        }
    }


    function handleDelete(){
        deleteRecipe(cocktail)
        history.push(`/my-recipes`)
    }

    return (
        <div className="drink-form">
            {cocktail ? <h2>Edit Recipe</h2> : <h2> New Recipe </h2>}
            <button onClick={() => history.push(`/my-recipes`)} className="close-button" >X</button>
            <form onSubmit={handleSubmit}>
                <label>Drink Name</label><br />
                <input type="text" placeholder="Drink Name" name="strDrink" onChange={handleChange} defaultValue={cocktail ? cocktail.strDrink : ''} /> <br /><br />

                <label>Drink Category</label><br />
                <select name="strCategory" onChange={handleChange}>
                    {cocktail && cocktail.strCategory === "Cocktail" ? <option value="Cocktail" selected>Cocktail</option> : <option value="Cocktail" >Cocktail</option>}
                    {cocktail && cocktail.strCategory === "Shot" ? <option value="Shot" selected>Shot</option> : <option value="Shot">Shot</option>}
                </select><br />

                <label>Alcoholic?</label>
                <input type="checkbox" onChange={handleCheck} checked={isChecked} /> <br /><br />


                <label>Type of Glass Needed</label><br />
                <input type="text" onChange={handleChange} name="strGlass" placeholder="Type of Glass" defaultValue={cocktail ? cocktail.strGlass : ''} /><br /><br />

                <label>URL for Image:</label><br />
                <input type="text" placeholder="image URL" name="strDrinkThumb" onChange={handleChange} defaultValue={cocktail ? cocktail.strDrinkThumb : ''} /> <br /><br />

                <label>Ingredients:</label><br />
                {/* {cocktail? mapCocktailIngredientFields() : null} */}
                {mapIngredientFields()}
                <button onClick={(addIngredientField)}>Add Another Ingredient</button><br /><br />

                <label>Instructions:</label><br />
                <textarea placeholder="Instructions" name="strInstructions" onChange={handleChange} defaultValue={cocktail ? cocktail.strInstructions : ''} /> <br /><br />
                <button type="submit">Submit</button>
            </form>

            {cocktail ? <button className="delete-button" onClick={handleDelete}>DELETE</button> : null}
        </div>
    
    )
}