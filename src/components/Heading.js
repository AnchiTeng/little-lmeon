import React from 'react'
import HeadingImg from '../assets/food2.jpeg'

const Heading = () => {
  return (
    <div className='section-heading'>
        <div>
            <h1>Little Lemon Chicago</h1>
            <h2>Promotion code:happy10off</h2>
            <p>We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist</p>
            <button>Reserve a table</button>

        </div>
        <div>
            <img src={HeadingImg}/>
        </div>
      
    </div>
  )
}

export default Heading
