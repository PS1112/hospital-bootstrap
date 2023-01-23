import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/header.css'

export default function Header() {
  return (
    <>
    <div id='details' className='col-xs-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
    Contact Us +91 0123456789 | sp@hospital.com&nbsp;&nbsp;&nbsp;
    </div>
    <header id='header' className='sticky-top'>
      <div id='title'>
        <Link to="/">
        <span id='span1' className='h1'>SP&nbsp;Hospital</span>
        </Link>
      </div>
      <div id='navbar'>
        <li><Link to="/">&nbsp;&nbsp;Home&nbsp;&nbsp;</Link></li>
        <li><Link to="departments">&nbsp;&nbsp;Departments&nbsp;&nbsp;</Link></li>
        <li><Link to="services">&nbsp;&nbsp;Services&nbsp;&nbsp;</Link></li>
        <li><Link to="about_us">&nbsp;&nbsp;About us&nbsp;&nbsp;</Link></li>
      </div>
    </header>
    
      
    </>
  )
}
