import React from 'react'

 const Filters = ({handlesortstar,handlecash, handleall,handlelowtohigh,handlehightolow}) => {
   
  return (
    <section class="near-you">
    <div class="container restaurants">
    <h1>50 restaurants</h1>
    <div class="restaurant-options">
        <div onClick={()=>handlehightolow()} class="restaurant-option">
            Cost High to Lost
        </div>

        <div onClick={()=>handlelowtohigh()} class="restaurant-option">
            Cost Low to High
        </div>
        <div onClick={()=>handlesortstar(1)} class="restaurant-option">
            1 Star
        </div>
        <div onClick={()=>handlesortstar(2)} class="restaurant-option">
            2 Star
        </div>
        <div onClick={()=>handlesortstar(3)} class="restaurant-option">
            3 Star
        </div>
        <div onClick={()=>handlesortstar(4)} class="restaurant-option">
            4 Star
        </div>
        <div onClick={()=>handlecash("co")} class="restaurant-option">
           Cash only
        </div>
        <div onClick={()=>handlecash("ca")} class="restaurant-option">
            Card Only
        </div>
        <div onClick={()=>handleall()} class="restaurant-option">
            All 
        </div>
        
    </div>
</div>


</section>
    


  )
}
export default Filters
