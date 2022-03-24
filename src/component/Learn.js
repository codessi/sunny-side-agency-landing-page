import React from 'react'
import egg from './../images/mobile/image-transform.jpg'
import cup from './../images/mobile/image-stand-out.jpg'

const Learn = () => {
  return (
    <>
      <div className="egg">
        <img src={egg} alt="" />
      </div>
      <div className="transform">
        <h3>Transform your brand</h3>
        <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
        <div className="cta">Learn more</div>
      </div>
      <div className="cup">
        <img src={cup} alt="" />
      </div>
      <div className="stand-out">
        <h3>Stand out to the right audience</h3>
        <p>  Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
        <div className="cta">Learn more</div>
      </div>
    </>
  )
}

export default Learn