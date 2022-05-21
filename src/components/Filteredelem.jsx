

import React from 'react'

 const Filteredelem = ({mappingdata,userdata}) => {
     console.log(userdata)
  return (
  
            <div class="cards">
                { mappingdata.map((el,index)=>(
                 <div key={el.index}>
                       <div class="card">
                  <img width="254" height="160px" src={el.image} />
                  <div class="restaurant-title">{el.name}</div>
                  <div class="restaurant-details">
                      
                      {
                          el.categories.map((cat)=>(
                            <div style={{display:"flex"}}class="restaurant-subtitle">{cat}</div>
                          ))
                      }
                      
                  </div>
                  <div class="restaurant-info">
                      <div class="restaurant-ratings">
                          <i class="material-icons star-icon">star</i>{el.star}
                      </div>
                       .<div class="restaurant-delivery-timings">{(el.payment_method==="ca"&&<span>Only Card Accepted</span>)||(el.payment_method==="co"&&<span>Only Cash Accepted</span> )||(el.payment_method==="b" &&<span> Card/Cash Accepted</span>)}</div> .
                      <div class="restaurant-cost-for-two">{el.costfor_two}</div>
                  </div>
                  <div class="offer-banner">
                      <span class="material-icons"> local_offer </span>
                      <span class="offer-text">20% off | Use TRYNEW</span>
                  </div>
                 </div>
                 
              </div>
              ))}
                
            </div>
        
  )
}
export default Filteredelem
