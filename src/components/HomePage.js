import React from 'react'
import BookingForm from './BookingForm'
import Footer from './Footer'
import Navbar from './Navbar'
import Heading from './Heading'
import Specials from './Specials'

const HomePage = () => {
  return (
   <>
    <Navbar/>
    <Heading/>
    <Specials/>
    <BookingForm/>
    <Footer/>
   </>
  )
}

export default HomePage
