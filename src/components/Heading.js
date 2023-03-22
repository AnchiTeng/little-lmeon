import React from 'react'
import HeadingImg from '../assets/food2.jpeg'

const Heading = () => {
  return (
    <div className='section-heading'>
        <div>
            <h1>Little Lemon Chicago</h1>
            <p className='promotion-code'>Promotion code: happy10off</p>
            <p>We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist</p>
            <button className='sections-btn'>Reserve a table</button>

        </div>
     
            <img className='section-heading-img' src={HeadingImg}/>
       
      
    </div>
  )
}

export default Heading
