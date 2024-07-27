import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from './slider';
import Cards from './cards';
function Home() {
  return (
    <div className='conatiner' >
      <Slider></Slider>
      <Cards></Cards>
    </div>
  )
}

export default Home
