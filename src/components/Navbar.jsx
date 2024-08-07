import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function Navbar({ loggedin }) {

  return (
    <div className="navbar">
      <div className='navbar-leading'>
        <button className='menu-btn'>
          <MenuRoundedIcon className='menu-btn-icon' />
        </button>
        <h1> BlogApp</h1>
      </div>
      <ul>
        <li><Link to="/">Blogs</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
      <div className="profile">
        {
          loggedin ?
            <div className='user-profile'>
              <p>{loggedin}</p>
              <Link to={'/profile'}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrmomXcswwHAWhq7Aevcv8bXouayxR_jHYfQ&s" alt="" />
              </Link>
            </div>
            : <>
              <Link to="/login"><button className='login-btn'>Login</button></Link>
              <Link to="/signup"><button className='login-btn'>Signup</button></Link>
            </>}
      </div>
    </div>
  )
}

export default Navbar