import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  })

  const handleLoginForm = (e) => {
    const { name, value } = e.target
    setLoginForm({ ...loginForm, [name]: value })
  }

  //  navigate the page
  const navigate = useNavigate();
  const handleLoginSubmit = (e) => {
    e.preventDefault()
    setLoginForm(loginForm)
    // get the data from the local Storage  and show the main component

  
  
    const storedUserData = JSON.parse(localStorage.getItem('signForm'))
    if (storedUserData.email === loginForm.email && storedUserData.password === loginForm.password) {
      alert('Login Successfully')
      navigate('/home')
    }
    else {
      alert('Login Failed')
    }
    console.log(loginForm)
  }

   return (
    <div className='signup-container'>
      <h1 className='p-center'>Login</h1>
      <div className='signup-border'>
        <form onSubmit={handleLoginSubmit} className='form-container'>
          <div className='form-group'>
            <label htmlFor='username'>Email</label>
            <input type='text' name='email' placeholder='Enter username' value={loginForm.email} onChange={handleLoginForm} />
          </div>
          <div className='form-group'>
            <label htmlFor='username'>Password</label>
            <input type='text' name='password' placeholder='Enter username' value={loginForm.password} onChange={handleLoginForm} />
          </div>
          <div className='form-group'>
            <p>Doesn't have an account? <Link to='/signup' className='link-color'>Sign Up</Link> </p>
          </div>
          <div className='form-group'>
            <Link to='/forgot'>Forgot Password?</Link>
          </div>
          <div className='button '>
            <button className='btn-1'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login