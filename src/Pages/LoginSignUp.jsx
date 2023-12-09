import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='login'>
      <div className='login-container'>
        <h1>Sign Up</h1>
        <div className='login-fields'>
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='login-login'>Already Have An Account? <span>Login here!</span></p>
        <div className='login-agree'>
            <input type="checkbox" name='' id=''/>
            <p>By continuing, I agree to the terma of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
