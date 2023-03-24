import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ComfirmationImg from '../assets/food5.jpeg'

const Comfirmation = () => {


  return (
    <div>
      <Navbar/>
       <main className='page-header'>
        <img src={ComfirmationImg} alt=''/>
            <section className="page-header-text">
                <h1>Your Reservation is Confirmed!</h1>
                <h4>A confirmation message has been sent to your email.</h4>
                <h4>Thanks for dining with us!</h4>
            </section>
       </main>
       
       <Footer/>
    </div>
  )
}

export default Comfirmation
