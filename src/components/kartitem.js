import axios from 'axios'
import React from 'react'
import { useState } from 'react';
function Kartitem(props) {
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')));
 const  removekartitem=()=>{
  axios.post('http://localhost:8000/removekartitem',{email:user.email,product_name:props.product_name})
  .then(res=>{
    console.log(res.data)
  })
  .catch(err=>{
    console.log(err)
  });
 }
  return (
    <div className="card" style={{width: '18rem',height:'max-content'}}>
    <img src={props.product_image} className="card-img-top" alt="..." style={{width:'100%',height:'30vh'}}/>
    <div className="card-body">
      <h5 className="card-title">{props.product_name}</h5>
      <p className="card-text">{props.product_rate}</p>
      <a href="/kart" className="btn btn-primary" style={{backgroundColor:'black',color:'white',border:'1px solid black'}}>Checkout</a>
      <br/><br/> 
      <a href="/kart" className="btn btn-primary"  style={{backgroundColor:'black',color:'white',border:'1px solid black'}} onClick={removekartitem}>Remove</a>
    </div>
      </div>
  )
}

export default Kartitem
