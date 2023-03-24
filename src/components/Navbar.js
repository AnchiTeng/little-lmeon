import React from 'react';
import NavLogo from '../assets/nav-logo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className='top-navbar'>
      <div className='navbar-logo'>
       <a href=''><img src={NavLogo} alt='nav-logo' style={{width:"9em", height:"4em"}}/></a> 
        </div> 
       
        <div className='navbar-link'>
        <Link className="hover-effect" to="/"><h1>Home</h1></Link>
            <Link className="hover-effect" to="/about"><h1>About</h1></Link>
            <Link className="hover-effect" to="/menu"><h1>Menu</h1></Link>
            <Link className="hover-effect" to="/booking"><h1>Reservations</h1></Link>
            <Link className="hover-effect" to="/order"><h1>Order</h1></Link>
            <Link className="hover-effect" to="/login"><h1>Login</h1></Link>

        </div>
        </nav>
   
       
   
    </header>
  

  )
}

export default Navbar;
