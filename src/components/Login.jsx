import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const handleSignUp=()=>{
        navigate('/signup')
    }

  return (
    <div className='login'>
        <img src="/largelogo.svg" alt="Logo" />
        <form action="">
            <label htmlFor="username">Username: </label> <br />  
            <input type="text" name="username" id="username" /> <br />  
            <label htmlFor="password">Password: </label> <br />  
            <input type="password" name="password" id="password" /> <br />  
            <button type="submit">Login</button>
            <button onClick={handleSignUp}>Sign Up</button>
        </form>
    </div>
  )
}

export default Login