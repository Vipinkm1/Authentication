import React from 'react'

const ForgotPass = () => {
  return (
    <div className='signup-container'>
    <h1 className='p-center'>Forgot Password</h1>
    <div className='signup-border'>
      <form className='form-container'>
        <div className='form-group'>
          <label htmlFor='username'>New Password</label>
          <input type='text' id='username' placeholder='Enter username' />
        </div>
        <div className='form-group'>
          <label htmlFor='username'>Confirm Password</label>
          <input type='text' id='username' placeholder='Enter username' />
        </div>
        <div className='button '>
          <button className='btn-1'>Update Password</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default ForgotPass