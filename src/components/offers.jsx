import React from 'react'
import '../App.css';
 const Offers = ({offerimages}) => {
   //console.log(offerimages)
  return (
    <div>
       <section className="offers">
       <div className="container">
        {offerimages.map((el)=>(
          
             <img className="offer" src={el}/>
       
        ))}
         </div>
    </section>
    </div>
  )
}

export default Offers