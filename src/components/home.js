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
   <span className='h5'>A Multi speciality Speciality Hospital, SP Hospital provides a comprehensive range of services to ensure that all of the patients get the high quality care they deserve. We have all the specialists under one roof.</span>
   <div id='floater' className='col-xs-12 col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7'>
    <Button id='btn'><Link to='about_us'>Read more</Link></Button>
   </div>
  </div>
</div>
<div id='services_info' className='col-xs-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="30"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
<div id='col1'>
  <span className='card-title'>
    ICU    
  </span>
  <br/>
  <span className='card-text'>
  The Intensive Care Unit (ICU) is a separate, self-contained<br/> area within a medical facility, equipped with high-tech<br/> specialised facilities designed for close monitoring, rapid <br/>intervention and often extended treatment of patients with acute organ dysfunction.
  </span>
</div>

<div id='col2'>
  <span className='card-title'>
    Vaccination
  </span>
  <br/>
  <span className='card-text'>
  Vaccination is the administration of a vaccine to help the immune system develop immunity from a disease.
  </span>
</div>

<div id='col3'>
  <span className='card-title'>
    Laboratory
  </span>
  <br/>
  <span className='card-text'>
  healthcare facilities providing a wide range <br/>of laboratory procedures which aid the physicians<br/> in carrying out the diagnosis, treatment, and management of patients.
  </span>
</div>

</div>
<div id='query' className='col-xs-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
<span className='h1'>Have any question or need any consultation? </span>
<Button id='btn'><Link to='about_us'>&nbsp;Contact&nbsp;Us&nbsp;</Link></Button>
</div>

    </>
  )
}
