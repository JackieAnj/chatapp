import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src='https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg' alt='' />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>Hello</p>
      </div>
    </div>
  )
}

export default Message