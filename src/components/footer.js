import React from 'react'
import '../styles/footer.css'

export default function Footer() {
  return (
  <>
  <footer id='footer' className='col-xs-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
<div id='row1' className='col-xs-6 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
  <h3>Our Doctors</h3>
  <br/>
  <ul type='square'>
  <li> Dr Awadesh Tripathi </li>
  <li> Dr Karuna </li>
  <li> Dr KVS Rana </li>
  <li> Dr Yashlesh Tyagi </li>
  <li> Dr Payal Kapoors </li>
  <li> Dr Anmol Gupta </li>
  </ul>
</div>
<div id='row2' className='col-xs-6 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
  <h3>Opening Hours</h3>
  <br/>
  <ul type='squaare'>
  <li>Mon : 9:00 AM - 11:30 PM </li>
  <li>Tue : 9:00 AM - 11:30 PM </li>
  <li>Wed : 9:00 AM - 11:30 PM </li>
  <li>Thu : 9:00 AM - 11:30 PM </li>
  <li>Fri : 9:00 AM - 11:30 PM </li>
  <li>Sat : 9:00 AM - 11:30 PM </li>
  <li>Sun : 9:00 AM - 11:30 PM </li>
  </ul>
</div>
  </footer>
  </>
  )
}
