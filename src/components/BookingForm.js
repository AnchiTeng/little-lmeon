
import {useState} from 'react';
import  "../App.css";

export default function BookingForm() {
    //the user should not be able to reserve a table for less than one person.
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [tel,setTel] = useState('');
    const [reservedDate, setReservedDate] = useState('');
    const [reservedTime, setReservedTime] = useState('');
    const [partySize, setPartySize] = useState(1);
    const [occasion,setOccasion] =useState('');
    const [comments,setComments] = useState('');
   
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const bookingInfo = {
         name:name,
         email:email,
         tel:tel,
         reservedDate:reservedDate,
         reservedTime:reservedTime,
         partySize:partySize,
         occasion:occasion,
         comments:comments

      }
      console.log(bookingInfo)
      if(localStorage.getItem("booking")){
         let localData = JSON.parse(localStorage.getItem('booking'));
         localData=[...localData,bookingInfo];
         localStorage.setItem("booking", JSON.stringify(localData))

      }else{
         localStorage.setItem("booking", JSON.stringify([bookingInfo]))
      }
    
      window.location.replace('http://localhost:3001/confirmation');
     
    }
   
  return (
   <>
   <div className='booking-container'>
   <form className="book" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
       <input 
        type="text" 
        id="name" 
        value={name} 
        onChange={(event) => setName(event.target.value)} 
        required 
      />

      <label htmlFor='email'>Email:</label> 
      <input
       type="email"
       id='email'
       value={email}
       onChange={(e)=> setEmail(e.target.value)}
       required
      />

      <label htmlFor='phonenum'>Phone Number:</label>
      <input
      type='tel'
      id='phonenum'
      value={tel}
      placeholder='10 number digits'
      pattern="[1-9]{1}[0-9]{9}"
     
      required
      onChange={(e)=>setTel(e.target.value)}
      />
   

    
     
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" onChange={(e)=>setReservedDate(e.target.value)} required/>
      <label htmlFor="res-time">Choose time</label>
         <select id="res-time " onChange={(e)=>setReservedTime(e.target.value)} required placeholder='select time'>
            <option value=''>Unselected</option>
            <option value='17:00'>17:00</option>
            <option value='18:00'>18:00</option>
            <option value='19:00'>19:00</option>
            <option value='20:00'>20:00</option>
            <option value='21:00'>21:00</option>
            <option value='22:00'>22:00</option>
          </select>
      <label htmlFor="guests">Number of guests</label>
         <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(event) => setPartySize(event.target.value)} required></input>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" onChange={(e)=>setOccasion(e.target.value)} required>
          <option value=''>Unselected</option>
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
          <option value='Other'>Other</option>
      </select>
     
                <label htmlFor="comments">Additional Comments</label> <br></br>
                <textarea id="comments" rows={8} cols={50} placeholder="Additional Comments"
                value={comments}
                onChange={e => setComments(e.target.value)}>
                </textarea>
          
      <input type="submit" value="Make Your reservation"></input>
    </form>
</div>
 
   </>
  )
}

