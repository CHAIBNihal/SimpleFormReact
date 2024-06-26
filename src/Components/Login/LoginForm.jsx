import React from 'react'
import './login.css'
import { FaUser, FaLock } from "react-icons/fa6";


const LoginForm = () => {
  return (
    <div>
       <div className="wrapper">
        <form action="">
        <h1>Login Form</h1>

        <div className="input-box">
            <input type="text" name="" id="" placeholder='Username....' />
            <FaUser className='icon' />
        </div>
            <div className="input-box">
            <input type="password" placeholder='Password....' />
            <FaLock className='icon' />
            </div>

            <div className="remember-forgot">
              <label ><input type="checkbox"  /> Remembre me </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit">Login</button>

            <div className="register-link">
              <p>Don't have an account? <a href="#">Register</a></p>
            </div>
            
          
            
        </form>
       </div>
    </div>
  )
}

export default LoginForm