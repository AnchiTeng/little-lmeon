import React from 'react'
import {Link} from 'react-router-dom';
import Salad from '../assets/greek-salad.png';
import Bruschetta from '../assets/bruschetta.jpeg';
import LemonTart from '../assets/lemon-tart.png';

const Specials = () => {
    const spacialsOfTheWeek =[
        {
            name:"Greek Salad",
            price:"$12.99",
            description:"Feta Cheese, tomato, lettuce"
        },
        {
            name:"Bruschetta",
            price:"$16.99",
            description:"Bread, mango, green onions"
        },
        {
            name:"Lemon Dessert",
            price:"$8.99",
            description:"Lemon bread, vanilla Icing"
        }
    ] 




  return (
    
    <div className='spacials-container'>
        <article>
            <h1>Week Specials</h1>
            <button className='sections-btn'>
                <a href='./menu'> Online Menu</a>
            </button>
        </article>
        <div className='spacials'>  
            <section className="menu-card-content">
                <img src={Salad} alt='greek-salad'/>
                <h1>{spacialsOfTheWeek[0].name}</h1>
                <h3>{spacialsOfTheWeek[0].price}</h3>
                <p>{spacialsOfTheWeek[0].description}</p>
                <Link className="special-button"to="/order">Order for Delivery</Link>
           </section>

      
           
        <section className="menu-card-content">
                <img src={Bruschetta}/>
                <h1>{spacialsOfTheWeek[1].name}</h1>
                <h3>{spacialsOfTheWeek[1].price}</h3>
                <p>{spacialsOfTheWeek[1].description}</p>
                <Link className="special-button"to="/order">Order for Delivery</Link>
        </section>

       
  
            
        <section className="menu-card-content">
                <img src={LemonTart}/>
                <h1>{spacialsOfTheWeek[2].name}</h1>
                <h3>{spacialsOfTheWeek[2].price}</h3>
                <p>{spacialsOfTheWeek[2].description}</p>
                <Link className="special-button"to="/order">Order for Delivery</Link>
        </section>

      </div>
       
        
      
    </div>
  )
}

export default Specials
