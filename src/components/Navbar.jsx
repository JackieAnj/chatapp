import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>AI Chat</span>
      <div className='user'>
        <img src='https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg' alt='' />
        <span>Jackie</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default NavBar