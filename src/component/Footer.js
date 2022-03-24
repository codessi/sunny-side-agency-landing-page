import React from 'react'
import FB from './../images/icon-facebook.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <h3>sunnyside</h3>
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <ul>
        <li><img src={FB} alt="" /></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default Footer