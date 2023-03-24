import {useReducer} from 'react'
import Navbar  from './Navbar'
import Footer from './Footer'
import BookingForm from './BookingForm'
import BookingImg from '../assets/food2.jpeg'
import {fetchAPI} from './BookingAPI'

const BookingPage  = () => {

  function updateTimes(date) {
    return (
        fetchAPI(date)
    );
}


const output = fetchAPI(new Date());
console.log('output',output)

const [availableTimes, dispatch] = useReducer(updateTimes, output);


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
    <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
    </main>
    <Footer/>
    </>
  )
}

export default BookingPage 
