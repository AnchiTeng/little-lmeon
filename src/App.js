
import './App.css';
import { Routes, Route, Router } from "react-router-dom";

import { useEffect,useState } from 'react';
import HomePage from './components/HomePage';
import BookingForm from './components/BookingForm';


function App() {
 
  let [availableTimes,setAvailableTimes] = useState();

  // useEffect(()=>{

    

  // },[]) 
  const submitForm = (data) => {

  }

  
  return (
  <>
  
  <Routes> 
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/booking" element={<BookingForm/>}></Route>
  </Routes>
 

   
  </>
  );
}

export default App;
