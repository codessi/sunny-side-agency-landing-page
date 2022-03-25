import React from 'react'
import FB from './../images/icon-facebook.svg'
import TW from './../images/icon-twitter.svg'
import IG from './../images/icon-instagram.svg'
import PT from './../images/icon-pinterest.svg'

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
        <li><img src={FB} alt="facebook" /></li>
        <li><img src={IG} alt="instagram" /></li>
        <li><img src={PT} alt="pinterest" /></li>
        <li><img src={TW} alt="twitter" /></li>
      </ul>
    </div>
  )
}

export default Footer