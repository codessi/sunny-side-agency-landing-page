import React from 'react'
import cherry from './../images/mobile/image-graphic-design.jpg'
import orange from './../images/mobile/image-photography.jpg'

const Service = () => {
  return (
    <div>    
      <div className="graphic">
        <img src={cherry} alt="cherry" />
        <div className="content-wrapper">
          <h3>Graphic design</h3>
          <p> Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                
 
        </div>
      </div>     
      <div className="photography">
        <img src={orange} alt="orange" />
        <div className="content-wrapper">
          <h3>Photography</h3>
          <p>   Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                
 
        </div>
      </div>
    </div>
  )
}

export default Service