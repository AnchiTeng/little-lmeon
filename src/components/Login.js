import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ComfirmationImg from '../assets/food5.jpeg'

const Login = () => {
  return (
    <div>
      <Navbar/>
       <main className='page-header'>
        <img src={ComfirmationImg} alt=''/>
            <section className="page-header-text">
                <h1>Login</h1>
                
            </section>
       </main>
       
       <Footer/>
    </div>
  )
}

export default Login
