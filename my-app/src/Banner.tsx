import React from 'react';
import Navbar from './Navbar';
import "./Banner.css";
import { Link } from 'react-router-dom';

const Banner = () => {

  return (
    // <div className='color'>
    // //  style={{display:"flex",background:"pink",height:"50px", padding:"200px"}} 
    // //   Source our <b>Active IT JobSeeker</b>
    // //   <button className='button'>Hire our Candidate</button>
    //   </div>
    <div className='happy'>
    <h1 className='center'>
      source our <b>ACTIVE IT JOB SEEKER</b>
      </h1>
      <Link className='sad' to="/Home">Hire Out Canditate</Link>
    </div>
  )
}

export default Banner