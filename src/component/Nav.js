import React from 'react'
import logo from './../images/logo.svg'
import hamburger from './../images/icon-hamburger.svg'

const Nav = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <img src={hamburger} alt="" />
    </nav>
  )
}

export default Nav