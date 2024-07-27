import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function Login (props) {
  const navigator=useNavigate();
  const [mail,setMail]=useState('');
  const [pass,setPass]=useState('');
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')));
  const sub=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:8000/userlogin',{email:mail,password:pass})
  .then(res=>{
    console.log(res.data[0])
    if(res.data[0].email==mail && res.data[0].password==pass )
      {
        toast(" Logined succesfully")
        localStorage.setItem('user',JSON.stringify(res.data[0]))
        navigator('/home')
      }
      else{
        toast("❗️ Wrong Password or Email")
      }
  })
  .catch(err=>{
    console.log(err)
    toast("❗️ Wrong Password or Email")
  })

}
  return (
   <div className='container' style={{backgroundColor:"white" ,border:"2px solid #e7e4e4", marginTop:"15vh",maxWidth:"400px",minWidth:"200px",maxHeight:"max-content", padding:"2%",borderRadius:"10px"}}>
    <ToastContainer/>
        <form className="row g-3">
        <div className="col-md-12 container" style={{margin:"10px"}}>
        <center><FontAwesomeIcon icon={faUser} size="7x" style={{color: "#8080ff",}} /></center>
      </div>
      <div className="col-md-12">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputEmail4"  style={{backgroundColor:"#f2f2f2"}} onChange={(e)=>setMail(e.target.value)}/>
      </div>
      <div className="col-md-12">
        <label htmlFor="inputPassword4" className="form-label" >Password</label>
        <input type="password" className="form-control" id="inputPassword4" style={{backgroundColor:"#f2f2f2"}} onChange={(e)=>setPass(e.target.value)}/>
      </div>
      <div className="col-12">
        <center><a href='#' style={{color:"blue"}}>Forgot password ?</a></center>
      </div>
      <div className="col-12">
        <center><button class='regbtn' onClick={sub} className="btn btn-primary" style={{margin:"1%",width:"60%",height:"7vh", backgroundColor:"#8080ff",borderColor:"white"}}>Login</button></center>
      </div>
      <div className="col-12">
        <center><h6>OR</h6></center>
      </div>
      <div className="col-12">
      <center><Link to='/register'><button  class='regbtn' className="btn btn-primary" style={{margin:"1%",width:"60%",height:"7vh", backgroundColor:"#8080ff",borderColor:"white"}}>Regiser</button></Link></center>
      </div>
    </form>
       </div>
  )
}

export default Login 
