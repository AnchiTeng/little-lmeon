import React from 'react'
import Navbar  from './Navbar'
import Footer from './Footer'
import BookingForm from './BookingForm'
import BookingImg from '../assets/food2.jpeg'

const BookingPage  = () => {
  return (
    <>
    <Navbar/>
    <header className='page-header'>
      
    <img src={BookingImg} alt='Book A Table'/>
       <div className="page-header-text">
                <h1>Reserve a table</h1>
            </div>
    </header>
    <main>
    <BookingForm/>
    </main>
    <Footer/>
    </>
  )
}

export default BookingPage 
