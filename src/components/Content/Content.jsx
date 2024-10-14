import React, { useState, useEffect } from 'react'

const content = () => {

    const [username, setUserName] = useState('')

    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem('signForm'))
        if(storedUserData && storedUserData.username){
            setUserName(storedUserData.username);
        }
    }, [])
  return (
    <div className='content'>
        <h1 className='p-center'>Hi! Welcome</h1>
        <p className='p-center'> This is {username}</p>
    </div>
  )
}
export default content