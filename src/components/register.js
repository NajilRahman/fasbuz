import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Toast from './toast'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register(props) {
  const navigator=useNavigate()
  const [name,setName]=useState('');
  const [pass,setPass]=useState('');
  const [dob,setDob]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [state,setState]=useState('');
  const [zip,setZip]=useState('');
  const registeruser=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8000/user',{name:name,pass:pass,dob:dob,email:email,phone:phone,state:state,zip:zip})
    .then(res=>{
      navigator('/login')
    }).catch(err=>{
      console.log(err)
      toast("❗️ Somthing went wrong. check provided Info")
    })
}
  return (
  <div className='container' style={{backgroundColor:"white" ,border:"2px solid #e7e4e4", marginTop:"15vh",maxWidth:"400px",minWidth:"200px",maxHeight:"max-content", padding:"2%",borderRadius:"10px"}}>
    <ToastContainer />
        <form className="row g-3"  >
        <div className="col-md-12 container" style={{margin:"10px"}}>
        <center><FontAwesomeIcon icon={faUser} size="7x" style={{color: "#8080ff",}} /></center>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label" >Name</label>
        <input type="text" className="form-control" id="inputEmail4"  style={{backgroundColor:"#f2f2f2"}} onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">Password</label>
        <input type="password" className="form-control" id="inputPassword4" style={{backgroundColor:"#f2f2f2"}} onChange={(e)=>setPass(e.target.value)} />
      </div>
      <div className="col-6">
        <label htmlFor="inputAddress" className="form-label">Phone</label>
        <input type="tel" className="form-control" id="inputAddress" placeholder="+91" style={{backgroundColor:"#f2f2f2"}} onChange={(e)=>setPhone(e.target.value)}/>
      </div>
      <div className="col-6">
        <label htmlFor="inputAddress2" className="form-label">DOB</label>
        <input type="date" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" style={{backgroundColor:"#f2f2f2"}} onChange={(e)=>setDob(e.target.value)} />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">Email</label>
        <input type="email" className="form-control" id="inputCity" style={{backgroundColor:"#f2f2f2"}} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">State</label>
        <select id="inputState" className="form-select" style={{backgroundColor:"#f2f2f2"}} onChange={(e)=>setState(e.target.value)}>
          <option selected>Choose...</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
      <option value="Assam">Assam</option>
      <option value="Bihar">Bihar</option>
      <option value="Chhattisgarh">Chhattisgarh</option>
      <option value="Goa">Goa</option>
      <option value="Gujarat">Gujarat</option>
      <option value="Haryana">Haryana</option>
      <option value="Himachal Pradesh">Himachal Pradesh</option>
      <option value="Jharkhand">Jharkhand</option>
      <option value="Karnataka">Karnataka</option>
      <option value="Kerala">Kerala</option>
      <option value="Madhya Pradesh">Madhya Pradesh</option>
      <option value="Maharashtra">Maharashtra</option>
      <option value="Manipur">Manipur</option>
      <option value="Meghalaya">Meghalaya</option>
      <option value="Mizoram">Mizoram</option>
      <option value="Nagaland">Nagaland</option>
      <option value="Odisha">Odisha</option>
      <option value="Punjab">Punjab</option>
      <option value="Rajasthan">Rajasthan</option>
      <option value="Sikkim">Sikkim</option>
      <option value="Tamil Nadu">Tamil Nadu</option>
      <option value="Telangana">Telangana</option>
      <option value="Tripura">Tripura</option>
      <option value="Uttar Pradesh">Uttar Pradesh</option>
      <option value="Uttarakhand">Uttarakhand</option>
      <option value="West Bengal">West Bengal</option>
    
        </select>
      </div>
      <div className="col-md-2">
        <label htmlFor="inputZip" className="form-label">Zip</label>
        <input type="text" className="form-control" id="inputZip" style={{backgroundColor:"#f2f2f2"}} onChange={(e)=>setZip(e.target.value)}/>
      </div>
        <div className="col-12">
          <center><button onClick={registeruser}class='regbtn' type="submit" className="btn btn-primary" style={{margin:"2%",width:"60%",height:"7vh", backgroundColor:"#8080ff",borderColor:"white"}}>Register</button></center>
        </div>
      <div className="col-12">
        <center><h6>OR</h6></center>
      </div>
      <div className="col-12">
        <center><Link to='/login'><button  class='regbtn'  className="btn btn-primary" style={{margin:"1%",width:"60%",height:"7vh", backgroundColor:"#8080ff",borderColor:"white"}}>Login</button></Link></center>
      </div>
    </form>
     </div>
  )
}

export default Register
