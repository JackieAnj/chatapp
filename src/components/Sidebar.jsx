import React from 'react'
import Chats from './Chats'
import NavBar from './Navbar'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <NavBar />
            <Chats />
        </div>
    )
}

export default Sidebar