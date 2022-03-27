import React, { useState } from 'react'
import logo from './../images/logo.svg'
import hamburger from './../images/icon-hamburger.svg'

const Nav = () => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <nav>
      <img src={logo} alt="" />
      <ul className='desk-menu'>
        <li>About</li>
        <li>Serivce</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
      <img className='hamburger' onClick= {handleClick}src={hamburger} alt="" />
      <ul className={show? 'mobile-menu': 'mobile-menu hide'}>
        <li>About</li>
        <li>Service</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>

    </nav>
  )
}

export default Nav