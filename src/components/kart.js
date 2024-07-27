import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Kartitem from './kartitem';
function Kart(props) {
    const navigate=useNavigate();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')));
    const [kart,setKart]=useState([])
    useEffect(() => {
      
    
      return () => {
        axios.post('http://localhost:8000/userkart', { email: user.email })
          .then( res => {
               setKart(res.data);
               console.log(kart);
          })
          .catch(err => {
              console.log(err);
          });
      }
    }, [])


  return (
    <div className=' row' style={{marginTop:"15vh",marginLeft:"100px",background:'white',minHeight:"85vh",padding:"40px",overflowX:'hidden',width:'85vw',gap:'20px'}}>
    {
       kart.map(obj=>{
        return(<Kartitem className="col-6" product_name={obj.product_name} product_rate={obj.product_rate} product_image={obj.product_image}></Kartitem>)
       })
    }
  </div>
   
  )
}

export default Kart
