import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./login.css"

const Login = () => {

    const [email,setEmail]=useState("");

    const[password,setPassword]=useState("");

    const loginHandler = (e)=>{
        try {
            e.preventDefault()
            alert(`Login Data ${email} ${password}`);
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
   <div className="form-container">
    <div className="form">
        <div className="mb-3">
            <i className='fa-solid fa-circle-user'></i>
        </div>
        <div className="mb-3">
            <input type="email" className='form-control'
            placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
          <div className="mb-3">
            <input type="password" className='form-control'
            placeholder='enter password' calue={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div className="form-bottom">
            <p className='text-center'>
                Not a user? please 
                <Link to="/register">Register</Link>
            </p>
            <button type='submit' className='login-btn' onClick={loginHandler}>Login</button>
        </div>
    </div>
   </div>
  )
}

export default Login
