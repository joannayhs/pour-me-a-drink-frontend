import React from 'react'

function SignUp(){

    function handleSubmit(e){
        e.preventDefault()
        console.log(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="Enter Email"/>
            <input type="password" name="password" placeholder="Enter Password"/>
            <input type="text" name="first-name" placeholder="Enter First Name"/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default SignUp