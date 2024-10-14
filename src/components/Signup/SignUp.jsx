import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [signForm, setSignForm] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
  })
  const navigate = useNavigate()
  const handleSignUpForm = (e) => {
    const { name, value } = e.target;
    setSignForm({
      ...signForm,
      [name]: value
    })
  }
  //  handle submit form
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setSignForm(signForm)
    console.log(signForm)
    localStorage.setItem('signForm', JSON.stringify(signForm))
    navigate('/login')
    alert('Sign Up Successfully')
  }
  
  return (
    <div className='signup-container'>
      <h1 className='p-center'>Sign Up</h1>
      <div className='signup-border'>
        <form className='form-container' onSubmit={handleSubmitForm}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' placeholder='Enter username' value={signForm.username} onChange={handleSignUpForm} />
          </div>
          <div className='form-group'>
            <label htmlFor='username'>Email</label>
            <input type='text' name='email' placeholder='Enter email' value={signForm.email} onChange={handleSignUpForm} />
          </div>
          <div className='form-group'>
            <label htmlFor='username'>Password</label>

            <input type='text' name='password' placeholder='Enter password' value={signForm.password} onChange={handleSignUpForm} />
          </div>
          <div className='form-group'>
            <label htmlFor='username'> Confirm Password</label>
            <input type='text' name='confirm' placeholder='Enter confirm' value={signForm.confirm} onChange={handleSignUpForm} />
          </div>
          <div className='form-group'>
            <p>Already have an account? <Link to='/login' className='link-color'>Login</Link> </p>
          </div>
          <div className='button '>
            <button className='btn-1'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp