import React from 'react'
import Kart from './kart'
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const fashion=require('../images/fashion.jpg')
function Card(props) {
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')));
 const setkart=()=>{ 
  axios.post('http://localhost:8000/setkart',{email:user.email,product_name:props.title,product_image:props.link,product_rate:props.des, category:props.category})
  .then(res=>{
    console.log(res.data)
    toast(`📢        Item Added To Cart`)
  })
  .catch(err=>{
    console.log(err)
    toast(`📢   please login`)
  });
}
  return (

    
      <div className="card" style={{width: "18rem",padding:"10px",backgroundColor:"#e6e6ff",color:"black"}} class="card">
            <ToastContainer/>
      <img style={{width:"100%", height:"200px",borderRadius:"10px"}} src={props.link} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"style={{fontSize:"1.6vw"}}>{props.title}</h5>
        <p className="card-text" style={{fontSize:"1vw"}}>{props.des}</p>
        <a href={`/${props.navigate}`} className="btn" style={{backgroundColor:"black",color:'white',fontSize:"1.2vw"}}>Buy Now</a>
        <br/>
        <button onClick={setkart} className='btn' style={{background:'black',color:"white", marginTop:"1vh"}}>Add To Kart</button>
      </div>
    </div>   
  )
}

export default Card
