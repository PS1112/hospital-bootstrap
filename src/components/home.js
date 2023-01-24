import React,{useEffect} from 'react'
import '../styles/home.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import icu from '../images/icu.jpg';
import ent from '../images/ent.jpeg';
import vaccination from '../images/vaccination.jpeg'
import video from '../videos/about_video.mp4'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
export default function Home() {
  AOS.init()
     
  const navigate = useNavigate();
  useEffect(()=>{
      const authToken = sessionStorage.getItem('Auth Token')

      if (authToken){
          navigate('/Home')
      }
      if (!authToken) {
          navigate('/')
      }
  },[])
 
  return (
    <>

    <div id='handmadecaraousel' className='col-xs-12 col-12 col-cm-12 col-md-12 col-lg-12 col-xl-12'>
<div id='slogan' className='col-12 col-cm-12 col-md-12 col-lg-12 col-xl-12'>
  <span id='slogan_title' className='h1'>Health care services</span>
  <span id='phrase' className='h4'>Creating healthy tomorrows...<br/> and better today....</span>
  <div id='control_btn'><Button id="btn_1"><Link to="services">view services</Link></Button> 
  &nbsp;&nbsp;
  <Button id="btn_2">Appointment form</Button></div>
</div>
</div>
{/*  */}
<div id='about' className='row justify-content-center align-items-center'
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="30"
    data-aos-duration="400"
    data-aos-easing="ease-in-out" >
  <div id='video' className='col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 '>
    <video  src={video} width='90%' height='100%'  autoPlay loop/>
  </div>
  <div id='about_text' className='col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7'>
   <p className='h1'> About&nbsp;SP&nbsp;Hospital</p>
   <br/>
   <br/>
   <p className='h5'>A Multi speciality Speciality Hospital, SP Hospital provides a comprehensive range<br/> of services to ensure that all of the patients get the high quality care they deserve.<br/> We have all the specialists under one roof.</p>
  <br/>
  <br/>
  <Button id='btn'><Link to='about_us'>Read more</Link></Button>
  </div>
  </div>
  {/*  */}
<div id='services_info' className=' row justify-content-center align-items-center'
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="30"
    data-aos-duration="400"
    data-aos-easing="ease-in-out" >
      <div className='container'>
  {/* card-1 */}
  <div className='col-lg-4'>
            <div className='card mb-md-0 mb-3'>
              <img src={icu} alt='' height={350} width={250} className='card-img-top'/>
              <div id='card_body' className='card-body py-3'>
                <strong className='mb-2 d-block'>ICU</strong>
                <div className='mb-4'>
                  <p className='text-justify'>The Intensive Care Unit (ICU) is a separate, self-contained area within a medical facility.</p>
                </div>
              </div>
            </div>
          </div>

          {/* card-2 */}
          <div className='col-lg-4'>
            <div className='card mb-md-0 mb-3'>
              <img src={ent} alt='' height={350} width={250} className='card-img-top'/>
              <div id='card_body' className='card-body py-3'>
                <strong className='mb-2 d-block'>ENT</strong>
                <div className='mb-4'>
                  <p className='text-justify'>ENTs deal with anything that has to do with the head, neck, and ears in adults and children.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* card-3 */}
          <div className='col-lg-4'>
            <div className='card mb-md-0 mb-3'>
              <img src={vaccination} alt='' height={350} width={250} className='card-img-top'/>
              <div id='card_body' className='card-body py-3'>
                <strong className='mb-2 d-block'>Vaccination</strong>
                <div className='mb-4'>
                  <p className='text-justify'>Vaccination is the administration of a vaccine to help the immune system develop immunity from a disease.</p>
                </div>
              </div>
            </div>
          </div>
          </div>     
        </div>
<div id='query' className='col-xs-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
<span className='h1'>Have any question or need any consultation? </span>
<Button id='btn'><Link to='about_us'>&nbsp;Contact&nbsp;Us&nbsp;</Link></Button>
</div>

    </>
  )
}
