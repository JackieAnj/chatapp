import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>AI Chat</span>
      <div className='user'>
        <img src='' alt='' />
        <span>Jackie</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default NavBar