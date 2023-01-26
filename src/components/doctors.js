import React from 'react'
import '../styles/departments.css'

const Doctors = (props) =>{
    return(
    <>
    <div id='doctors' className='mt-4 mb-5'>
    {
  props.doc.map( (item) => (
<div id='card'className='p-3' >
<img className='rounded' src={item.image} alt="" height="200px" />
<h3 className='mt-2'>Name: {item.name}</h3>
<p className='h5'>Speciality: {item.speciality}</p>
<p className='h6 text-justify'>Experience: {item.experience}</p>
<hr />
</div>
) )
}  
</div>
    </>
    )

}
export default Doctors;
