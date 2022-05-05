import React from 'react';
// import Home from './Home';
import logo from './Images/logo.png';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import './Navbar.css'
const Navbar = () => {
  return (
    <span style={{display:"flex",background:"#gray"}}>
    <img src={logo}></img>
     <Link className='right1' to="/Home">Hire Our Candidate</Link> 
    </span>
  )
}

export default Navbar