import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ComfirmationImg from '../assets/food5.jpeg'


const Order = () => {
  return (
    <div>
      <Navbar/>
       <main className='page-header'>
        <img src={ComfirmationImg} alt=''/>
            <section className="page-header-text">
                <h1>Order</h1>
                
            </section>
       </main>
       
       <Footer/> 
    </div>
  )
}

export default Order
