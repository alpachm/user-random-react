import React, { useState } from 'react'
import './users.css'

const Users = ({ users }) => {

  const [firstText, setFirstText] = useState('Hi, my name is')
  const [secondText, setSecondText] = useState(`${users.name.first} ${users.name.last}`)

  const changeInfo = e => {
    if (e.target.classList.contains('bx-user')) {
      setFirstText('Hi, my name is')
      setSecondText(`${users.name.first} ${users.name.last}`)
    }

    if (e.target.classList.contains('bx-message-square-dots')) {
      setFirstText('My email address is')
      setSecondText(users.email)
    }

    if (e.target.classList.contains('bx-calendar-week')) {
      setFirstText('My birthday is')

      const date = users.dob.date
      const onlyDate = date.split('T')

      setSecondText(onlyDate[0])
    }

    if (e.target.classList.contains('bx-map-alt')) {
      setFirstText('My address is')
      setSecondText(`${users.location.street.number} ${users.location.street.name}`)
    }

    if (e.target.classList.contains('bx-phone')) {
      setFirstText('My phone number is')
      setSecondText(users.phone)
    }

    if (e.target.classList.contains('bx-lock-alt')) {
      setFirstText('My password is')
      setSecondText(users.login.password)
    }

  }

  return (
    <div className='card__user'>
      <div className="top">
        <img src={users.picture.large} alt="" />
      </div>
      <div className="bottom">
        <span>{firstText}</span>
        <h2>{secondText}</h2>

        <div className="icons" >
          <i className='bx bx-user' onClick={changeInfo}></i>
          <i className='bx bx-message-square-dots' onClick={changeInfo}></i>
          <i className='bx bx-calendar-week' onClick={changeInfo}></i>
          <i className='bx bx-map-alt' onClick={changeInfo}></i>
          <i className='bx bx-phone' onClick={changeInfo}></i>
          <i className='bx bx-lock-alt' onClick={changeInfo}></i>
        </div>
      </div>
    </div >
  )
}

export default Users