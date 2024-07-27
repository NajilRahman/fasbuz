import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function Profile() {
  const navigator=useNavigate();
const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')));
const [editprof,SetEditprof]=useState(true)
const [name,setName]=useState(user.name);
  const [pass,setPass]=useState(user.password);
  const [dob,setDob]=useState(user.dob);
  const [email,setEmail]=useState(user.email);
  const [phone,setPhone]=useState(user.phone);
  const [state,setState]=useState(user.state);
  const [zip,setZip]=useState(user.zip);
  const [imgurl,setImgurl]=useState();
const profedit=()=>{
  true==editprof?SetEditprof(false):SetEditprof(true)
}

const updateimg=(e)=>{
  const file=e.target.files[0];
  console.log(file)
  const reader=new FileReader;
  reader.readAsDataURL(file);
  reader.onload = ()=>{
    setImgurl(reader.result)
    console.log(reader.result)
  }
}

const updateProfile = async (e) => {
  e.preventDefault();
  try {
      const res = await axios.patch('http://localhost:8000/updateProfileData', {
          name: name,
          pass: pass,
          dob: dob,
          email: email,
          phone: phone,
          state: state,
          zip: zip,
          profilepic: imgurl
      });
      localStorage.setItem('user', JSON.stringify(res.data));
      toast("❗️ Profile Data updated successfully");
      console.log(JSON.stringify(res.data));
      window.location.reload();
  } catch (err) {
      console.log(err);
      toast("❗️ Wrong info recheck provided data");
  }
}

const logout=()=>{
  if(user.email!==''){
  localStorage.setItem('user',JSON.stringify({"_id":"","name":"","phone":+91,"email":"","password":"","state":"","zip":"000","dob":"2024-04-28","profilepic":"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png","__v":0}))
  }
  else{
    navigator('/login')
  }
}

  return (

    <div>
      <ToastContainer/>
      <div className='conatier' style={{margin:'100px', height:"max-content", background:"white", padding:"50px"}}>
        <center>
          <div className=' container-fluid' class="profpic" style={{overflow:"hidden", backgroundImage:`url(${user.profilepic})`,width:"150px",borderRadius:"100px",height:'150px',backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                  <label htmlFor="profiles" id='proset' style={{marginTop:"50px",fontSize:"1.6vw",cursor:'pointer',padding:"10px",color:"white",textShadow:"3px 3px 2px black"}}>{editprof==false?'Upload':'' }</label>
              <input type="file" id='profiles' onChange={updateimg} style={{display:"none",textAlign:'center'}}/>
  </div>
  </center>
        <form className="row g-3 needs-validation" novalidate>
    <div className="col-md-4">
      <label htmlFor="validationCustom01" className="form-label">Name</label>
      <input type="text" className="form-control profdis" id="validationCustom01"  onChange={(e)=>setName(e.target.value)}    required disabled={editprof} value={name}/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-4">
      <label htmlFor="validationCustom02" className="form-label">Phone</label>
      <input type="tel" className="form-control" id="validationCustom02"   onChange={(e)=>setPhone(e.target.value)}  required disabled={editprof} value={phone}/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-4">
      <label htmlFor="validationCustomUsername" className="form-label">Password</label>
      <div className="input-group has-validation">
        <input type="Password" className="form-control profdis" onChange={(e)=>setPass(e.target.value)} id="validationCustomUsername"   aria-describedby="inputGroupPrepend" required disabled={editprof} value={pass}/>
        <div className="invalid-feedback">
          Please choose a Password.
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <label htmlFor="validationCustom03" className="form-label">Email</label>
      <input type="email" className="form-control profdis" onChange={(e)=>setEmail(e.target.value)} id="validationCustom03"   required disabled={true} value={email}/>
      <div className="invalid-feedback">
        Please provide a valid Email.
      </div>
    </div>
    <div className="col-md-3">
      <label htmlFor="validationCustom03" className="form-label">DOB</label>
      <input type="date"  className="form-control profdis" onChange={(e)=>setDob(e.target.value)} id="validationCustom03"   required disabled={editprof} value={dob}/>
      <div className="invalid-feedback">
        Please provide a valid DOB.
      </div>
    </div>
    <div className="col-md-3">
      <label htmlFor="validationCustom04" className="form-label">State</label>
      <select className="form-select profdis" id="validationCustom04" onChange={(e)=>setState(e.target.value)}   required disabled={editprof}>
        <option selected   value="">{state}</option>
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
      <div className="invalid-feedback">
        Please select a valid state.
      </div>
    </div>
    <div className="col-md-3">
      <label htmlFor="validationCustom05" className="form-label">Zip</label>
      <input type="number" className="form-control profdis" onChange={(e)=>setZip(e.target.value)} id="validationCustom05"   required value={zip} disabled={editprof}/>
    </div>
    <div className="col-12" >
      <button className="btn btn-primary" onClick={profedit} style={{margin:"20px"}} type="submit" disabled={user.email==''?true:false}>Edit</button>
      <button className="btn btn-primary" onClick={updateProfile} style={{margin:"20px"}} type="submit" disabled={user.email==''?true:false}>Save</button>
      <button className="btn btn-primary" onClick={logout} style={{margin:"20px"}} type="submit" >{user.email!==''?'logout':'Login'}</button>
    </div>
  </form>
      </div>
    </div>
  )
}

export default Profile
