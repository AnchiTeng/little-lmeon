import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Homepage from './HomePage';
import BookingPage from './BookingPage';
import Confirmation from './Confirmation';
import About from './About';
import Login from './Login';
import Order from './Order';
import Menu from './Menu';

export default function Routing() {
  return (
      <Routes>
          <Route path="/" element= {
          <Homepage />
          } />

          <Route path="/about" element={
          <About />
          } />
           <Route path="/menu" element={
          <Menu />
          } />

          <Route path="/reservations" element= {
          <BookingPage />
          } />

          <Route path="/order" element= {
          <Order />
          } />

          <Route path="/login" element= {
          <Login />
          } />

          <Route path="/confirmation" element= {
              <Confirmation />
          } />
      </Routes>
  );
}