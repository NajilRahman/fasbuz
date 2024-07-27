import './App.css';
import Login from './components/login';
import Loginpage from './components/loginpage';
import Home from './components/home';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/register';
import Profile from './components/profile';
import Fashion from './components/fashion';
import Kart from './components/kart';

function App() {
  return (
   <div>
      <Router>
        <Navbar/>
       <div>
         <Routes>
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/register' element={<Register/>} />
            <Route exact path='/home' element ={<Home/>}/>
            <Route exact path='/' element ={<Home/>}/>
            <Route exact path='/kart' element ={<Kart/>}/>
            <Route exact path='/userProfile' element={<Profile/>}/>
            <Route exact path='/fashion' element={<Fashion/>}/>
         </Routes>
       </div>
      </Router>
   </div>
  );
}

export default App;
