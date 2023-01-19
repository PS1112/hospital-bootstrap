import React from 'react'
import '../styles/home.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import video from '../videos/about_video.mp4'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Home() {
  AOS.init()
  return (
    <>
    
    <div id='handmadecaraousel' className='col-xs-12 col-12 col-cm-12 col-md-12 col-lg-12 col-xl-12'>
<div id='slogan' className='col-12 col-cm-12 col-md-12 col-lg-12 col-xl-12'>
  <span id='slogan_title' className='h1'>Health care services</span>
  <span id='phrase' className='h4'>Creating healthy tomorrows...<br/> and better today....</span>
  <div id='control_btn'><Button id="btn_1"><Link to="services">view services</Link></Button> 
  &nbsp;&nbsp;
  <Button id="btn_2"><Link to="appointment_form">Appointment form</Link></Button></div>
</div>
</div>
<div id='about' className='col-xs-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="30"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" >
  <div id='video' className='col-xs-12 col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 d-flex justify-content-center'>
    <video src={video} width='90%' height='100%'  autoPlay loop/>
  </div>
  <div id='about_text' className='col-xs-12 col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7'>
   <span className='h1'> About&nbsp;SP&nbsp;Hospital</span>
   <br/>
   <br/>
   <span className='h4'>A Multi speciality Speciality Hospital, SP Hospital provides a comprehensive range of services to ensure that all of the patients get the high quality care they deserve. We have all the specialists under one roof.</span>
   <div id='floater' className='col-xs-12 col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7'>
    <Button id='btn'><Link to='about_us'>Read more</Link></Button>
   </div>
  </div>
</div>
<div id='services_info' className='col-xs-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
{/* <div className="card" style="width: 18rem;">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
</div>
<div id='query' className='col-xs-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
<span className='h1'>Have any question or need any consultation? </span>
<Button><Link to='about_us'>&nbsp;Contact&nbsp;Us&nbsp;</Link></Button>
</div>

    </>
  )
}
