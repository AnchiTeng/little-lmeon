import React from 'react';
import FooterLogo from '../assets/footer-logo.png';

const Footer = () => {
  return (
    <footer>

        <menu className='footer-menu'>
            <li>
                <ul>
                   
                <img src={FooterLogo} style={{width:"5rem", height:"8rem"}} alt='footer-logo'/> 
                </ul>
            </li>
            <li>
                <ul>
                    <li className='footer-header'>Navigation</li>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/menu'>Menu</a></li>
                    <li><a href='/reservations'>Reservations</a></li>
                    <li><a href='/order'>Order</a></li>
                    <li><a href='/login'>Login</a></li>

                </ul>
               


            </li>
            <li>
                <ul>
                    <li className='footer-header'>Contact</li>
                    <li>2395 Maldove Way,<br/>Chicago Illinois</li>
                    <br/>
                    <li>(629)-243-6827</li>
                    <br/>
                    <li><a href="mailto: info@littlelemon.com" target="_blank" rel="noreferrer">info@littlelemon.com</a></li>
                </ul>

            </li>
            <li>
                <ul>
                    <li className='footer-header'>Social</li>
                    <li><a href='https://www.facebook.com/fbmarketplace' target="_blank" rel='noreferrer'>Facebook Page</a></li>
                    <li> <a href="https://www.instagram.com/littlelemonmoon/" target="_blank" rel="noreferrer">Instagram</a></li>
                </ul>

            </li>
        </menu>
      
    </footer>
  )
}

export default Footer
