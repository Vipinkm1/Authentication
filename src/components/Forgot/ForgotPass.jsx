import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ForgotPass = () => {
    const [forgotPass, setForgotPass] = useState({
        email: '',
        newPassword: '',
        conPassword: ''
    })
    const handleForgot = (e) => {
        const { name, value } = e.target;
        setForgotPass({
            ...forgotPass,
            [name]: value
        })
    }
    const navigate = useNavigate();
    const handleForgotSubmit = (e) => {
        e.preventDefault();
        //  get the data from the local storage
        const storedUserData = JSON.parse(localStorage.getItem('signForm'));
        if (storedUserData && storedUserData.email === forgotPass.email) {
            if (forgotPass.newPassword === confirm) {
                alert('Passwords do not match');
                return;
            }
            storedUserData.password = forgotPass.newPassword;
            localStorage.setItem('signForm', JSON.stringify(storedUserData));
            alert('Password Updated Successfully');
            navigate('/login');
        }
        
        else {
            alert('Email not found or invalid');
        }
        setForgotPass(forgotPass)
        console.log(forgotPass)
      
    }
    return (
        <div className='signup-container'>
            <h1 className='p-center'>Forgot Password</h1>
            <div className='signup-border'>
                <form className='form-container' onSubmit={handleForgotSubmit}>
                    <div className='form-group'>
                        <label htmlFor='username'>Email</label>
                        <input type='text' name='email' placeholder='Enter email' value={forgotPass.email} onChange={handleForgot} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='username'>New Password</label>
                        <input type='text' name='newPassword' placeholder='Enter new password' value={forgotPass.newPassword} onChange={handleForgot} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='username'>Confirm Password</label>
                        <input type='text' name='conPassword' placeholder='Enter confirm password' value={forgotPass.conPassword} onChange={handleForgot} />
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