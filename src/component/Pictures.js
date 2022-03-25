import React from 'react'
import milkbottles from './../images/mobile/image-gallery-milkbottles.jpg'
import orange from './../images/mobile/image-gallery-orange.jpg'
import cone from './../images/mobile/image-gallery-cone.jpg'
import sugerCubes from './../images/mobile/image-gallery-sugar-cubes.jpg'

const Pictures = () => {
  return (
    <div className='pictures'>
      <img src={milkbottles} alt="milkbottles" />
      <img src={orange} alt="orange" />
      <img src={cone} alt="cone" />
      <img src={sugerCubes} alt="suger cube" />
    </div>
  )
}

export default Pictures
