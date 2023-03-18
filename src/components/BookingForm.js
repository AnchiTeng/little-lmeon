
import React from 'react';
import BookingPage from './BookingPage '
import  "../App.css";

export default function BookingForm(availableTimes,setAvailableTimes) {
    //the user should not be able to reserve a table for less than one person.

   //  const initializeTimes  = () => {

   //  }
   
  return (
   <>
   <div>
   <form className="book"  >
   <label for="res-date">Choose date</label>
   <input type="date" id="res-date"></input>
   <label for="res-time">Choose time</label>
   <select id="res-time ">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label for="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests"></input>
   <label for="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation"></input>
    </form>
</div>
   <BookingPage/>
   </>
  )
}

