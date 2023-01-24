import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import '../styles/header.css'

export default function Header() {
  let navigate= useNavigate();
  const handlelogout = ()=>{
  
      sessionStorage.removeItem( 'Auth Token')
      navigate('/')
      toast.success("Logged Out Successfully.")
  }
  return (
    <>
<div id='details' className='col-xs-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' >
    Contact Us +91 0123456789 | sp@hospital.com&nbsp;&nbsp;&nbsp;
    </div>
<nav id='header' className="navbar bg-light sticky-top col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">

   <div className="container-fluid text-center">
    <Link to='home'><p id='nav_title'>&nbsp;SP&nbsp;Hospital&nbsp;</p></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title justify-content-end flex-grow-1" id="offcanvasNavbarLabel"> <Link to='home'><span>&nbsp;SP&nbsp;Hospital&nbsp;</span></Link></h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul id='toggled_nav' className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
          <li className="nav-item pb-3 ">
          <Link to="home"><span>&nbsp;&nbsp;Home&nbsp;&nbsp;</span></Link>
          </li>
          <li className="nav-item pb-3">
          <Link to="departments"><span>&nbsp;&nbsp;Departments&nbsp;&nbsp;</span></Link>
          </li>
          <li className='nav-item pb-3'>
            <Link to="services"><span>&nbsp;&nbsp;Services&nbsp;&nbsp;</span></Link></li>
          <li className='nav-item pb-3'><Link to="about_us"><span>&nbsp;&nbsp;About us&nbsp;&nbsp;</span></Link></li>
          <li><Button className='btn-outline-danger' id='btn' onClick={handlelogout}>Log Out</Button></li>
          </ul>
      </div>
    </div>
  </div>
</nav>      
    </>
  )
}
