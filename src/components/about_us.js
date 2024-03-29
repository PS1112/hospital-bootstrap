import React from 'react'
import '../styles/about_us.css'

export default function AboutUs() {
  return (
    <>
    <div id='parent'className=' container-fluid text-center'>
      <p className='h1 mt-5'>&nbsp;Get in touch with us &nbsp;</p>
      <div id='child' className=' row align-items-center' >
      <div id='location'className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4  ' >
      <span className='h3 '>Location</span>
      <span className='h5'><a href='https://goo.gl/maps/xVWLP39Jk8gcB3DJA' itemProp='location'>Industrial Area Phase, 2, Ram Darbar,<br/> Chandigarh, 160002 </a></span>
      </div>
      <div id='phone' className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 '>
      <span className='h3'>Phone Number</span>
      <span className='h5'><a href='tel:7087670183' itemProp='telephone' >1234567890</a></span>
      </div>
      <div id='mail' className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 '>
      <span className='h3'>E-mail us</span>
      <span className='h5' ><a href='mailto:sphospital18@gmail.com' itemProp='email' >sphospital18@gmail.com</a></span> 
      </div> 
      </div>
      <div id='map' className='row '>
    <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d109784.75515735196!2d76.71801608560789!3d30.696645508092736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390feb7d07c8944b%3A0xb363cbb60125275e!2sIndustrial%20Area%20Phase%2C%202%2C%20Ram%20Darbar%2C%20Chandigarh%2C%20160002!3m2!1d30.6966643!2d76.7880563!5e0!3m2!1sen!2sin!4v1674551392418!5m2!1sen!2sin" width="auto" height="600" style={{"border":"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
     
    </>
  )
}
