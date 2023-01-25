import React,{useEffect, useState} from 'react'
import '../styles/home.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import icu from '../images/icu.jpg';
import ent from '../images/ent.jpeg';
import vaccination from '../images/vaccination.jpeg'
import video from '../videos/about_video.mp4'
import { Button,Modal, Form, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <>
    {/*  */}
    <div id='self_made_caraousel' className='col-xs-12 col-12 col-cm-12 col-md-12 col-lg-12 col-xl-12'>
<div id='slogan' className='col-12 col-cm-12 col-md-12 col-lg-12 col-xl-12'>
  <span id='slogan_title' className='h1'>Health care services</span>
  <span id='phrase' className='h4'>Creating healthy tomorrows...<br/> and better today....</span>
  <div id='control_btn'>
  <Button id="btn_1"><Link to="services">view services</Link></Button>
  &nbsp;&nbsp;
  <Button id="btn_2" onClick={handleShow}> Appointment form </Button></div>
</div>
</div>
{/* creating modal */}
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Appointment Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  mt-3 mb-4 '>
      <Row className="mb-3">
        <Form.Label className='h4'>Personal Details</Form.Label>
        <Form.Group as={Col} controlid="formGridFname">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" />
        </Form.Group>

        <Form.Group as={Col} controlid="formGridSname">
          <Form.Label>Second Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Second Name" />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlid="formGridSex">
          <Form.Label>Phone No.</Form.Label>
          <Form.Control type="tel" placeholder="xxxxxxxxxx"/>
        </Form.Group>
        <Form.Group as={Col} controlid="formGridSe">
          <Form.Label>Gender</Form.Label>
          <Form.Select defaultValue="Choose Your Gender">
            <option value="choose">Choose Your Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlid="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlid="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
       <Form.Label className='h4'>Appointment Details</Form.Label>
         <Form.Group as={Col} controlid="formGridDate">
          <Form.Label>Appointment Date</Form.Label>
          <Form.Control type="date" placeholder="dd/mm/yyyy"/>
         </Form.Group>
         <Form.Group as={Col} controlid="formGridTimeSlot">
          <Form.Label>Time Slot</Form.Label>
          <Form.Control type="time" placeholder='00:00:00'/>
         </Form.Group>
      </Row>
        
      <Form.Group as={Col} controlid="formGridService">
          <Form.Label>Choose Service</Form.Label>
          <Form.Select defaultValue="pick one of the following">
            <option>pick one of the following</option>
            <option value="ICU">ICU</option>
            <option value="ENT">ENT</option>
            <option value="Vaccination">Vaccination</option>
            <option value="Laboratory">Laboratory</option>
            <option value="Rehabilitation services and physical therapy">Rehabilitation services and physical therapy</option>
            <option value="General and specialty surgical services">General and specialty surgical services</option>
            <option value="Home nursing services">Home nursing services</option>
            <option value="Mental health care">Mental health care</option>
            </Form.Select>
         </Form.Group>
         
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
        Submit
      </Button>
        </Modal.Footer>
      </Modal>
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
<div id='services_info' className='container-fluid'
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="30"
    data-aos-duration="400"
    data-aos-easing="ease-in-out" >
      <div className=' row justify-content-center'>
  {/* card-1 */}
  <div className='col-lg-4'>
            <div className='card mb-md-0 mb-3 mt-3'>
              <img src={icu} alt='' height={350} width={250} className='card-img-top'/>
              <div id='card_body' className='card-body '>
                <strong className='mb-2 d-block'>ICU</strong>
                <div className='mb-4'>
                  <p className='text-justify'>The Intensive Care Unit (ICU) is a separate, self-contained area within a medical facility.</p>
                </div>
              </div>
            </div>
          </div>

          {/* card-2 */}
          <div className='col-lg-4'>
            <div className='card mb-md-0 mb-3 mt-3'>
              <img src={ent} alt='' height={350} width={250} className='card-img-top'/>
              <div id='card_body' className='card-body '>
                <strong className='mb-2 d-block'>ENT</strong>
                <div className='mb-4'>
                  <p className='text-justify'>ENTs deal with anything that has to do with the head, neck, and ears in adults and children.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* card-3 */}
          <div className='col-lg-4'>
            <div className='card mb-md-0 mb-3 mt-3'>
              <img src={vaccination} alt='' height={350} width={250} className='card-img-top'/>
              <div id='card_body' className='card-body '>
                <strong className='mb-2 d-block'>Vaccination</strong>
                <div className='mb-4'>
                  <p className='text-justify'> the administration of a vaccine to help the immune system develop immunity from a disease.</p>
                </div>
              </div>
            </div>
          </div>
          </div> 
          <div className=''></div>
          <Button id='btn' className='mt-3 mb-3'><Link to='services'>&nbsp;More&nbsp;</Link></Button>    
          </div>
{/*  */}
<div id='query' className='col-xs-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
<span className='h1'>Have any question or need any consultation? </span>
<Button id='btn'><Link to='about_us'>&nbsp;Contact&nbsp;Us&nbsp;</Link></Button>
</div>


    </>
  )
}


