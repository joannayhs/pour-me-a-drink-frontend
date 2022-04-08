import React from 'react'
 
function Login(){


    function handleSubmit(e){
        e.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="Enter Email"/>
            <input type="password" name="password" placeholder="Enter Password"/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Login