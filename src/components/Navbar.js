import React from 'react';
import NavLogo from '../assets/nav-logo.png';

const Navbar = () => {
  return (
    <nav>
    <nav className='top-navbar'>
      <div className='navbar-logo'>
        <img src={NavLogo} alt='nav-logo' style={{width:"9em", height:"4em"}}/>
        </div> 
        <div className='navbar-link'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
             <li>Order</li>
        </ul>

        </div>
   
       
    </nav>
    </nav>
  

  )
}

export default Navbar;
