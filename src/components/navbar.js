import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faSearch, faUser,faShoppingCart} from '@fortawesome/free-solid-svg-icons'; // Importing faSearch for the search icon
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes, // Import Routes
  Route,
  Link,
} from "react-router-dom";
function Navbar() {
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')));
  const [searchdata,setSearchdata]=useState([])
  const navigate=useNavigate();
  const profile=()=>{
    setUser(JSON.parse(localStorage.getItem('user')))
    console.log(user)
    if(user.email!=='')
      {
        //show profile
        navigate('/userProfile')
      }
      else{
        navigate('/login')
      }
  }
  const searchitems=(e)=>{
    setTimeout(() => {
      axios.post('http://localhost:8000/search',{search:e.target.value})
      .then(res=>{
        document.getElementById('searchseg').style.display='block'

        console.log(res.data)
        setSearchdata(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
    }, 10);
   
  }
  const closesug=()=>{
    document.getElementById('searchseg').style.display='none'
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor:"#8080ff"}}>
        <div className="container-fluid" style={{paddingLeft:"2vw"}}>
          <a className="navbar-brand" href="/"><h2 style={{color:"white"}}>Fasbuz<FontAwesomeIcon icon={faTruckFast} fade size="1x" style={{color: "white"}} /></h2></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{'--bs-scroll-height': '100px', gap:"1vw", marginLeft:"2vw"}}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home" style={{color:"white"}} >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color:"white"}}>Contact Us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Electronics</a></li>
                  <li><a className="dropdown-item" href="/">Gadgets</a></li>
                  <li><a className="dropdown-item" href="/">Fashion</a></li>
                  <li><a className="dropdown-item" href="/">Grocery</a></li>
                  <li><a className="dropdown-item" href="/">Other</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" style={{marginRight:"20vw"}}>
              <input className="form-control me-2" onChange={searchitems} type="search" id='search' placeholder="Search" aria-label="Search" style={{width:'30vw'}} />
              <button className="btn" type="submit"><FontAwesomeIcon icon={faSearch} beat color='white' /></button>
            </form>
                  <div className='container-fuid' style={{marginRight:"3vw",cursor:'pointer'}} onClick={()=>{navigate('kart')}}><FontAwesomeIcon icon={faShoppingCart} shake size='2x' style={{color: "#ffffff"}} /></div>
                    <div onClick={profile} id='profile' style={{backgroundImage:`url(${user.profilepic})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}></div>
          </div>
        </div>
      </nav>
      <label forHtml='search'>
        <div id='searchseg' style={{background:'#8080ff', width:'30vw',marginTop:"7vh",marginLeft:'42vw',padding:"20px",position:"absolute",zIndex:10,display:'none'}}>
      <button type="button" class="btn btn-danger" onClick={closesug}>
  Close <i class="fas fa-times ml-1"></i>
</button>
      {
        searchdata.map(obj=>{
         return(<a style={{textDecoration:'none',color:'black'}} href={'http://localhost:3000/fashion?name='+`${obj.product_name}`}><div onClick={()=>navigate(`/${obj.category}?name=${obj.product_name}`)} style={{height:"max-content",padding:"10px",margin:"20px",background:'white'}}>{obj.product_name}</div></a>)
        })
      }
      </div></label>
    </>
  );
}

export default Navbar;
