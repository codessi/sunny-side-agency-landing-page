import React from 'react'
import emily from './../images/image-emily.jpg'
import thomas from './../images/image-thomas.jpg'
import jennie from './../images/image-jennie.jpg'

const Client = () => {
  return (
    <div className='client'>
      <h4>CLIENT TESTIMONIALS</h4>
      <ul>
        <li>
          <img src={emily} alt="head shot emily" />
          <p>  We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
          <h5>Emily R.</h5>
          <div className="title">Marketing Director</div>
        </li>
        <li>
          <img src={thomas} alt="head shot emily" />
          <p>  Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
          <h5>Thomas S.</h5>
          <div className="title">Chief Operating Officer</div>
        </li>
        <li>
          <img src={jennie} alt="head shot emily" />
          <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
          <h5>Jennie F.</h5>
          <div className="title">Business Owner</div>
        </li>
      </ul>
    </div>
  )
}

export default Client