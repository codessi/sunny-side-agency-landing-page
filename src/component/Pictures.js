import React from 'react'
import milkbottles from './../images/mobile/image-gallery-milkbottles.jpg'
import orange from './../images/mobile/image-gallery-orange.jpg'
import cone from './../images/mobile/image-gallery-cone.jpg'
import sugerCubes from './../images/mobile/image-gallery-sugar-cubes.jpg'

const Pictures = () => {
  return (
    <div className='pictures'>
      <img src={milkbottles} alt="" />
      <img src={orange} alt="" />
      <img src={cone} alt="" />
      <img src={sugerCubes} alt="" />
    </div>
  )
}

export default Pictures
