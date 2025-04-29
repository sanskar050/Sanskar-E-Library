import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'

function Login() {

  function login() {
    alert("Coming Soon...")
  }

  return (
    <div className="loginForm">

      <h1>Login</h1>
      <input type="email" name="" id="" placeholder='Email' />
      <input type="password" name="" id="" placeholder='Password' />
      
      <div className="login_buttons">
        <NavLink to="/password-reset">Forget Password?</NavLink>
        <button onClick={login} type='submit'>Submit</button>
      </div>

      <div className="newAccount">
        Don't have any account? <NavLink to="/register">Create a new account</NavLink>
      </div>

    </div>
  )
}

export default Login