import React from 'react'
import Filteredelem from "./Filteredelem"

 const Restaurents = ({userdata,newarr,x,y,z}) => {
 
  return (
    <section class="near-you">
      
        <div class="container divider">
            {    ((x==="lh" &&  <Filteredelem mappingdata={userdata}/>)||
                  (x==="hl" &&<Filteredelem  mappingdata={userdata}/>)||
                  (x===0 &&  <Filteredelem mappingdata={userdata}/>)||
                  (x===1 &&  <Filteredelem mappingdata={newarr}/>)||
                  (x===2 &&  <Filteredelem mappingdata={newarr}/>)||
                  (x===3 &&  <Filteredelem mappingdata={newarr}/>)||
                  (x===4 &&  <Filteredelem mappingdata={newarr}/>)||
                   (x==="ca" &&  <Filteredelem mappingdata={newarr}/>)||
                   (x==="co" &&  <Filteredelem mappingdata={newarr}/>)||
                   (x==="all" &&  <Filteredelem mappingdata={newarr}/>)
                  )
              
               
            }
            
        </div>
    </section>
  )
}
export default Restaurents

//(x===0 ?  <Filteredelem mappingdata={userdata}/>:<Filteredelem  mappingdata={newarr}/>)||
//(y===0 ?   <Filteredelem mappingdata={userdata}/>:<Filteredelem  mappingdata={newarr}/>)