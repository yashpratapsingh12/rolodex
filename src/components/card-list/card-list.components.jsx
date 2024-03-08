import { Component } from "react";

import './card-list.component.style.css';




const CardList=(props)=>{

 
  
  const{monsters}= props;

   return (
<div className="card-list">


{monsters.map((monsters)=>{
  

  return (

<div className="card-container" key={monsters.id}>

  <img alt={`monster ${monsters.name}`}
   
   src={`https://robohash.org/${monsters.id}?set=set2`}
   
  
  />

  <h2>{monsters.name}</h2>
  <p>{monsters.email}</p>


  </div>
  )

})}


</div>

  

   )

   
    
 }
 





export default CardList;
