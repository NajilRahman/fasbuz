import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './card';
function Fashion() {
  const [items,setItems]=useState([]);
  const urlParams = new URLSearchParams(window.location.search);
  const param=urlParams.get('name');

useEffect(()=>{
    axios.post('http://localhost:8000/categories',{category:'Fashion',param:param})
    .then((res)=>{
      setItems(res.data)
      console.log(items)
    })
    .catch(err=>{
      console.log(err)
    })

  },[]);
  return (
<center>
  <div className='container row' style={{padding:"50px",background:"white",marginTop:"100px",gap:"20px",width:"100vw"}}> {
          items.map((obj)=>{
           return( <Card className='col-3' title={obj.product_name} des={obj.product_rate} link={obj.product_image} navigate={`fashion?name=${obj.product_name}`}category={obj.category}></Card>
           
          )
          })
        }
      </div>
</center>
  )
}

export default Fashion
