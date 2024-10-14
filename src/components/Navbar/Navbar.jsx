import React from 'react'
import { CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { CiSettings } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-item'>
        <div className='logo'>
          <h2>Dashboard</h2>
        </div>
        <div className='nav-item'>
          <div className='nav-list'>
            <GoHome className='icon-size' />
            <p>Home</p>
          </div>
          <div className='nav-list'>
            <CiSettings className='icon-size' />
            <p>Setting</p>
          </div>
          <div className='nav-list'>
            <CgProfile className='icon-size' />
            <p>Profile</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar